import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const SettingsPage = () => {
  const [profileDetails, setProfileDetails] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setProfileDetails({
        fullname: parsedUser?.user?.fullname || "",
        email: parsedUser?.user?.email || "",
        password: "",
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Logic to update user details, e.g., API call
    console.log("Profile details updated:", profileDetails);
    // Persist changes to localStorage or backend if needed
  };

  const handleDelete = () => {
    // Logic to delete user profile details if needed
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className={styles.container}>
      <div>
      <div id={styles.BTN1}>
          <button className={styles.deleteBTN} onClick={handleDelete}>
          &times;
          </button>
        </div>
        <div className={styles.containerEdit}>
          <h1>Edit Profile</h1>
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.formGroupInputDetails}
            type="text"
            id="fullname"
            name="fullname"
            value={profileDetails.fullname}
            onChange={handleInputChange}
            placeholder="Name"
          />
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.formGroupInputDetails}
            type="password"
            id="password"
            name="password"
            value={profileDetails.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.formGroupInputDetails}
            type="email"
            id="email"
            name="email"
            value={profileDetails.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </div>
        <div id={styles.BTN}>
          <button className={styles.formGroupBTN} onClick={handleSaveChanges}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
