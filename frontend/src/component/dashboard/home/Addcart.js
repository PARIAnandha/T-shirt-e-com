import React from 'react'
import {
    Box,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
  } from '@mui/material';
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
  import StarIcon from '@mui/icons-material/Star';
const Addcart = () => {
    const products = [
        { id: 1, name: 'Product A', price: '$50', image: 'https://via.placeholder.com/150', rating: 4.5 },
        { id: 2, name: 'Product B', price: '$75', image: 'https://via.placeholder.com/150', rating: 4.0 },
        { id: 3, name: 'Product C', price: '$100', image: 'https://via.placeholder.com/150', rating: 5.0 },
      ];
  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold' }}>
        Welcome to Our Product Store
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={product.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Price: {product.price}
                </Typography>
                <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                  <StarIcon sx={{ color: '#FFD700', mr: 0.5 }} />
                  <Typography variant="body2" color="text.secondary">
                    {product.rating} / 5
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<ShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Addcart
