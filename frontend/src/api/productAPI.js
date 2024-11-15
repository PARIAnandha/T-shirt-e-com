import axiosInstance from './axiosInstance'; // Import the Axios instance

// Get all products
export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get('/api/admin/products');
    return response.data; // Return the response data (array of products)
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
