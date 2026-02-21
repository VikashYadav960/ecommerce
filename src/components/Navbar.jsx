import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  
<style>
  .navbar{
    
    
  }
</style>

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">V-Store</h2>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={() => setOpen(true)}>
          ☰
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/trending">Trending</Link></li>
          <li>
            <Link to="/cart" className="cart-link">
              Cart
              <span className="cart-count">
                {cartItems.length}
              </span>
            </Link>
          </li>
          <li><Link to="/account">Account</Link></li>
        </ul>
      </nav>

      {/* Sidebar (Mobile) */}
      <div className={`sidebar ${open ? "active" : ""}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-logo">V-Store</h2>
          <span className="close-btn" onClick={() => setOpen(false)}>✕</span>
        </div>

        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/shop" onClick={() => setOpen(false)}>Shop</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/trending" onClick={() => setOpen(false)}>Trending</Link>
        <Link to="/cart" onClick={() => setOpen(false)}>
          Cart ({cartItems.length})
        </Link>
        <Link to="/account" onClick={() => setOpen(false)}>Account</Link>
      </div>

      {/* CSS */}
      <style>{`

/* ===== Desktop Navbar ===== */

.navbar {
  position: fixed;             
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;              
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;            
  background: #111;
  box-shadow: 0 4px 15px rgba(0,0,0,0.4);
}


body {
  padding-top: 60px;
}

.logo {
  color: #ff6b6b;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 28px;
}

.nav-links a {
  text-decoration: none;
  color: white;
  position: relative;
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
  transition: 0.3s ease;
   
}

/* Premium Underline */
.nav-links a::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: -6px;
  left: 0;
  background: linear-gradient(45deg,#ff6b6b,#f06595);
  transition: 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a:hover {
  color: #ff6b6b;
}

/* Cart */
.cart-link {
  display: flex;
  align-items: center;
  gap: 6px;
}

.cart-count {
  background: linear-gradient(45deg,#ff6b6b,#f06595);
  padding: 2px 8px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: bold;
}

/* ===== Hamburger ===== */

.menu-icon {
  display: none;
  font-size: 26px;
  color: white;
  cursor: pointer;
}

/* ===== Sidebar ===== */

.sidebar {
  position: fixed;
  top: 0;
  left: -260px;
  width: 250px;
  height: 100%;
  background: #111;
  display: flex;
  flex-direction: column;
  transition: 0.35s ease;
  z-index: 1100;
  box-shadow: 4px 0 15px rgba(0,0,0,0.5);
}

.sidebar.active {
  left: 0;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
  border-bottom: 1px solid #222;
}

.sidebar-logo {
  color: #ff6b6b;
  font-size: 18px;
  font-weight: 600;
}

.close-btn {
  font-size: 22px;
  color: white;
  cursor: pointer;
}

.sidebar a {
  color: white;
  text-decoration: none;
  padding: 14px 25px;
  font-size: 15px;
  transition: 0.3s ease;
}

.sidebar a:hover {
  background: #1c1c1c;
  padding-left: 35px;
}

/* ===== Overlay (extra premium feel) ===== */

.sidebar.active::after {
  content: "";
  position: fixed;
  top: 0;
  left: 250px;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
}

/* ===== Mobile ===== */

@media(max-width:768px){

  .nav-links {
    display: none;  
  }

  .menu-icon {
    display: block; 
  }

}

`}</style>
    </>
  );
}

export default Navbar;