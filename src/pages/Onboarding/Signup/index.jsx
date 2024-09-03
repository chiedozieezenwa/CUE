import { useState } from "react";
import design from "./signup.module.css";
import axios from "../../../api/axios";
import { closeIcon, hidePassword, showPassword } from "../../../assets";
import { FadeLoader } from "react-spinners";
import { Signin } from "../SignIn";
import { usePopUp } from "../../../context/usePopUp";

export const Signup = () => {
  const { currentPopup, openPopup, closePopup } = usePopUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showP, setShowP] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowP(!showP);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://cue-backend.onrender.com/api/v1/users/signup",
        { email, password },
        { withCredentials: true }
      );
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      console.log(res.data);
      closePopup(); // Close signup popup
      openPopup("signin"); // Open signin popup

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

  return (
    <>
      {currentPopup === "signup" && (
        <div className={design.popup}>
          <div className={design.popup_inner}>
            {loading && (
              <div className={design.loaderOverlay}>
                <FadeLoader
                  color="#1516a5"
                  visible={true}
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
              <div className={design.headertxt}>
                Sign up to take your trip planning to the next level
              </div>

              {error && <p className={design.error}>{error}</p>}

              <form className={design["signup-form"]} onSubmit={handleSubmit}>
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
                    placeholder="Create Password"
                    required
                  />
                  <img
                    src={showP ? hidePassword : showPassword}
                    alt="Toggle Password Visibility"
                    onClick={togglePasswordVisibility}
                    className={design["eye-icon"]}
                  />
                </div>

                <button className={design["signUpbtn"]} type="submit">
                  Sign up
                </button>
              </form>

              <p className={design["signInlink"]}>
                Already have an account?
                <button
                  onClick={() => {
                    closePopup();
                    openPopup("signin");
                  }}
                  className={design["logIn-btn"]}
                >
                  Log in
                </button>
              </p>
            </section>
          </div>
        </div>
      )}
      {currentPopup === "signin" && <Signin />}
    </>
  );
};
