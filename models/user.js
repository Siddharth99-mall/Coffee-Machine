// const mongoose=require("mongoose");
// const Schema=mongoose.Schema;
// const passportLocalMongoose=require("passport-local-mongoose");



// const userSchema=new Schema({
//     email:{
//         type:String,
//         required:true
//     }
// })

// userSchema.plugin(passportLocalMongoose)

// module.exports =new mongoose.model("User",userSchema);  


// --------------------------------

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin", "reviewer"],
        default: "user"
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
