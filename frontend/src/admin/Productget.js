import React, { useEffect, useState } from 'react';
import { getAllProducts, updateProduct, deleteProduct } from '../api/productAPI'; // Import API functions

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

 

  const handleEditProduct = async (product) => {
    try {
      const updatedProduct = await updateProduct(product._id, editingProduct); // API call to update product
      setProducts(products.map((p) => (p._id === product._id ? updatedProduct : p))); // Update state
      setEditingProduct(null); // Reset editing
    } catch (error) {
      console.error('Error editing product:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId); // API call to delete product
      setProducts(products.filter((product) => product._id !== productId)); // Update state
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Product List</h1>
      {/* Product Table */}
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Material</th>
            <th>Size</th>
            <th>Images</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.material}</td>
              <td>{product.size}</td>
              <td>
                {product.images && product.images.length > 0
                  ? product.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Product ${index + 1}`}
                        style={{ width: '50px', height: '50px', marginRight: '5px' }}
                      />
                    ))
                  : 'No images available'}
              </td>
              <td>
                <button onClick={() => setEditingProduct(product._id)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Product Form */}
      {editingProduct && (
        <div>
          <h2>Edit Product</h2>
          <input
            type="text"
            placeholder="Name"
            value={editingProduct.name}
            onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={editingProduct.price}
            onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={editingProduct.quantity}
            onChange={(e) => setEditingProduct({ ...editingProduct, quantity: e.target.value })}
          />
          <input
            type="text"
            placeholder="Material"
            value={editingProduct.material}
            onChange={(e) => setEditingProduct({ ...editingProduct, material: e.target.value })}
          />
          <input
            type="text"
            placeholder="Size"
            value={editingProduct.size}
            onChange={(e) => setEditingProduct({ ...editingProduct, size: e.target.value })}
          />
          <button onClick={() => handleEditProduct(editingProduct)}>Save</button>
          <button onClick={() => setEditingProduct(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
