import design from "./recover.module.css";
import { closeIcon } from "../../../assets";
// import { FadeLoader } from "react-spinners";
// import axios from "../../../api/axios";
// import { useState } from "react";
import { usePopUp } from "../../../context/usePopUp";
import { Otp } from "../OTP";
import { Navigate } from "react-router-dom";

export const Recover = () => {
  const { openPopup, currentPopup, closePopup } = usePopUp();
  // const [email, setEmail] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState("");

  console.log("Current Popup in Recover:", currentPopup); // Debug

  const handleSubmit = async (e) => {
    e.preventDefault();
    Navigate("/otp")
    // setLoading(true);
    // setError("");
    // setSuccess("");

  //   try {
  //     const response = await axios.post(
  //       "https://cue-api-3tyr.onrender.com/api/v1/users/recover-password",
  //       { email },
  //       { withCredentials: true }
  //     );
  //     if (response.status === 200) {
  //       setSuccess(
  //         "A password recovery email has been sent. Please check your inbox."
  //       );
  //     }
  //   } catch (error) {
  //     if (error.response) {
  //       setError(
  //         error.response.data.message || "Recovery failed. Please try again."
  //       );
  //     } else if (error.request) {
  //       setError("No response from the server. Please try again later.");
  //     } else {
  //       setError("An unexpected error occurred. Please try again.");
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  };

  return (
    <>
      {currentPopup === "recover" && (
        <div className={design.popup}>
          <div className={design.popup_inner}>
            {/* {loading && (
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
            )} */}

            <div className={design["toggle-icon"]} onClick={closePopup}>
              <img src={closeIcon} alt="Click to close" />
            </div>

            <section className={design["popup-card"]}>
              <div className={design.headertxt}>Forgot your password?</div>
              <p className={design.herotxt}>
                Don’t worry, it happens to all of us. Enter your email below to
                recover your password
              </p>

              {/* {error && <p className={design.error}>{error}</p>}
              {success && <p className={design.success}>{success}</p>} */}

              <form className={design["signup-form"]} onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  // required
                />

                <button className={design["signUpbtn"]} type="submit" onClick={() => {
                        console.log("Recover button clicked");
                        closePopup();
                        openPopup("otp");
                      }}>
                  Continue
                </button>
              </form>
            </section>
          </div>
        </div>
      )}
      {currentPopup === "otp" && <Otp />}
    </>
  );
};
