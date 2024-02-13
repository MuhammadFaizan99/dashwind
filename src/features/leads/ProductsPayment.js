import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const stripePromise = loadStripe('pk_test_51ODsM8Awj9pXy51C1VOoFZO0nrgXk8043v1l9ktu77nJw5LWV0RBYh5cnUSQ1G3emxwOAQjDa9iiix0hwVeoJzEU00geoaMF6b');

const ProductsPayment = () => {
  const [email, setEmail] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const location = useLocation();

  const stripe = useStripe();
  const elements = useElements();

  const createPaymentIntent = async (totalPrice) => {
    try {
      const response = await fetch('https://dashwind-server.vercel.app/payments/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: totalPrice, currency: 'USD' }),
      });

      if (!response.ok) {
        throw new Error('Error creating payment intent');
      }

      const { clientSecret } = await response.json();
      return clientSecret;
    } catch (error) {
      console.error('Error creating payment intent:', error);
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      const clientSecret = await createPaymentIntent(totalPrice);

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: email,
          },
        },
      });

      if (result.error) {
        console.error('Error confirming payment:', result.error.message);
        toast.error('Payment failed. Please try again.');
      } else {
        console.log('Payment succeeded:', result.paymentIntent);
        toast.success('Payment succeeded!');
      }
    } catch (error) {
      console.error('Error handling payment:', error);
      toast.error('Payment failed. Please try again.');
    }
  };

  useEffect(() => {
    if (location.state?.totalPrice) {
      const total = location.state.totalPrice;
      setTotalPrice(total);
    }
  }, [location]);

  return (
    <div className="w-full p-8 border bg-white rounded-md shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Payment methods</h2>
      <div className="text-3xl font-bold mb-6">{`$${totalPrice}`}</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address *</label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="card-element" className="block text-sm font-medium text-gray-700">
            Credit or Debit Card
          </label>
          <div id="card-element" className="p-2 border rounded-md">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full transition duration-300"
          >
            Pay ${totalPrice}
          </button>
        </div>
      </form>
      <p className="text-center text-sm text-gray-500 mt-4">Payments are secure & encrypted</p>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

const WrappedProductsPayment = () => (
  <Elements stripe={stripePromise}>
    <ProductsPayment />
  </Elements>
);

export default WrappedProductsPayment;
