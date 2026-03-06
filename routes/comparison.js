const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");

// Get all machines for suggestions
router.get(
  "/machines",
  wrapAsync(async (req, res) => {
    const machines = await Listing.find({}, "title _id price category");
    res.json(machines);
  })
);

// Comparison page route
router.get(
  "/compare",
  wrapAsync(async (req, res) => {
    const { machine1, machine2 } = req.query;

    if (!machine1 || !machine2) {
      return res.render("listings/comparison.ejs", {
        error: "Please provide two machine names to compare",
        machine1: null,
        machine2: null,
      });
    }

    // Find listings with improved search logic or direct ID lookup
    let listing1, listing2;
    if (mongoose.Types.ObjectId.isValid(machine1)) {
      listing1 = await Listing.findById(machine1);
    } else {
      listing1 = await findMachineByName(machine1);
    }
    if (mongoose.Types.ObjectId.isValid(machine2)) {
      listing2 = await Listing.findById(machine2);
    } else {
      listing2 = await findMachineByName(machine2);
    }

    if (!listing1 || !listing2) {
      // Get all machines for error message
      const allMachines = await Listing.find({}, "title").limit(10);
      const availableMachines = allMachines.map((m) => m.title).join(", ");

      return res.render("listings/comparison.ejs", {
        error: `Machine not found. Available machines: ${availableMachines}. Please check the names and try again.`,
        machine1: null,
        machine2: null,
      });
    }

    if (listing1._id.toString() === listing2._id.toString()) {
      return res.render("listings/comparison.ejs", {
        error: "Please select two different machines to compare",
        machine1: null,
        machine2: null,
      });
    }

    // Generate comparison analysis
    const comparison = generateComparison(listing1, listing2);

    res.render("listings/comparison.ejs", {
      machine1: listing1,
      machine2: listing2,
      comparison: comparison,
      error: null,
    });
  })
);

// Helper function to find machine by name with flexible matching
async function findMachineByName(name) {
  if (!name) return null;

  // First try exact match (case-insensitive)
  let listing = await Listing.findOne({
    title: { $regex: `^${escapeRegex(name)}$`, $options: "i" },
  });

  if (listing) return listing;

  // Try partial match - starts with the name
  listing = await Listing.findOne({
    title: { $regex: `^${escapeRegex(name)}`, $options: "i" },
  });

  if (listing) return listing;

  // Try contains match - contains the name as whole word
  listing = await Listing.findOne({
    title: { $regex: `\\b${escapeRegex(name)}\\b`, $options: "i" },
  });

  if (listing) return listing;

  // Last resort - substring match
  listing = await Listing.findOne({
    title: { $regex: escapeRegex(name), $options: "i" },
  });

  return listing;
}

// Escape special regex characters
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Helper function to generate comparison analysis
function generateComparison(m1, m2) {
  const analysis = {
    priceComparison: [],
    features: [],
    verdict: "",
  };

  // Price comparison
  if (m1.price < m2.price) {
    analysis.priceComparison.push(
      `${m1.title} is more affordable at ₹${m1.price} compared to ₹${m2.price}`
    );
    analysis.priceComparison.push(
      `You can save ₹${m2.price - m1.price} by choosing ${m1.title}`
    );
  } else if (m2.price < m1.price) {
    analysis.priceComparison.push(
      `${m2.title} is more affordable at ₹${m2.price} compared to ₹${m1.price}`
    );
    analysis.priceComparison.push(
      `You can save ₹${m1.price - m2.price} by choosing ${m2.title}`
    );
  } else {
    analysis.priceComparison.push("Both machines are priced equally");
  }

  // Category comparison
  if (m1.category === m2.category) {
    analysis.features.push(
      `Both are ${m1.category} machines, so they share similar operation complexity`
    );
  } else {
    analysis.features.push(
      `${m1.title} is ${m1.category} while ${m2.title} is ${m2.category}`
    );
    analysis.features.push(
      `${m1.category} machines offer different benefits compared to ${m2.category} machines`
    );
  }

  // Location comparison
  if (m1.country && m2.country) {
    analysis.features.push(
      `Both machines are available in ${m1.country} and ${m2.country}`
    );
  }

  // Verdict
  if (m1.price < m2.price && m1.category === m2.category) {
    analysis.verdict = `${m1.title} offers the best value for money in the ${m1.category} category`;
  } else if (m2.price < m1.price && m1.category === m2.category) {
    analysis.verdict = `${m2.title} offers the best value for money in the ${m2.category} category`;
  } else if (m1.price < m2.price) {
    analysis.verdict = `Choose ${m1.title} if you prioritize affordability, or ${m2.title} for premium features`;
  } else {
    analysis.verdict = `Choose ${m2.title} if you prioritize affordability, or ${m1.title} for premium features`;
  }

  return analysis;
}

module.exports = router;
