import React, { useState, useEffect } from "react";

export const ProfilePage = () => {
  const [profile, setProfile] = useState({
    fullname: "",
    email: "",
    role: "",
    createdAt: "",
    // Add more fields as needed
  });

  // Load user profile details from localStorage or an API
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setProfile({
        fullname: parsedUser?.user?.fullname || "N/A",
        email: parsedUser?.user?.email || "N/A",
        role: parsedUser?.user?.role || "N/A",
        createdAt: new Date(parsedUser?.user?.createdAt).toLocaleDateString() || "N/A",
        // Add more fields if necessary
      });
    }
  }, []);

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
      textAlign: "center",
    },
    profileDetails: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "20px",
      marginBottom: "20px",
      backgroundColor: "#f9f9f9",
    },
    detailItem: {
      marginBottom: "15px",
    },
    label: {
      fontWeight: "bold",
    },
    value: {
      marginLeft: "10px",
    },
    button: {
      display: "block",
      margin: "auto",
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
      <h1 style={styles.header}>Profile</h1>
      <div style={styles.profileDetails}>
        <div style={styles.detailItem}>
          <span style={styles.label}>Full Name:</span>
          <span style={styles.value}>{profile.fullname}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Email:</span>
          <span style={styles.value}>{profile.email}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Role:</span>
          <span style={styles.value}>{profile.role}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Member Since:</span>
          <span style={styles.value}>{profile.createdAt}</span>
        </div>
        {/* Add more profile details here if necessary */}
      </div>
      <button style={styles.button} onClick={() => alert("Edit Profile clicked!")}>
        Edit Profile
      </button>
    </div>
  );
};
