import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Payment() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [card, setCard] = useState("");

  const handlePayment = () => {
    if (name === "" || card === "") {
      alert("Please fill all details");
      return;
    }

    alert("Payment Successful ✅");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Payment Page</h2>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Card Number"
          value={card}
          onChange={(e) => setCard(e.target.value)}
          style={styles.input}
        />

        <button onClick={handlePayment} style={styles.button}>
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Payment;


/* ===== Styles ===== */

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6fb"
  },
  box: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "300px",
    textAlign: "center"
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px",
    background: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};