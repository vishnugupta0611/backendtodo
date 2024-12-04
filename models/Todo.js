const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 50,
    },
    description: {
      type: String,
      required: true,
      maxLength: 50,
    },
    createdAt: {
      type: Date,
      default: Date.now, // Removed parentheses to ensure it gets evaluated at creation time
    },
    updatedAt: {
      type: Date,
      default: Date.now, // Same here
    },
  }
);

module.exports = mongoose.model("Todo", todoSchema);
