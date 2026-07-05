const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  subject: { type: String, trim: true },
  message: { type: String, required: true, trim: true },
  status: { type: String, default: "new" }
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
