import design from "./recover.module.css";
import { Button } from "../../../components/button";
import { closeIcon } from "../../../assets";
import { FadeLoader } from "react-spinners";
import axios from "../../../api/axios";
import { useState } from "react";

export const Recover = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://cue-api-3tyr.onrender.com/api/v1/users/recover-password",
        { email },
        { withCredentials: true }
      );
      if (response.status === 200) {
        // Handle successful password recovery
      }
    } catch (error) {
      if (error.response) {
        setError(
          error.response.data.message || "Recovery failed. Please try again."
        );
      } else if (error.request) {
        setError("No response from the server. Please try again later.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };


  return (
    isOpen && (
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
            <div className={design.headertxt}>Forgot your password?</div>

            {error && <p className={design.error}>{error}</p>}

            <form className={design["signup-form"]} onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />

              <Button
                content="Continue"
                className={design["signUpbtn"]}
                onClick={handleSubmit}
              />
            </form>

            <p>Reset password</p>
          </section>
        </div>
      </div>
    )
  );
};
