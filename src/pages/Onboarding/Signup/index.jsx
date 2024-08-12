import { useContext, useState } from "react";
import design from "./signup.module.css";
import { Button } from "../../../components/button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/appContext";
import axios from "../../../api/axios";
import { closeIcon, hidePassword, showPassword } from "../../../assets";
import { FadeLoader } from "react-spinners";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const Signup = () => {
  const { toggleSigninPopup } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [showP, setShowP] = useState(false); // Show or hide password state
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowP(!showP);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://cue-api-3tyr.onrender.com/api/v1/users/signup",
        { email, password },
        { withCredentials: true }
      );
      console.log(response.data);

      if (response.status === 200) {
        navigate("/signin");
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
      <Modal className={design.popup}
        isOpen={isOpen}
        onRequestClose={togglePopUp}
      >
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

            <div className={design["toggle-icon"]} onClick={togglePopUp}>
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

                <Button
                  content="Sign up"
                  className={design["signUpbtn"]}
                  onClick={handleSubmit}
                />
              </form>

              <p className={design["signInlink"]}>
                Already have an account?
                <Button
                  onClick={toggleSigninPopup}
                  content="Log in"
                  className={design["logIn-btn"]}
                />
              </p>
            </section>
          </div>
      </Modal>
  );
};
