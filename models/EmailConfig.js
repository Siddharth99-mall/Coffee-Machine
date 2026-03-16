const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailConfigSchema = new Schema({
    senderEmail: String,
    receiverEmail: String
});

module.exports = mongoose.model("EmailConfig", emailConfigSchema);