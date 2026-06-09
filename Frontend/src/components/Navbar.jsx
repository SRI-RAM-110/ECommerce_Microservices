import React from 'react'
import "../styles/nav.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">

        <div className="logo">
          <h2>ShopEase</h2>
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Categories</li>
          <li>Products</li>
          <li>Deals</li>
          <li>Cart</li>
          <li>Orders</li>
        </ul>

        <div className="nav-right">

          <input
            type="text"
            placeholder="Search products..."
          />

          <button>Profile</button>

        </div>

      </nav>
    </div>
  )
}

export default Navbar