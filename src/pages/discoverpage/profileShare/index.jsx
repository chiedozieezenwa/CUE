
import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "../../../components";

export const SharePage = () => {
  const location = useLocation();
  const shareLink = location.state?.shareLink;

  const shareOnSocialMedia = (platform) => {
    let shareUrl = "";

    if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareLink)}`;
    } else if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`;
    }

    window.open(shareUrl, "_blank");
  };

  return (
    <div className={styles.shareContainer}>
      <h1>Share Your Profile</h1>
      <p>Show your friends where you’ve been</p>
      <p> <a href={shareLink}>{shareLink}</a></p>
      <div className={styles.socialButtons}>
        <Button
          content="Share on Twitter"
          onClick={() => shareOnSocialMedia("twitter")}
        />
        <Button
          content="Share on Facebook"
          onClick={() => shareOnSocialMedia("facebook")}
        />
      </div>
    </div>
  );
};
