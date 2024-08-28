import { useState } from "react";
import { usePopUp } from "../../../context/usePopUp";
import design from "./otp.module.css"
import axios from "../../../api/axios";
import { FadeLoader } from "react-spinners";
import { closeIcon } from "../../../assets";
import { Navigate } from "react-router-dom";

export const Otp = () => {
    const { currentPopup, closePopup } = usePopUp();
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError("");
      setSuccess("");
  
      try {
        const response = await axios.post(
          "https://cue-api-3tyr.onrender.com/api/v1/users/otp",
          { otp },
          { withCredentials: true }
        );
        if (response.status === 200) {
          setSuccess("Successful");
          Navigate("/otp")
        }
      } catch (error) {
        if (error.response) {
          setError(
            error.response.data.message || "Recovery failed. Please try again."
          );
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <>
        {currentPopup === "otp" && (
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
                <div className={design.headertxt}>Verification Code</div>
                <p className={design.herotxt}>
                An authentication code has been sent to your email. Please enter here
                </p>
  
                {error && <p className={design.error}>{error}</p>}
                {success && <p className={design.success}>{success}</p>}
  
                <form className={design["signup-form"]} onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="number"
                            name="number"
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder=""
                            required
                        />
                        <input
                            type="number"
                            name="number"
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder=""
                            required
                        />
                        <input
                            type="number"
                            name="number"
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder=""
                            required
                        />
                        <input
                            type="number"
                            name="number"
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder=""
                            required
                        />
                        <input
                            type="number"
                            name="number"
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder=""
                            required
                        />
                        <input
                            type="number"
                            name="number"
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder=""
                            required
                        />
                    </div>
  
                  <button className={design["signUpbtn"]} type="submit">
                    Verify
                  </button>
                </form>
              </section>
            </div>
          </div>
        )}
      </>
    );
  };
  
