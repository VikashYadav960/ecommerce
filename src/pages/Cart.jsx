import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../features/cartSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sort, setSort] = useState("");

  // Sorting
  let sortedItems = [...cartItems];

  if (sort === "low") {
    sortedItems.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    sortedItems.sort((a, b) => b.price - a.price);
  }

  // Total Calculation
  const total = sortedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.container}>
      <div style={styles.cartBox}>
        <h1 style={styles.heading}>🛒 Your Cart</h1>

        {/* Sort Dropdown */}
        <select
          style={styles.select}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>

        {/* Cart Items */}
        {sortedItems.length === 0 ? (
          <h3 style={{ textAlign: "center" }}>Cart is Empty</h3>
        ) : (
          sortedItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>

              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                style={styles.image}
              />

              {/* Product Info */}
              <div style={styles.info}>
                <h4 style={{ marginBottom: "5px", fontSize: "15px" }}>
                  {item.title?.substring(0, 40)}...
                </h4>
                <p>₹{item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div style={styles.qtyBox}>
                <button
                  style={styles.qtyBtn}
                  onClick={() => dispatch(decreaseQty(item.id))}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  style={styles.qtyBtn}
                  onClick={() => dispatch(increaseQty(item.id))}
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                style={styles.removeBtn}
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))
        )}

        {/* Total Section */}
        <div style={styles.totalSection}>
          <h2>Total: ₹{total.toFixed(2)}</h2>

          {sortedItems.length > 0 && (
            <button
              style={styles.checkoutBtn}
              onClick={() => navigate("/payment")}
            >
              Proceed to Payment 💳
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default Cart;

/* ================== STYLES ================== */

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    padding: "40px",
    background: "linear-gradient(to right, #f4f6fb, #eef2f7)"
  },

  cartBox: {
    width: "80%",
    maxWidth: "1000px",
    padding: "30px",
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.1)"
  },

  heading: {
    textAlign: "center",
    marginBottom: "25px"
  },

  select: {
    padding: "8px",
    marginBottom: "20px",
    borderRadius: "6px"
  },

  cartItem: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "20px 0",
    borderBottom: "1px solid #eee"
  },

  image: {
    width: "90px",
    height: "90px",
    objectFit: "contain",
    background: "#fafafa",
    padding: "10px",
    borderRadius: "10px"
  },

  info: {
    flex: 1
  },

  qtyBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  qtyBtn: {
    padding: "6px 14px",
    background: "#111",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  removeBtn: {
    padding: "6px 12px",
    background: "crimson",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  totalSection: {
    marginTop: "30px",
    textAlign: "right"
  },

  checkoutBtn: {
    marginTop: "15px",
    padding: "10px 20px",
    background: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px"
  }
};