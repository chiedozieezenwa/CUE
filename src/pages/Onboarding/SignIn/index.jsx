import { useContext, useState } from "react";
import design from "./signin.module.css";
import { Button } from "../../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/appContext";
import axios from "../../../api/axios";
import { closeIcon, hidePassword, showPassword } from "../../../assets";

export const Signin = () => {
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [showP, setShowP] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowP(!showP);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://cue-api-3tyr.onrender.com/api/v1/signin",
        {
          email: user.email,
          password: user.password,
        }
      );
      if (response.status === 200) {
        // Handle successful login
        navigate("/dashboard"); // Navigate to the dashboard
      }
    } catch (error) {
      // Handle error
      setError("Login failed. Please check your email and password.");
    }
  };

  const togglePopUp = () => {
    return setIsOpen(!isOpen);
  };

  return (
    isOpen && (
      <div className={design.popup}>
        <div className={design.popup_inner}>
          <div className={design["toggle-icon"]} onClick={togglePopUp}>
            <img src={closeIcon} alt="Click to close" />
          </div>

          <section className={design["popup-card"]}>
            <div className={design.headertxt}>Log in</div>

            {error && <p className={design.error}>{error}</p>}

            <form onSubmit={handleSubmit} className={design["signup-form"]}>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
              <div className={design["password-container"]}>
                <input
                  type={showP ? "text" : "password"}
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  placeholder="Enter Password"
                  required
                />
                <img
                  src={showP ? hidePassword : showPassword}
                  alt="Toggle Password Visibility"
                  onClick={togglePasswordVisibility}
                  className={design["eye-icon"]}
                />
              </div>

              <Button content="Log in" className={design["signUpbtn"]} />
            </form>

            <p className={design["signInlink"]}>
              Forgot Password?
              <Link to="./login"> Recover</Link>
            </p>
          </section>
        </div>
      </div>
    )
  );
};
