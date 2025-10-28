// src/context/ShopContext.jsx

import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  // Corrected prop name
  const currency = "₹"; // Indian Rupee symbol
  const deliveery_fee = 50;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems , setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  const addToCart = async (productId,size) => {
      let cartData = structuredClone(cartItems);
      if(!size) {
        toast.error("Please select a size", { position: "top-center" , autoClose: 2000 });
        return;
      }

      if(cartData[productId]){
        if(cartData[productId][size]){
          cartData[productId][size] += 1;
        } else {
          cartData[productId][size] = 1;
        }
      }else {
        cartData[productId] = {};
        cartData[productId][size] = 1;
      }
      setCartItems(cartData);
  }


  const getCartCount = () => {
    let itemCount = 0;
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        try {
          if(cartItems[items][size] > 0) {
            itemCount += cartItems[items][size];
          }
        } catch (e) {
          continue;
        }
      }
    }
    return itemCount;
  }

  const updateQuantity = async (productId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[productId][size] = quantity;
    setCartItems(cartData);
  }

  const getCartAmount =  () => {
    let amount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((p) => p.id === items);
      for (const item in cartItems[items]) {
        try {
          if(cartItems[items][item] > 0) {
            amount += cartItems[items][item] * itemInfo.price;
          }
        } catch (e) {
          continue;
        }
      }
    }
    return amount;
  }

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl+"/api/product/list");
      console.log("Products data response:", response.data);
      if(response.data.success){
        setProducts(response.data.products);
        console.log(products)
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  useEffect(() => {
    getProductsData();
  },[]);

  const value = {
    products,
    currency,
    deliveery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    setCartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    delivery_fee : 50,
    navigate,
    backendUrl
  };

  return (
    <ShopContext.Provider value={value}>
      {children} {/* Render the corrected prop */}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
