import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Button, Navbar } from "../../../components";
import { Link, useNavigate } from "react-router-dom";
import {
  arrowLeft,
  bookIcon,
  ebonyi,
  penIcon,
  proAvatar,
} from "../../../assets";

export const ProfilePage = () => {
  const [profile, setProfile] = useState({
    fullname: "",
    email: "",
    role: "",
    createdAt: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log('User parser',parsedUser?.user);
      console.log('User parser',parsedUser);
      setProfile({
        fullname: parsedUser?.user?.fullname || "N/A",
        email: parsedUser?.user?.email || "N/A",
        role: parsedUser?.user?.role || "N/A",
        createdAt:
          new Date(parsedUser?.user?.createdAt).toLocaleDateString() || "N/A",
      });
    }
  }, []);

  const handleShareButtonClick = () => {
    const shareLink = `${window.location.origin}/profile/${profile.fullname.replace(/\s+/g, '-').toLowerCase()}`;
    navigate("/share", { state: { shareLink } });
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}></div>
      <section className={styles.profileSection}>
        <div className={styles.proAvatar}>
          <img src={proAvatar} alt="Profile Avatar" />
          <div className={styles.userDetails}>
            <p className={styles.email}>{profile.email}</p>
            <p className={styles.email}>{profile.fullname}</p>
            <div className={styles.follower}>
              <div>
                <p>0</p>
                <p>Followers</p>
              </div>
              <div>
                <p>0</p>
                <p>Following</p>
              </div>
            </div>
          </div>
          <div className={styles.editShareSection}>
            <Link to="/settings">
              <Button
                content="Edit"
                img={penIcon}
                className={styles.editBTN}
              />
            </Link>
            <Link to="/sharePage">
            <Button
              content="Share"
              img={arrowLeft}
              className={styles.shareBTN}
              onClick={handleShareButtonClick}
            />
            </Link>
          </div>
        </div>
        <div className={styles.tripPlanSection}>
          <Link to="/trip">
            <div id={styles.trip}>
              <img src={bookIcon} alt="" />
              <p>Trip to Plan</p>
            </div>
          </Link>
          <div>
            <img src={ebonyi} alt="" />
          </div>
          <Link to="/itineary">
            <div className={styles.planAtrip}>
              <p>Trip to Enugu</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};
