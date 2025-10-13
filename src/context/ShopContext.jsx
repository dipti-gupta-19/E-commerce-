// src/context/ShopContext.jsx

import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  // Corrected prop name
  const currency = "₹"; // Indian Rupee symbol
  const deliveery_fee = 50;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const value = {
    products,
    currency,
    deliveery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>
      {children} {/* Render the corrected prop */}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
