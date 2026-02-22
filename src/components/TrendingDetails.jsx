import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function TrendingDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  const products = [
    {
      id: 101,
      title: "Smart Watch",
      price: 4999,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 102,
      title: "Gaming Mouse",
      price: 1499,
      image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 103,
      title: "Laptop",
      price: 55999,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 104,
      title: "Sneakers",
      price: 3999,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 105,
      title: "Headphones",
      price: 2999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 106,
      title: "Backpack",
      price: 1999,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 107,
      title: "Smartphone",
      price: 18999,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 108,
      title: "Sunglasses",
      price: 1299,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80"
    }
  ];

  const handleAdd = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    navigate("/cart");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🔥 Trending Products</h2>

      <div style={styles.grid}>
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              ...styles.card,
              transform: hovered === item.id ? "translateY(-15px)" : "none",
              boxShadow:
                hovered === item.id
                  ? "0 35px 60px rgba(0,0,0,0.15)"
                  : "0 15px 35px rgba(0,0,0,0.08)"
            }}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              style={styles.imageWrapper}
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  ...styles.image,
                  transform:
                    hovered === item.id ? "scale(1.1)" : "scale(1)"
                }}
              />

              {hovered === item.id && (
                <div style={styles.overlay}>
                  View Product
                </div>
              )}
            </div>

            <h4 style={styles.title}>{item.title}</h4>
            <p style={styles.price}>₹{item.price}</p>

            <button className="bots"
              style={styles.button}
              onClick={() => handleAdd(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingDetails;

const styles = {
  container: {
    padding: "80px 40px",
    background: "linear-gradient(to right,#f4f6fb,#eef1f7)",
    textAlign: "center"
  },

  heading: {
    fontSize: "2.4rem",
    marginBottom: "60px",
    fontWeight: "700"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "45px"
  },

  card: {
    background: "#fff",
    padding: "22px",
    borderRadius: "25px",
    transition: "all 0.4s ease",
    cursor: "pointer"
  },

  imageWrapper: {
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    background: "#f9f9f9"
  },

  image: {
    width: "100%",
    height: "230px",
    objectFit: "cover",
    transition: "0.4s ease"
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.55)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "600"
  },

  title: {
    marginTop: "18px",
    fontSize: "18px",
    fontWeight: "600"
  },

  price: {
    marginTop: "8px",
    fontSize: "17px",
    fontWeight: "bold",
    color: "#111"
  },

  button: {
    marginTop: "18px",
    padding: "11px",
    width: "100%",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg,#000,#444)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer"
  },
  
 
};
