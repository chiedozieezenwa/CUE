import React, { useState, useEffect } from "react";

export const SettingsPage = () => {
  const [profileDetails, setProfileDetails] = useState({
    fullname: "",
    email: "",
    password: "",
   
  });


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

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "8px",
      fontSize: "16px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      fontSize: "16px",
      color: "#fff",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Settings</h1>
      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="fullname">
          Full Name
        </label>
        <input
          style={styles.input}
          type="text"
          id="fullname"
          name="fullname"
          value={profileDetails.fullname}
          onChange={handleInputChange}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="email">
          Email
        </label>
        <input
          style={styles.input}
          type="email"
          id="email"
          name="email"
          value={profileDetails.email}
          onChange={handleInputChange}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="password">
          Password
        </label>
        <input
          style={styles.input}
          type="password"
          id="password"
          name="password"
          value={profileDetails.password}
          onChange={handleInputChange}
        />
      </div>
      <button style={styles.button} onClick={handleSaveChanges}>
        Save Changes
      </button>
    </div>
  );
};
