const express=require("express");
const router= express.Router();
const Listing = require("../models/listing");
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema}=require("../schema.js");
const {isLoggedIn}=require("../middleware.js");
const mongoose = require("mongoose");
const sendAdminEmail = require("../utils/sendEmail.js");

const validateListing = (req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
     let errMsg=error.details.map((el)=>el.message).join(",");
     throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}
router.get("/" , wrapAsync (async (req,res)=>{
    const { sort, order, category } = req.query;
    let query = {};
    if (category) {
      query.category = category;
    }

    let listingsQuery = Listing.find(query);

    // apply sorting by price if requested
    if (sort === 'price') {
      const sortOrder = order === 'desc' ? -1 : 1;
      listingsQuery = listingsQuery.sort({ price: sortOrder });
    }

    const allListings = await listingsQuery.exec();
   
    res.render("listings/index.ejs", {allListings});
}));
router.get("/new",isLoggedIn,(req,res)=>{
    res.render("listings/newListing.ejs");
  
});
// Handle the search query
// router.get("/search", async(req, res) => {
//     const query = req.query.query.toLowerCase();
//   const listin=await Listing.find({});
//     // Filter the countries based on the query
//     const filteredCountries = listin.filter(country => 
//       country.name.toLowerCase().includes(query) ||
//       country.location.toLowerCase().includes(query)
//     );
  
//     // Render the listing with the filtered countries
//     res.render("listings/index.ejs", { countries: filteredCountries });
//   });
router.get("/:id/edit",isLoggedIn,wrapAsync (async (req,res)=>{
    let {id}=req.params;
    let data= await Listing.findById(id);
    res.render("listings/edit.ejs",{data})
}));
router.get("/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        req.flash("error", "Invalid Listing ID");
        return res.redirect("/listing");
    }
    const list = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: { path: "createdBy", select: "username" } // Populate the createdBy field
        })
        .populate("owner");
    if (!list) {
        req.flash("error", "Listing you requested for does not exist");
        return res.redirect("/listing");
    }
    res.render("listings/listing.ejs", { list });
}));


// router.post("/",isLoggedIn,validateListing , wrapAsync (async(req,res,next)=>{
//     let newlisting=new Listing(req.body.listing);
//     newlisting.owner=req.user._id;
//     await newlisting.save();    
//     req.flash("success","New Listing Created!");
//     res.redirect("/listing");
// }));

router.post("/", isLoggedIn, validateListing, wrapAsync(async (req, res, next) => {

    let newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id;
    await newlisting.save();

    await sendAdminEmail(newlisting, req.user);

    req.flash("success", "New Listing Created!");
    res.redirect("/listing");

}));


router.put("/:id", isLoggedIn,validateListing ,wrapAsync (async (req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Listing Updated Successfully!");
    res.redirect(`/listing/${id}`);
}));
router.delete("/:id",isLoggedIn,wrapAsync (async (req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");
  res.redirect("/listing");
}));

module.exports=router;