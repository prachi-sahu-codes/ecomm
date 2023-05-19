import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { CategoryProvider } from "./context/CategoryContext";
import { AuthProvider } from "./context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <CategoryProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </CategoryProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
