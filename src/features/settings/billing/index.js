import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  CalendarIcon,
  UserIcon,
  CurrencyDollarIcon,
  PresentationChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  TagIcon,
  ScaleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import TitleCard from "../../../components/Cards/TitleCard";

const Billing = () => {
  const [invoiceNo, setInvoiceNo] = useState("");
  const [generatedOn, setGeneratedOn] = useState(null);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState("");
  const [paidOn, setPaidOn] = useState(null);

  // Additional fields
  const [customerName, setCustomerName] = useState("");
  const [productType, setProductType] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddBill = () => {
    // Logic to add a new bill goes here
    // You can dispatch an action or update the state accordingly
    // For example:
    // dispatch(addBill({ invoiceNo, generatedOn, description, amount, status, paidOn, customerName, productType, quantity, discount, tax, totalAmount }));
    // Reset form fields after adding a bill
    setInvoiceNo("");
    setGeneratedOn(null);
    setDescription("");
    setAmount(0);
    setStatus("");
    setPaidOn(null);
    setCustomerName("");
    setProductType("");
    setQuantity(0);
    setDiscount(0);
    setTax(0);
    setTotalAmount(0);
  };

  return (
    <>
      <TitleCard title="Billing Form" topMargin="mt-2">
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Invoice No */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center"
              htmlFor="invoiceNo"
            >
              <InformationCircleIcon className="h-5 w-5 mr-2" />
              Invoice No
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="invoiceNo"
              type="text"
              placeholder="Invoice No"
              value={invoiceNo}
              onChange={(e) => setInvoiceNo(e.target.value)}
            />
          </div>

          {/* Invoice Generated On */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center"
              htmlFor="generatedOn"
            >
              <CalendarIcon className="h-5 w-5 mr-2" />
              Invoice Generated On
            </label>
            <DatePicker
              selected={generatedOn}
              onChange={(date) => setGeneratedOn(date)}
              className="w-full bg-gray-100 text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              dateFormat="dd/MM/yyyy"
              placeholderText="Select date"
            />
          </div>

          {/* Description */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center"
              htmlFor="description"
            >
              <UserIcon className="h-5 w-5 mr-2" />
              Description
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="description"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Amount */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center"
              htmlFor="amount"
            >
              <CurrencyDollarIcon className="h-5 w-5 mr-2" />
              Amount
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="amount"
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
            />
          </div>

          {/* Status */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center"
              htmlFor="status"
            >
              <PresentationChartBarIcon className="h-5 w-5 mr-2" />
              Status
            </label>
            <select
              className="w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          {/* Invoice Paid On */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center"
              htmlFor="paidOn"
            >
              <ClockIcon className="h-5 w-5 mr-2" />
              Invoice Paid On
            </label>
            <DatePicker
              selected={paidOn}
              onChange={(date) => setPaidOn(date)}
              className="w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              dateFormat="dd/MM/yyyy"
              placeholderText="Select date"
            />
          </div>

          {/* Customer Name */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center"
              htmlFor="customerName"
            >
              <UserGroupIcon className="h-5 w-5 mr-2" />
              Customer Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="customerName"
              type="text"
              placeholder="Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>

          {/* Product Type */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center"
              htmlFor="productType"
            >
              <ShoppingCartIcon className="h-5 w-5 mr-2" />
              Product Type
            </label>
            <select
              className="w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="productType"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              <option value="">Select Product Type</option>
              <option value="Type 1">Type 1</option>
              <option value="Type 2">Type 2</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center"
              htmlFor="quantity"
            >
              <ScaleIcon className="h-5 w-5 mr-2" />
              Quantity
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="quantity"
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value))}
            />
          </div>

          {/* Discount */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center"
              htmlFor="discount"
            >
              <TagIcon className="h-5 w-5 mr-2" />
              Discount
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="discount"
              type="number"
              placeholder="Discount"
              value={discount}
              onChange={(e) => setDiscount(parseFloat(e.target.value))}
            />
          </div>

          {/* Tax */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center"
              htmlFor="tax"
            >
              <TagIcon className="h-5 w-5 mr-2" />
              Tax
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="tax"
              type="number"
              placeholder="Tax"
              value={tax}
              onChange={(e) => setTax(parseFloat(e.target.value))}
            />
          </div>

          {/* Total Amount */}
          <div className="w-full md:w-1/2 px-3 mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center"
              htmlFor="totalAmount"
            >
              <CurrencyDollarIcon className="h-5 w-5 mr-2" />
              Total Amount
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="totalAmount"
              type="number"
              placeholder="Total Amount"
              value={totalAmount}
              onChange={(e) => setTotalAmount(parseFloat(e.target.value))}
            />
          </div>
        </div>

        {/* ... (similar structure for other fields) */}

        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="btn btn-primary float-right"
            onClick={handleAddBill}
          >
            Add Bill
          </button>
        </div>
      </TitleCard>
    </>
  );
};

export default Billing;