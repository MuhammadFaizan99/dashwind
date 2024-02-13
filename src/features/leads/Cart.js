import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const { state } = location;
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    // Retrieve selected products from local storage
    const storedSelectedProducts = localStorage.getItem('selectedProducts');
    if (storedSelectedProducts) {
      setSelectedProducts(JSON.parse(storedSelectedProducts));
    }
  }, []);

  

  if (!selectedProducts || selectedProducts.length === 0) {
    return <div>No product added to cart.</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {selectedProducts.map((product) => (
          <div key={product.id} className="col-span-1">
            <div className="bg-white p-4 shadow-md rounded-md h-full">
              <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4" />
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">{product.title}</h2>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;