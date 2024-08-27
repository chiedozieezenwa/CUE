import design from "./signin.module.css";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import { closeIcon, hidePassword, showPassword } from "../../../assets";
import { FadeLoader } from "react-spinners";
import { useState } from "react";
import { Recover } from "../Recover";
import { usePopUp } from "../../../context/usePopUp";

export const Signin = () => {
  const { currentPopup, openPopup, closePopup } = usePopUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showP, setShowP] = useState(false);
  const [loading, setLoading] = useState(false);
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
        closePopup();
        navigate("/disc");
      }
      
    } catch (error) {
      if (error.response) {
        setError(
          error.response.data.message || "Signin failed. Please try again."
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

  return (
    <>
      {currentPopup === "signin" && (
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

            <div className={design["toggle-icon"]} onClick={closePopup}>
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
                >
                  Log in
                </button>
                </form>

                <p className={design["signUp-link"]}>
                  Don’t have an account?
                  <button
                    onClick={() => {
                      closePopup();
                      openPopup("signup");
                    }}
                    className={design["logIn-btn"]}
                  >
                    Sign up
                  </button>
                </p>
                <p className={design["signUp-link"]}>
                  Forgot your password?
                  <button
                      onClick={() => {
                        console.log("Recover button clicked");
                        closePopup();
                        openPopup("recover");
                      }}
                    className={design["logIn-btn"]}
                  >
                    Recover
                  </button>
                </p>
              
            </section>
          </div>
        </div>
      )}
      {currentPopup === "recover" && <Recover />}
    </>
  );
};
