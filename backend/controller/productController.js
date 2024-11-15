const Product = require('../model/productmodel'); // Import the Product model

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, price, quantity, material, size } = req.body;
    console.log('Request Body:', req.body);  // Log product data
    console.log('Uploaded Files:', req.files);  // Log uploaded files
    
    // Check if all required fields are provided
    if (!name || !price || !quantity || !material || !size) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Ensure at least one image is uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'At least one image must be uploaded' });
    }

    // Create new product
    const images = req.files.map(file => ({
      data: file.buffer,
      contentType: file.mimetype,
    }));

    const newProduct = new Product({
      name,
      price,
      quantity,
      images,
      material,
      size,
    });

    await newProduct.save();
    return res.status(201).json({ message: 'Product created successfully.', product: newProduct });
  } catch (error) {
    console.error('Error creating product:', error);
    return res.status(500).json({ message: 'Server error. Could not create product.' });
  }
};


// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({ message: 'Server error. Could not fetch products.' });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return res.status(500).json({ message: 'Server error. Could not fetch product.' });
  }
};

// Update a product by ID
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, quantity, images, material, size } = req.body;

    // Find the product by ID and update
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, quantity, images, material, size },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    return res.status(200).json({ message: 'Product updated successfully.', product: updatedProduct });
  } catch (error) {
    console.error('Error updating product:', error);
    return res.status(500).json({ message: 'Server error. Could not update product.' });
  }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    return res.status(200).json({ message: 'Product deleted successfully.' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return res.status(500).json({ message: 'Server error. Could not delete product.' });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
