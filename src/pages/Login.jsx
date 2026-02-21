import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email }));
    navigate("/account");
  };

  return (
    <>
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-box">
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

          <p>
            Don't have account? <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>

      <style>{`
        .login-container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f4f4f4;
        }

        .login-box {
          background: white;
          padding: 30px;
          width: 800px;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .login-box input {
          padding: 14px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .login-box button {
          padding: 14px;
          border: none;
          border-radius: 5px;
          background: #111;
          color: white;
          cursor: pointer;
        }

        .login-box button:hover {
          opacity: 0.9;
        }

        .login-box p {
          font-size: 14px;
          text-align: center;
        }

        .login-box a {
          color: #111;
          text-decoration: none;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}

export default Login;
