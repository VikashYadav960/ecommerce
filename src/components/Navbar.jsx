import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const { cartItems } = useSelector((state) => state.cart);

    return (
        <>
            <nav className="navbar">
                <h2 className="logo">V-Store</h2>

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

            {/* CSS */}
            <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 40px;
          background: #111;
          box-shadow: 0 4px 10px rgba(0,0,0,0.4);
        }

        .logo {
          color: #ff6b6b;
          font-size: 22px;
          letter-spacing: 1px;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 25px;
        }

        .nav-links a {
          text-decoration: none;
          color: white;
          position: relative;
          font-size: 15px;
          transition: 0.3s;
        }

        /* Underline Hover Animation */
        .nav-links a::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -5px;
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

        /* Cart Badge */
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

        @media(max-width:768px){
          .navbar{
            flex-direction: column;
            gap:10px;
          }
        }

      `}</style>
        </>
    );
}

export default Navbar;
