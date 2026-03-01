const express = require("express");
const router = express.Router({ mergeParams: true });
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError.js");

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

    router.post("/", validateReview, wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    let newReview = new Review(req.body.review);
    newReview.createdBy = req.user._id; // Set the current user's ID as the creator of the review
    listing.reviews.push(newReview); // Add the review to the listing's reviews array

    await newReview.save();
    await listing.save();

    req.flash("success", "Review Added!");
    res.redirect(`/listing/${id}`);
}));

router.delete("/:reviewId", wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listing/${id}`);
}));

module.exports = router;