import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = () => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    navigate("/cart");
  };

  return (
    <div className="card">

      {/* Image clickable */}
      <img
        src={item.image}
        alt={item.title}
        onClick={() => navigate(`/product/${item.id}`)}
        style={{ cursor: "pointer" }}
      />

      <h4>{item.title.slice(0, 25)}...</h4>
      <p>₹{item.price}</p>

      <div className="card-buttons">
        <button
          className="premium-btn"
          onClick={handleAdd}
        >
          🛒 Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductCard;
