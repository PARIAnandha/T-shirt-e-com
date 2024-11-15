import React, { useState } from 'react';
import { TextField, Button, IconButton, Grid, Typography, InputAdornment, Select, MenuItem, FormControl, InputLabel, Chip } from '@mui/material';
import { PhotoCamera, Cancel } from '@mui/icons-material'; // Importing Cancel icon
import { createProduct } from '../api/productAPI';

const CreateProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: '',
    material: '',
    size: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...Array.from(files)],
    }));
  };

  const handleImageRemove = (index) => {
    setFormData((prevData) => {
      const updatedImages = prevData.images.filter((_, i) => i !== index);
      return { ...prevData, images: updatedImages };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('quantity', formData.quantity);
    formDataToSend.append('material', formData.material);
    formDataToSend.append('size', formData.size);

    // Append images to FormData
    Array.from(formData.images).forEach((image) => {
      formDataToSend.append('images', image);
    });

    try {
      const response = await createProduct(formDataToSend);
      console.log('Product created successfully:', response);

      // Reset the form data to initial state
      setFormData({
        name: '',
        price: '',
        quantity: '',
        material: '',
        size: '',
        images: [],
      });
    } catch (error) {
      console.error('Error creating product:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Product Name"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            name="price"
            value={formData.price}
            onChange={handleChange}
            type="number"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Quantity"
            variant="outlined"
            fullWidth
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            type="number"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Material"
            variant="outlined"
            fullWidth
            name="material"
            value={formData.material}
            onChange={handleChange}
            required
          />
        </Grid>

        {/* Size selection */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel>Size</InputLabel>
            <Select
              name="size"
              value={formData.size}
              onChange={handleChange}
              label="Size"
            >
              <MenuItem value="S">S</MenuItem>
              <MenuItem value="M">M</MenuItem>
              <MenuItem value="L">L</MenuItem>
              <MenuItem value="XL">XL</MenuItem>
              <MenuItem value="2XL">2XL</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <input
            type="file"
            name="images"
            multiple
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: 'none' }}
            id="file-upload"
          />
          <label htmlFor="file-upload">
            <IconButton component="span" color="primary">
              <PhotoCamera />
            </IconButton>
            <Typography variant="body2" color="textSecondary">
              Upload Images
            </Typography>
          </label>
        </Grid>

        {/* Display selected images and add cancel button */}
        {formData.images.length > 0 && (
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Selected Images:
            </Typography>
            <div>
              {formData.images.map((image, index) => (
                <Chip
                  key={index}
                  label={image.name}
                  onDelete={() => handleImageRemove(index)}
                  color="primary"
                  icon={<Cancel />}
                  style={{ margin: '5px' }}
                />
              ))}
            </div>
          </Grid>
        )}

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            Create Product
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateProductForm;
