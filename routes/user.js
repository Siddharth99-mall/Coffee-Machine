const express=require("express");
const wrapAsync = require("../utils/wrapAsync");
const router=express.Router();
const User=require("../models/user.js");
const passport=require("passport");
const {saveRedirectUrl}=require("../middleware.js")


router.get("/signup",async (req,res)=>{
    res.render("./users/signUp.ejs");
 })
router.post("/signup",wrapAsync(async(req,res)=>{
   try{
    let{username,email,password}=req.body;
    const newUser=new User({username,email})
    await User.register(newUser,password);
    req.login(newUser,(err)=>{
      if(err){
         next(err);
      }else{
         req.flash("success","Welcome to WanderLust");
         res.redirect("/listing");
      }
    })
   
   }catch(err){
    req.flash("error",err.message);
    res.redirect("/signup");
   }
}));
router.get("/login",(req,res)=>{
   res.render("./users/logIn.ejs");
});
router.post("/login",saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login",failureFlash : true}),
   async(req,res)=>{
      req.flash("success","Welcome Back to WanderLust")
      let redirectUrl=res.locals.redirectUrl||"/listing";
      res.redirect(redirectUrl);
   }  
)   
  
   
router.get("/logout",(req,res,next)=>{
   req.logOut((err)=>{
      if(err){
       return next(err);
      }
      req.flash("success","You are logged out!");
      res.redirect("/listing");
   })
})


module.exports=router;