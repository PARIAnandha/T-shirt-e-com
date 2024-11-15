const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  images: [
    {
      data: Buffer, // Stores image as binary data
      contentType: String, // MIME type of the image
    },
  ],
  material: {
    type: String, // T-shirt material, e.g., "Cotton", "Polyester"
    required: true,
  },
  size: {
    type: [String], // Array to store multiple sizes (e.g., ["S", "M", "L"])
    required: true,
  },
});

const Product = mongoose.model('T-Product', productSchema);

module.exports = Product;
