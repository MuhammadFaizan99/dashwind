import React from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

const CartDrawer = ({ isOpen, onClose, selectedProducts, onDeleteProduct }) => {
  // Calculate subtotal
  const subtotal = selectedProducts.reduce(
    (acc, product) => acc + parseFloat(product.price.replace("$", "")),
    0
  );

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div style={{ width: 300, padding: 16, backgroundColor: "#fff", height: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ccc",
            paddingBottom: 8,
            marginBottom: 16,
          }}
        >
          <Typography variant="h6">Shopping Cart</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {selectedProducts.map((product) => (
            <li
              key={product.id}
              style={{ borderBottom: "1px solid #ccc", marginBottom: 8, paddingBottom: 8 }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: 50, height: 50, marginRight: 8 }}
                  />
                  <Typography>{product.title}</Typography>
                  <IconButton onClick={() => onDeleteProduct(product.id)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body2" color="primary">
                    {product.price}
                  </Typography>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 16 }}>
          <Typography variant="subtitle1" color="primary" fontSize={18}>
            Subtotal: ${subtotal.toFixed(2)}
          </Typography>
        </div>
      </div>
    </Drawer>
  );
};

export default CartDrawer;