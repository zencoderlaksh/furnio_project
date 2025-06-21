import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Navbar.css";
import cart1 from "../assets/cart01.png";
import cart2 from "../assets/cart02.png";

function BasicExample() {
  // Cart
  const [showCartPopup, setShowCartPopup] = useState(false);
  const cartRef = useRef();

  const cartItems = [
    {
      id: 1,
      name: "Asgaard sofa",
      price: "250,000.00",
      image: cart1,
    },
    {
      id: 2,
      name: "Casaliving Wood",
      price: "270,000.00",
      image: cart2,
    },
  ];

  const toggleCartPopup = () => setShowCartPopup((prev) => !prev);

  // Wishlist
  const [showWishlistPopup, setShowWishlistPopup] = useState(false);
  const wishlistRef = useRef();

  const wishlistItems = [
    {
      id: 1,
      name: "Luxury Coffee Table",
      price: "15,000.00",
      image: cart1,
    },
    {
      id: 2,
      name: "Elegant Floor Lamp",
      price: "8,999.00",
      image: cart2,
    },
  ];

  const toggleWishlistPopup = () => setShowWishlistPopup((prev) => !prev);

  // Search
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const searchRef = useRef();

  const toggleSearchPopup = () => setShowSearchPopup((prev) => !prev);

  // Close popups on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setShowCartPopup(false);
      }
      if (wishlistRef.current && !wishlistRef.current.contains(e.target)) {
        setShowWishlistPopup(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearchPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCartPopup, showWishlistPopup, showSearchPopup]);

  return (
    <Navbar expand="lg" className="bg-white py-3 shadow-sm position-relative">
      <Container fluid className="px-4">
        <div className="d-flex align-items-center justify-content-between w-100">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="/Furnio---The-Furniture-Expert/assets/Logo.png"
              alt="Logo"
              style={{ height: "32px", width: "auto" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

        <Navbar.Collapse id="basic-navbar-nav" className="mt-3 mt-lg-0">
          {/* This div will arrange its children: nav links on left/top, icons/auth on right/bottom */}
          <div className="d-flex flex-column flex-lg-row align-items-center w-100 justify-content-lg-center">

            {/* Navigation Links */}
            {/* On mobile (flex-column), these will be full width. On desktop (flex-lg-row), they will be in the center. */}
            <Nav className="flex-column flex-lg-row text-center gap-lg-4 my-3 my-lg-0 order-2 order-lg-1"> {/* Nav links column on mobile, row on desktop. Order changes for visual flow. */}
              {["Home", "Shop", "Blog", "Contact"].map((item) => (
                <Nav.Link
                  key={item}
                  as={Link}
                  to={`/${item === "Home" ? "" : item}`}
                  className="text-dark fw-semibold nav-hover py-2 py-lg-0" // Added padding for mobile
                >
                  {item}
                </Nav.Link>
              ))}
            </Nav>

            {/* Spacer for Desktop - Pushes icons/auth to the right. Hidden on mobile. */}
            <div className="d-none d-lg-flex flex-grow-1 order-lg-2"></div>

            {/* Icons and Auth Buttons */}
            {/* This group remains largely the same but will be an item in the main flex container. */}
            {/* order-1 order-lg-3 makes icons appear above nav links on mobile, and to the right on desktop */}
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-end gap-3 position-relative order-1 order-lg-3">
              <div className="d-flex gap-3 align-items-center"> {/* Icons group */}
                {/* 👤 Profile */}
                <Link to="/profile" className="text-dark nav-icon-hover">
                  <Person2OutlinedIcon fontSize="medium" />
                </Link>

                {/* 🔍 Search */}
                <span
                  className="text-dark nav-icon-hover position-relative"
                  onClick={toggleSearchPopup}
                  style={{ cursor: "pointer" }}
                  ref={searchRef}
                >
                  <SearchOutlinedIcon />
                  <AnimatePresence>
                    {showSearchPopup && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="position-absolute end-0 mt-2 p-3 bg-light border rounded shadow-sm"
                        style={{ width: "300px", zIndex: 999 }}
                      >
                        <input
                          type="text"
                          placeholder="Search for products..."
                          className="form-control"
                          style={{
                            borderColor: "#B88E2F",
                            outline: "none",
                            boxShadow: "0 0 0 2px rgba(184, 142, 47, 0.3)",
                          }}
                          autoFocus
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>

                {/* 💖 Wishlist */}
                <span
                  className="text-dark nav-icon-hover position-relative"
                  onClick={toggleWishlistPopup}
                  style={{ cursor: "pointer" }}
                  ref={wishlistRef}
                >
                  <FavoriteBorderOutlinedIcon />
                  <AnimatePresence>
                    {showWishlistPopup && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="position-absolute end-0 mt-2 px-4 py-3 bg-light border rounded shadow-sm" // Adjusted padding
                        style={{ width: "calc(100vw - 2rem)", maxWidth: "370px", zIndex: 999 }} // Responsive width
                      >
                        <h5 className="d-block mb-2">Your Wishlist</h5> {/* Adjusted heading size */}
                        <hr className="my-2"/> {/* Adjusted margin */}
                        {wishlistItems.length > 0 ? (
                          <>
                            <ul className="list-unstyled mb-2">
                              {wishlistItems.map((item) => (
                                <li
                                  key={item.id}
                                  className="d-flex align-items-center mb-3"
                                  style={{ gap: "12px" }}
                                >
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{
                                      width: "40px", // Slightly smaller image for mobile
                                      height: "40px",
                                      objectFit: "cover",
                                      borderRadius: "8px",
                                    }}
                                  />
                                  <div className="flex-grow-1">
                                    <p className="mb-0 fw-semibold small"> {/* Smaller text */}
                                      {item.name}
                                    </p>
                                    <small className="text-muted">
                                      ₹{item.price}
                                    </small>
                                  </div>
                                </li>
                              ))}
                            </ul>
                            <hr className="my-2"/> {/* Adjusted margin */}
                            <div className="d-flex justify-content-around"> {/* Changed to justify-content-around */}
                              <Link
                                to="/wishlist"
                                className="btn btn-sm btn-dark"
                              >
                                View All
                              </Link>
                              <Link
                                to="/cart"
                                className="btn btn-sm btn-outline-dark"
                              >
                                Move to Cart
                              </Link>
                            </div>
                          </>
                        ) : (
                          <p className="mb-0 text-muted">No favorites yet 💔</p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>

                {/* 🛒 Cart */}
                <span
                  className="text-dark nav-icon-hover position-relative"
                  onClick={toggleCartPopup}
                  style={{ cursor: "pointer" }}
                  ref={cartRef}
                >
                  <ShoppingCartOutlinedIcon />
                  <AnimatePresence>
                    {showCartPopup && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="position-absolute end-0 mt-2 px-4 py-3 bg-light border rounded shadow-sm" // Adjusted padding
                        style={{ width: "calc(100vw - 2rem)", maxWidth: "370px", zIndex: 999 }} // Responsive width
                      >
                        <h5 className="d-block mb-2">Shopping Cart</h5> {/* Adjusted heading size */}
                        <hr className="my-2"/> {/* Adjusted margin */}
                        {cartItems.length > 0 ? (
                          <>
                            <ul className="list-unstyled mb-2">
                              {cartItems.map((item) => (
                                <li
                                  key={item.id}
                                  className="d-flex align-items-center mb-3"
                                  style={{ gap: "12px" }}
                                >
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{
                                      width: "40px", // Smaller image
                                      height: "40px",
                                      objectFit: "cover",
                                      borderRadius: "8px",
                                    }}
                                  />
                                  <div className="flex-grow-1">
                                    <p className="mb-0 fw-semibold small"> {/* Smaller text */}
                                      {item.name}
                                    </p>
                                    <small className="text-muted">
                                      ₹{item.price}
                                    </small>
                                  </div>
                                </li>
                              ))}
                            </ul>
                            <div className="d-flex justify-content-between mt-2"> {/* justify-content-between */}
                              <p className="small">Subtotal</p> {/* Smaller text */}
                              <p className="text-[#B88E2F] small fw-semibold">Rs. 520,000.00</p> {/* Smaller text */}
                            </div>
                            <hr className="my-2"/> {/* Adjusted margin */}
                            <div className="d-flex justify-content-around flex-wrap gap-2"> {/* justify-content-around and flex-wrap */}
                              <Link to="/cart" className="btn btn-sm btn-dark">
                                Cart
                              </Link>
                              <Link
                                to="/checkout"
                                className="btn btn-sm btn-dark"
                              >
                                Checkout
                              </Link>
                              <Link
                                to="/comparison"
                                className="btn btn-sm btn-dark"
                              >
                                Comparison
                              </Link>
                            </div>
                          </>
                        ) : (
                          <p className="mb-0 text-muted">Your cart is empty</p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>
              </div>

              {/* Auth Buttons */}
              <div className="d-flex gap-2 mt-3 mt-lg-0"> {/* Added margin top for mobile */}
                <Link to="/login" className="btn btn-outline-dark px-3 py-1">
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="btn btn-dark px-3 py-1"
                  style={{ backgroundColor: "#B88E2F", borderColor: "#B88E2F" }}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
