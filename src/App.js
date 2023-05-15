import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";

import Mockman from "mockman-js";
import { NavBar } from "./components/NavBar";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { Cart } from "./pages/cart/Cart";
import { Account } from "./pages/account/Account";
import { ProductListing } from "./pages/ProductListing/ProductListing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<ProductListing />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
