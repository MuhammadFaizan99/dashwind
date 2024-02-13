// ProductsConfirmation.js
import React, { useState, useEffect } from 'react';
import ProductsConfirmationModal from './ProductsConfirmationModal';

const ProductsConfirmation = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  useEffect(() => {
    // Retrieve selected products from local storage
    const storedSelectedProducts = JSON.parse(localStorage.getItem("selectedProducts")) || [];
    setSelectedProducts(storedSelectedProducts);
  }, []);

  const handleQuantityChange = (index, newQuantity) => {
    // Update the quantity of the selected product
    const updatedSelectedProducts = [...selectedProducts];
    updatedSelectedProducts[index].quantity = newQuantity;
    localStorage.setItem("selectedProducts", JSON.stringify(updatedSelectedProducts));
    setSelectedProducts(updatedSelectedProducts);
  };

  const handleConfirmOrder = (index) => {
    setSelectedProductIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedProductIndex(null);
  };

  const calculateSubtotal = (product) => {
    return parseFloat(product.price.replace('$', '')) * product.quantity;
  };

  const calculateTotal = () => {
    return selectedProducts.reduce((total, product) => total + calculateSubtotal(product), 0);
  };

  return (
    <div className="container mx-auto mt-8">
      {selectedProducts.map((product, index) => (
        <div key={index} className="flex items-center border-b border-gray-300 py-4">
          <img src={product.image} alt={product.title} className="w-16 h-16 object-cover mr-4" />
          <div className="flex-1">
            <h2 className="text-lg font-bold">{product.title}</h2>
            <div className="flex items-center mt-2">
              <button
                className="text-white px-3 py-1 rounded-full mr-2"
                style={{backgroundColor:"#4506CB"}}
                onClick={() => handleQuantityChange(index, product.quantity - 1)}
              >
                -
              </button>
              <p className="text-lg font-bold">{product.quantity}</p>
              <button
                className=" text-white px-3 py-1 rounded-full ml-2"
                style={{backgroundColor:"#4506CB"}}
                onClick={() => handleQuantityChange(index, product.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button
            className="btn btn-primary text-white py-2 px-4 rounded-full flex items-center focus:outline-none focus:shadow-outline transition duration-300"
            style={{ borderRadius: '5px' }} 
            onClick={() => handleConfirmOrder(index)}
          >
            Confirm Order
          </button>
          {selectedProductIndex === index && (
            <ProductsConfirmationModal
              product={product}
              calculateSubtotal={calculateSubtotal}
              handleClose={handleCloseModal}
            />
          )}
        </div>
      ))}
      <div className="flex items-end mt-8">
        <div className="flex-1 text-right">
          <p className="text-lg font-bold">Total:</p>
        </div>
        <p className="text-lg font-bold">${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default ProductsConfirmation;
