import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const images = [
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
    "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
    "https://images.unsplash.com/photo-1607082349566-187342175e2f",
    "https://images.unsplash.com/photo-1607082350899-7e105aa886ae",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1542838132-92c53300491e",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80"
  ];


  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="home-container">
      {/* Slider */}
      <div className="slider">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
          >
            <img src={img} alt="slide" />
          </div>
        ))}

        {/* Arrows */}
        <button className="arrow left" onClick={prevSlide}>
          ❮
        </button>
        <button className="arrow right" onClick={nextSlide}>
          ❯
        </button>

        {/* Hero Text */}
        <div className="hero-overlay">
          <h1>Premium Shopping Experience</h1>
          <p>Modern React + Redux E-Commerce Website</p>
          <Link to="/shop" className="btn">
            Shop Now
          </Link>
        </div>
      </div>

      {/* CSS Inside */}
      <style>{`
        .home-container {
          width: 100%;
          overflow: hidden;
        }

        .slider {
          position: relative;
          height: 90vh;
          width: 100%;
        }

        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(70%);
        }

        .slide.active {
          opacity: 1;
        }

/* ===== Premium Hero Simple Upgrade ===== */

.hero-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  animation: fadeUp 1.5s ease forwards;
  opacity: 0;
}

/* Heading */
.hero-overlay h1 {
  font-size: 3.2rem;   /* bigger */
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 18px;
  text-transform: uppercase;
  text-shadow: 0 6px 20px rgba(0,0,0,0.6);
}

/* Paragraph */
.hero-overlay p {
  font-size: 1.3rem;   /* bigger */
  margin-bottom: 25px;
  color: #f5f5f5;
  letter-spacing: 1px;
}

/* Button */
.hero-overlay .btn {
  padding: 12px 32px;
  border-radius: 35px;
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(45deg,#ff6b6b,#f06595);
  color: white;
  text-decoration: none;
  transition: 0.3s ease;
}

.hero-overlay .btn:hover {
  transform: scale(1.08);
}

/* Smooth Fade Up */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

/* Mobile */
@media (max-width: 768px) {
  .hero-overlay h1 {
    font-size: 2rem;
  }

  .hero-overlay p {
    font-size: 1rem;
  }
}
        .btn {
          padding: 12px 25px;
          background: linear-gradient(45deg,#ff6b6b,#f06595);
          border: none;
          border-radius: 30px;
          color: white;
          text-decoration: none;
          font-weight: bold;
          transition: 0.3s ease;
        }

        .btn:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.3);
          border: none;
          font-size: 2rem;
          padding: 10px 15px;
          cursor: pointer;
          color: white;
          border-radius: 50%;
          transition: 0.3s;
        }

        .arrow:hover {
          background: rgba(255,255,255,0.6);
        }

        .left {
          left: 20px;
        }

        .right {
          right: 20px;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translate(-50%, -40%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-overlay h1 {
            font-size: 2rem;
          }

          .hero-overlay p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
