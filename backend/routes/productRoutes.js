const express = require('express');
const productController = require('../controller/productController'); // Path to the controller
const multer = require('multer');
const router = express.Router();


// Configure multer for image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).array('images', 5); 


// Routes for products
router.post('/product',upload, productController.createProduct); // Create a new product
router.get('/products', productController.getAllProducts); // Get all products
router.get('/product/:id', productController.getProductById); // Get product by ID
router.put('/product/:id', productController.updateProduct); // Update product by ID
router.delete('/product/:id', productController.deleteProduct); // Delete product by ID

module.exports = router;
