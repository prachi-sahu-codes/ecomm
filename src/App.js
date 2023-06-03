import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home } from "./pages/home/Home";
import Mockman from "mockman-js";
import { NavBar } from "./layout/NavBar";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { Cart } from "./pages/cart/Cart";
import { Account } from "./pages/account/Account";
import { Signup } from "./pages/account/signup";
import { ProductListing } from "./pages/ProductListing/ProductListing";
import { ProductDetail } from "./pages/productDetail/ProductDetail";
import { NotFound } from "./pages/notFound/NotFound";
import { Login } from "./pages/account/login";
import { RequiresAuth } from "./components/RequiresAuth";
import "react-toastify/dist/ReactToastify.css";
import { Checkout } from "./pages/checkout/Checkout";
import { OrderSuccess } from "./pages/orderSuccess/OrderSuccess";

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
        className="toast"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductListing />} />
        <Route path="/detail/:productId" element={<ProductDetail />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orderSuccess" element={<OrderSuccess />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route
          path="/account"
          element={
            <RequiresAuth>
              <Account />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequiresAuth>
              <Checkout />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
