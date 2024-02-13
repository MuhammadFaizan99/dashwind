// Leads.js
import React, { useEffect, useState } from "react";
import { BsSearch, BsCartPlus } from "react-icons/bs";
import TitleCard from "../../components/Cards/TitleCard";
import CartDrawer from "./CartDrawer";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../common/modalSlice";
import { deleteLead, getLeadsContent } from "./leadSlice";
import {
  CONFIRMATION_MODAL_CLOSE_TYPES,
  MODAL_BODY_TYPES,
} from "../../utils/globalConstantUtil";
import { useNavigate } from "react-router-dom";

// Pagination Component
const Pagination = ({ leadsPerPage, totalLeads, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalLeads / leadsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-8">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={`mr-2`}>
            <button
              onClick={() => paginate(number)}
              className={`${
                currentPage === number
                  ? "btn-primary text-white"
                  : "bg-gray-200 text-gray-700"
              } py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Validate and truncate description to 50 characters
const validateAndTruncateDescription = (description) => {
  const maxLength = 50;
  if (description.length > maxLength) {
    return `${description.substring(0, maxLength)}...`;
  }
  return description;
};

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: "$149.99",
    description: validateAndTruncateDescription(
      "Immerse yourself in music with these high-quality wireless headphones featuring noise-canceling technology."
    ),
    image: "https://source.unsplash.com/200x300/?headphones",
  },
  {
    id: 2,
    title: "Smartwatch with Fitness Tracker",
    price: "$129.99",
    description: validateAndTruncateDescription(
      "Stay connected and monitor your health with this sleek smartwatch equipped with fitness tracking features."
    ),
    image: "https://source.unsplash.com/200x300/?smartwatch",
  },
  {
    id: 3,
    title: "Professional DSLR Camera",
    price: "$899.99",
    description: validateAndTruncateDescription(
      "Capture stunning moments with this professional DSLR camera, equipped with advanced features and high-resolution imaging."
    ),
    image: "https://source.unsplash.com/200x300/?camera",
  },
  {
    id: 4,
    title: "Compact Laptop with SSD",
    price: "$799.99",
    description: validateAndTruncateDescription(
      "Get productivity on the go with this compact laptop featuring a fast SSD for quick performance."
    ),
    image: "https://source.unsplash.com/200x300/?laptop",
  },
  {
    id: 5,
    title: "Bluetooth Speaker with LED Lights",
    price: "$59.99",
    description: validateAndTruncateDescription(
      "Bring the party anywhere with this Bluetooth speaker that not only delivers great sound but also features colorful LED lights."
    ),
    image: "https://source.unsplash.com/200x300/?speakers",
  },
  {
    id: 6,
    title: "Portable External Battery Charger",
    price: "$39.99",
    description: validateAndTruncateDescription(
      "Never run out of battery on your devices with this portable external charger, perfect for travel and emergencies."
    ),
    image: "https://source.unsplash.com/200x300/?charger",
  },
  {
    id: 7,
    title: "Gourmet Coffee Sampler Pack",
    price: "$29.99",
    description: validateAndTruncateDescription(
      "Explore a variety of gourmet coffee flavors with this sampler pack, perfect for coffee enthusiasts."
    ),
    image: "https://source.unsplash.com/200x300/?coffee",
  },
  {
    id: 8,
    title: "Ergonomic Office Chair",
    price: "$179.99",
    description: validateAndTruncateDescription(
      "Stay comfortable during long work hours with this ergonomic office chair designed for optimal support and posture."
    ),
    image: "https://source.unsplash.com/200x300/?chair",
  },
  {
    id: 9,
    title: "Backpack with Laptop",
    price: "$49.99",
    description: validateAndTruncateDescription(
      "Carry your essentials in style with this stylish backpack featuring a dedicated compartment for your laptop."
    ),
    image: "https://source.unsplash.com/200x300/?backpack",
  },
  {
    id: 10,
    title: "High-Performance Gaming Mouse",
    price: "$69.99",
    description: validateAndTruncateDescription(
      "Enhance your gaming experience with this high-performance gaming mouse, designed for precision and speed."
    ),
    image: "https://source.unsplash.com/200x300/?mouse",
  },
];

function Leads() {
  const { leads } = useSelector((state) => state.lead);
  const dispatch = useDispatch();
  const leadsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getLeadsContent());
  }, [dispatch]);

  useEffect(() => {
    setFilteredLeads(leads);
  }, [leads]);

  useEffect(() => {
    // Retrieve selected products from local storage
    const storedSelectedProducts = localStorage.getItem("selectedProducts");
    if (storedSelectedProducts) {
      setSelectedProducts(JSON.parse(storedSelectedProducts));
    }
  }, []);

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirstLead, indexOfLastLead);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deleteCurrentLead = (index) => {
    dispatch(
      openModal({
        title: "Confirmation",
        bodyType: MODAL_BODY_TYPES.CONFIRMATION,
        extraObject: {
          message: "Are you sure you want to delete this lead?",
          type: CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE,
          index,
        },
      })
    );
  };

  const openConfirmationPage = (product) => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem("token"); // Adjust this based on how your authentication token is stored

    if (isAuthenticated) {
      // Save the selected product to local storage
      const selectedProducts = JSON.parse(localStorage.getItem("selectedProducts")) || [];
      const updatedSelectedProducts = [...selectedProducts, { ...product, quantity: 1 }];
      localStorage.setItem("selectedProducts", JSON.stringify(updatedSelectedProducts));

      // Navigate to "/app/product-confirmation"
      navigate("/app/product-confirmation");
    } else {
      // Redirect to the login page or show a login modal
      // Example: navigate("/login");
      // Or display a login modal
      dispatch(
        openModal({
          title: "Login Required",
          bodyType: MODAL_BODY_TYPES.LOGIN,
          // You may pass additional data to your login modal if needed
        })
      );
    }
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const filterLeads = (term) => {
    if (!term) {
      setFilteredLeads(leads);
    } else {
      const filtered = leads.filter(
        (lead) =>
          lead.first_name.toLowerCase().includes(term.toLowerCase()) ||
          lead.last_name.toLowerCase().includes(term.toLowerCase()) ||
          lead.email.toLowerCase().includes(term.toLowerCase()) ||
          lead.status.toLowerCase() === term.toLowerCase()
      );
      setFilteredLeads(filtered);
    }
    setCurrentPage(1);
  };

  const onDeleteProduct = (productId) => {
    const updatedSelectedProducts = selectedProducts.filter((product) => product.id !== productId);
    setSelectedProducts(updatedSelectedProducts);

    // Save updated selected products to local storage
    localStorage.setItem("selectedProducts", JSON.stringify(updatedSelectedProducts));
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex items-center mb-4">
        <div className="mr-2">
          <select
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            onChange={(e) => filterLeads(e.target.value)}
          >
            <option value="">All</option>
            <option value="Not Interested">Not Interested</option>
            <option value="In Progress">In Progress</option>
            <option value="Sold">Sold</option>
            <option value="Need Followup">Need Followup</option>
            <option value="Open">Open</option>
          </select>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search leads..."
            className="py-2 pl-8 pr-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300 w-full"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              filterLeads(e.target.value);
            }}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BsSearch className="text-gray-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <TitleCard key={product.id}>
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4" />
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">{product.title}</h2>
              <span className="text-gray-700">{product.price}</span>
            </div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <button
              className="btn btn-primary text-white py-2 px-4 rounded-full flex items-center focus:outline-none focus:shadow-outline transition duration-300"
              onClick={() => {
                openConfirmationPage({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                });
              }}
            >
              <BsCartPlus className="mr-2" />
              Add to Cart
            </button>
          </TitleCard>
        ))}
      </div>

      <CartDrawer isOpen={isDrawerOpen} onClose={closeDrawer} selectedProducts={selectedProducts} onDeleteProduct={onDeleteProduct} />

      <Pagination
        leadsPerPage={leadsPerPage}
        totalLeads={filteredLeads.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Leads;