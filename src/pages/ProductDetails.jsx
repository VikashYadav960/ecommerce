import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const increase = () => setQty(qty + 1);
  const decrease = () => {
    if (qty > 1) setQty(qty - 1);
  };

  const totalPrice = (product.price * qty || 0).toFixed(2);

  return (
    <div className="details-container">
      <div className="details-card">

        <img src={product.image} alt={product.title} />

        <div className="info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>Price: ₹{product.price}</h3>

          {/* Quantity */}
          <div className="qty-box">
            <button onClick={decrease}>-</button>
            <span>{qty}</span>
            <button onClick={increase}>+</button>
          </div>

          <h2>Total: ₹{totalPrice}</h2>

          <button
            className="cart-btn"
            onClick={() => {
              dispatch(addToCart({ ...product, quantity: qty }));
              navigate("/cart");   // ✅ Direct cart page
            }}
          >
            Add To Cart
          </button>
        </div>

      </div>


      <style>{`
        .details-container{
          padding:50px;
          background:#111;
          color:white;
          }
          
          .details-card{
            display:flex;
            gap:40px;
            flex-wrap:wrap;
            background:#1c1c1c;
            padding:30px;
            border-radius:20px;
            }
            
            .details-card img{
              width:300px;
              object-fit:contain;
              }
              
              .info{
                max-width:500px;
        }
        
        .qty-box{
          display:flex;
          gap:15px;
          align-items:center;
          margin:15px 0;
          }
          
        .qty-box button{
          padding:5px 12px;
          font-size:18px;
          border:none;
          border-radius:5px;
          background:#ff6b6b;
          color:white;
          cursor:pointer;
          }
          
          .cart-btn{
            padding:10px 20px;
            border:none;
            border-radius:8px;
            background:linear-gradient(45deg,#ff6b6b,#f06595);
            color:white;
            cursor:pointer;
            }
            
            `}</style>
            </div>
          );
        }
        
        export default ProductDetails;
