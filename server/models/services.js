const mongoose = require("mongoose");

const ServicesSchema = mongoose.Schema({
  serviceId: {
    type: Number,
    required: true,
  },
  topCategory: {
    type: String,
    required: true,
  },
  secondaryCategory: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  serviceDescription: {
    type: String,
    required: true,
  },
  listImage: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("services", ServicesSchema);
