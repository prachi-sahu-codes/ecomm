import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home } from "./pages/home/Home";
import Mockman from "mockman-js";
import { NavBar } from "./components/NavBar";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { Cart } from "./pages/cart/Cart";
import { Account } from "./pages/account/Account";
import { Signup } from "./pages/account/signup";
import { ProductListing } from "./pages/ProductListing/ProductListing";
import { ProductDetail } from "./pages/productDetail/ProductDetail";
import { NotFound } from "./pages/notFound/NotFound";
import { Login } from "./pages/account/login";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<ProductListing />} />
        <Route path="/detail/:productId" element={<ProductDetail />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
