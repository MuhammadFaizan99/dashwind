// ProductsConfirmationModal.js
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const ProductsConfirmationModal = ({ product, calculateSubtotal, handleClose }) => {
  const navigate = useNavigate()
  const calculateDropshippingPrice = () => {
    // Add your dropshipping price calculation logic here
    return 5; // Example dropshipping price
  };

  const calculateTotalPrice = () => {
    const subtotal = calculateSubtotal(product);
    const dropshippingPrice = calculateDropshippingPrice();
    return subtotal + dropshippingPrice;
  };
  const confirmOrder = () => {
    const totalPrice = calculateTotalPrice();
    navigate("/app/product-payment", { state: { totalPrice } });
  };
  

  return (
    <Modal
      open={true} // You can manage the open state as needed
      onClose={handleClose}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'white',
          boxShadow: 24,
          p: 4,
          borderRadius: 8,
        }}
      >
        <img src={product.image} alt={product.title} style={{ width: '100%', height:"200px",borderRadius: 8, marginBottom: 16 }} />
        <Typography variant="subtitle1" gutterBottom>
          <strong>{product.title}</strong>
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Price: {product.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Quantity: {product.quantity}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Dropshipping Price: ${calculateDropshippingPrice()}
        </Typography>
        <Typography variant="h6" gutterBottom style={{ marginTop: 16 }}>
          Total Price: ${calculateTotalPrice()}
        </Typography>
        <Button variant="outlined" onClick={handleClose} className='btn btn-primary' style={{ marginRight: 8 }}>
          Close
        </Button>
        <Button variant="outlined" onClick={confirmOrder} className='btn btn-primary'>
          Place Order
        </Button>
      </Box>
    </Modal>
  );
};

export default ProductsConfirmationModal;
