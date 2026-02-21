import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../features/cartSlice";
import { useState } from "react";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");

  // 🔥 Sorting
  let sortedItems = [...cartItems];

  if (sort === "low") {
    sortedItems.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    sortedItems.sort((a, b) => b.price - a.price);
  }

  const total = sortedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.container}>
      <div style={styles.cartBox}>

        <h1 style={styles.heading}>Your Cart</h1>

        {/* Filter */}
        <select
          style={styles.select}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>

        {sortedItems.length === 0 ? (
          <h3 style={{ textAlign: "center" }}>Cart is Empty</h3>
        ) : (
          sortedItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>

              <div>
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
              </div>

              {/* Quantity */}
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

              <button
                style={styles.removeBtn}
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))
        )}

        <div style={styles.totalBox}>
          Total: ₹{total.toFixed(2)}
        </div>

      </div>
    </div>
  );
}

export default Cart;


/* ================= STYLES ================= */

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6fb"
  },

  cartBox: {
    width: "70%",
    padding: "30px",
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.1)"
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px"
  },

  select: {
    padding: "8px",
    marginBottom: "20px",
    borderRadius: "6px"
  },

  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 0",
    borderBottom: "1px solid #eee"
  },

  qtyBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  qtyBtn: {
    padding: "5px 12px",
    background: "#111",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  removeBtn: {
    padding: "6px 12px",
    background: "crimson",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  totalBox: {
    textAlign: "right",
    marginTop: "20px",
    fontSize: "20px",
    fontWeight: "bold"
  }
};
