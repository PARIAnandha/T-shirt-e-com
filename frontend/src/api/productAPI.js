import axiosInstance from './axiosInstance';
import axios from 'axios';
 // Import the Axios instance
const BASE_URL = 'http://localhost:7000'

  // Function to convert binary image data to base64 URL (only if the data is not empty)
  const getBase64Image = (image) => {
    if (image && image.data && image.contentType) {
      const base64String = btoa(
        String.fromCharCode(...new Uint8Array(image.data.data)),
      );
      return `data:${image.contentType};base64,${base64String}`;
    }
    return null; // Return null if image data is missing
  };


export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/admin/products`); // Get the response from the API

    // Map over the products to convert images to base64
    const productsWithBase64Images = response.data.map((product) => {
      const productWithImages = { ...product };
      
      // Convert image URLs to base64 if the product has images
      if (product.images && product.images.length > 0) {
        productWithImages.images = product.images.map((image) => getBase64Image(image));
      }
      
      return productWithImages;
    });

    return productsWithBase64Images; // Return the products with base64 images

  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Handle the error (you can display a message to the user)
  }
};


// Get a single product by ID
export const getProductById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/admin/product/${id}`);
    return response.data; // Return the product data
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

// Create a new product
export const createProduct = async (productData) => {
  try {
    const response = await axiosInstance.post('/api/admin/product', productData); // Post new product data
    return response.data; // Return created product data
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

// Update an existing product by ID
export const updateProduct = async (id, updatedData) => {
  try {
    const response = await axiosInstance.put(`/api/admin/product/${id}`, updatedData);
    return response.data; // Return updated product data
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Delete a product by ID
export const deleteProduct = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/admin/product/${id}`);
    return response.data; // Return the response data (could be a success message)
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};
