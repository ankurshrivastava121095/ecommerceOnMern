import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Component/Layout/Header";
import Home from "./Component/Home";
import Footer from "./Component/Layout/Footer";
import Checkout from "./Component/Checkout/Checkout";
import ProductDetail from "./Component/Product/ProductDetail";
import Cart from "./Component/Cart/Cart";
import Product from "./Component/Product/Product";
import Contact from "./Component/Contact/Contact";
import Login from "./Component/Users/Login";
import Registration from "./Component/Users/Registration";
import { useEffect, useState } from "react";
import store from "./Store";
import { loadUser } from "./actions/UserAction";
import { useDispatch } from "react-redux";
import Dashboard from "./Component/Admin/Dashboard/Dashboard";
import UserProfile from "./Component/UserProfile/UserProfile";
import axios from "axios";
import Payment from "./Component/Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  //payment apikey get
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/pn/stripeapiKey");
    setStripeApiKey(data.stripeApiKey);
  }
  // console.log(stripeApiKey)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    getStripeApiKey();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        {/* for user */}
        <Route path="/me" element={<UserProfile />} />

        {/* for admin */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        {stripeApiKey && (
          <Route
            path="/process/payment"
            element={
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>
            }
          />
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
