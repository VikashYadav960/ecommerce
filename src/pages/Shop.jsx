import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setSearch,
  setCategory,
  setPriceRange,
  setRating
} from "../features/productSlice";
import { addToCart } from "../features/cartSlice";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Shop() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { filtered, priceRange, rating } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    navigate("/cart"); // ✅ Direct Cart Page
  };

  return (
    <div className="shop-container">

      {/* FILTER SECTION */}
      <div className="filter-box">

        <input
          placeholder="Search..."
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />

        <select onChange={(e) => dispatch(setCategory(e.target.value))}>
          <option value="All">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
        </select>

        <div className="range-box">
          <label>Price: ₹0 - ₹{priceRange}</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange}
            onChange={(e) =>
              dispatch(setPriceRange(Number(e.target.value)))
            }
          />
        </div>

        <div className="rating-box">
          <label>Rating:</label>
          <select
            value={rating}
            onChange={(e) =>
              dispatch(setRating(Number(e.target.value)))
            }
          >
            <option value="0">All</option>
            <option value="1">1 ⭐ & above</option>
            <option value="2">2 ⭐ & above</option>
            <option value="3">3 ⭐ & above</option>
            <option value="4">4 ⭐ & above</option>
          </select>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {filtered.map((item) => (
          <div className="card" key={item.id}>

            {/* ✅ Image Click → Details */}
            <img
              src={item.image}
              alt={item.title}
              onClick={() => navigate(`/product/${item.id}`)}
              style={{ cursor: "pointer" }}
            />

            <h4>{item.title.substring(0, 40)}...</h4>
            <p>₹{item.price}</p>
            <p>⭐ {item.rating.rate}</p>

            <div className="btns">
              <Link to={`/product/${item.id}`} className="view-btn">
                View Details
              </Link>

              <button
                className="premium-btn"
                onClick={() => handleAddToCart(item)}
              >
                🛒 Add to Cart
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* CSS */}
      <style>{`
        .shop-container {
          padding: 40px;
          background: #fcf2f2;
          color: white;
          }
          
          .filter-box {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 30px;
            background: #9c6c6c;
            padding: 20px;
            border-radius: 15px;
            }
            
            .filter-box input,
            .filter-box select {
              padding: 8px;
              border-radius: 8px;
              border: none;
              }
              
              .range-box {
                display: flex;
                flex-direction: column;
                }
                
                .rating-box {
                  display: flex;
                  flex-direction: column;
                  }
                  
                  .product-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 25px;
        }

        .card {
  background: linear-gradient(145deg, #58440c, #2c2c2c);
  padding: 20px;
  color: #f5f5f5;
  border-radius: 15px;
  text-align: center;
  transition: 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.7);
}
        
        .card img {
          height: 180px;
          object-fit: contain;
          margin-bottom: 10px;
          }
          
          .btns {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            }
            
            button, .view-btn {
              padding: 8px 12px;
              border: none;
              border-radius: 8px;
              cursor: pointer;
              background: linear-gradient(45deg,#ff6b6b,#f06595);
              color: white;
              text-decoration: none;
              }
              `}</style>


    </div>
  );
}
export default Shop;
