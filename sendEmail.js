const mongoose = require("mongoose");
const EmailConfig = require("./models/EmailConfig.js");

mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

async function insertEmail() {
    await EmailConfig.create({
        senderEmail: "mallsiddharth507@gmail.com",
        receiverEmail: "0201ee221062@gmail.com"
    });

    console.log("Email config inserted");
   
}

insertEmail();