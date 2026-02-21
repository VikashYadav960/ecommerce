import { useEffect, useState } from "react";

function About() {

    const [users, setUsers] = useState(0);
    const [products, setProducts] = useState(0);
    const [orders, setOrders] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setUsers((prev) => (prev < 1000 ? prev + 10 : 1000));
            setProducts((prev) => (prev < 500 ? prev + 5 : 500));
            setOrders((prev) => (prev < 1200 ? prev + 15 : 1200));
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="about-container">

            {/* HERO SECTION */}
            <div className="about-hero">
                <div className="overlay">
                    <h1>About V-Store</h1>
                    <p>
                        We build high quality modern e-commerce solutions
                        using React & Redux with smooth UI experience.
                    </p>
                </div>
            </div>

          
            <div className="features">
                <div className="card">
                    <h2>⚡ Fast</h2>
                    <p>Optimized React structure for best performance.</p>
                </div>

                <div className="card">
                    <h2>🎨 Modern</h2>
                    <p>Clean & responsive UI design.</p>
                </div>

                <div className="card">
                    <h2>🔒 Secure</h2>
                    <p>Protected routes & safe authentication system.</p>
                </div>
            </div>

          
            <div className="counter-section">
                <div className="counter-box">
                    <h2>{users}+</h2>
                    <p>Happy Users</p>
                </div>

                <div className="counter-box">
                    <h2>{products}+</h2>
                    <p>Products</p>
                </div>

                <div className="counter-box">
                    <h2>{orders}+</h2>
                    <p>Orders Delivered</p>
                </div>
            </div>

            <div className="team-section">
                <h1>Shop By Categories</h1>

                <div className="team-container">

                    <div className="team-card">
                        <h3>📱 Electronics</h3>
                        <p>Latest smartphones, laptops & smart gadgets.</p>
                    </div>

                    <div className="team-card">
                        <h3>👕 Fashion</h3>
                        <p>Trendy outfits, casual wear & new arrivals.</p>
                    </div>

                    <div className="team-card">
                        <h3>👟 Footwear</h3>
                        <p>Sports shoes, sneakers & formal footwear.</p>
                    </div>

                    <div className="team-card">
                        <h3>🎧 Accessories</h3>
                        <p>Headphones, watches & smart accessories.</p>
                    </div>

                    <div className="team-card">
                        <h3>🛍 New Arrivals</h3>
                        <p>Freshly launched trending products.</p>
                    </div>

                    <div className="team-card">
                        <h3>🔥 Best Sellers</h3>
                        <p>Most popular & high demand products.</p>
                    </div>

                </div>
            </div>


            <style>{`
        .about-container {
          background: #0f0f0f;
          color: white;
          font-family: sans-serif;
        }

        .about-hero {
          height: 70vh;
          background: url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f") center/cover no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .overlay {
          background: rgba(0,0,0,0.7);
          padding: 40px;
          border-radius: 15px;
          text-align: center;
        }

        .features {
          display: flex;
          justify-content: center;
          gap: 30px;
          padding: 60px 20px;
          flex-wrap: wrap;
          background: linear-gradient(135deg,#141e30,#243b55);
        }

        .card {
          background: rgba(255,255,255,0.1);
          padding: 25px;
          width: 250px;
          border-radius: 15px;
          text-align: center;
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-8px);
          background: linear-gradient(45deg,#ff6b6b,#f06595);
        }

        .counter-section {
          display: flex;
          justify-content: center;
          gap: 50px;
          padding: 60px 20px;
          background: #111;
          flex-wrap: wrap;
        }

        .counter-box {
          text-align: center;
        }

        .counter-box h2 {
          font-size: 2.5rem;
          color: #ff6b6b;
        }

        .team-section {
          padding: 60px 20px;
          text-align: center;
          background: linear-gradient(135deg,#243b55,#141e30);
        }

        .team-container {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          margin-top: 40px;
        }

        .team-card {
          background: rgba(255,255,255,0.1);
          padding: 20px;
          border-radius: 15px;
          width: 220px;
          transition: 0.3s;
        }

        .team-card:hover {
          transform: scale(1.05);
          background: linear-gradient(45deg,#ff6b6b,#f06595);
        }

        @media(max-width:768px){
          .features, .counter-section {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

        </div>
    );
}

export default About;
