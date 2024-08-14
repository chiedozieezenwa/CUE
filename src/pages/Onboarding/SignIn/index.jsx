import design from "./signin.module.css";
import { Button } from "../../../components/button";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import { closeIcon, hidePassword, showPassword } from "../../../assets";
import { FadeLoader } from "react-spinners";
import { useState } from "react";
import { Recover } from "../Recover";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [showP, setShowP] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isRecoverOpen, setIsRecoverOpen] = useState(false); // To control the Recover popup visibility
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowP(!showP);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://cue-api-3tyr.onrender.com/api/v1/users/signin",
        { email, password },
        { withCredentials: true }
      );
      console.log(response.data);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        setError(
          error.response.data.message || "Signup failed. Please try again."
        );
      } else if (error.request) {
        setError("No response from the server. Please try again later.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className={design.popup}>
          <div className={design.popup_inner}>
            {loading && (
              <div className={design.loaderOverlay}>
                <FadeLoader
                  color="#1516a5"
                  loading={loading}
                  height={15}
                  width={5}
                  radius={2}
                  margin={2}
                />
              </div>
            )}

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
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
                <div className={design["password-container"]}>
                  <input
                    type={showP ? "text" : "password"}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
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

                <button
                  className={design["signUpbtn"]}
                  type="submit"
                  disabled={loading}
                >
                  Log in
                </button>
              </form>

              <p className={design["signInlink"]}>
                Forgot Password?
                <Button
                  onClick={() => {
                    setIsOpen(false); // Close signin popup
                    setIsRecoverOpen(true); // Show recover popup
                  }}
                  content="Recover"
                  className={design["logIn-btn"]}
                />
              </p>
            </section>
          </div>
        </div>
      )}
      {isRecoverOpen && <Recover />}{" "}
      
    </>
  );
};
