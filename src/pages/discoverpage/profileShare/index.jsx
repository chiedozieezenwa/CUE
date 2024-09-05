import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "../../../components";
import { socialicon, socialicon1 } from "../../../assets";

export const SharePage = () => {
  const location = useLocation();
  const shareLink = location.pathname;

  const shareOnSocialMedia = (platform) => {
    let shareUrl = "";
    console.log("shareurl", shareUrl);
    if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        "https://cue-nine.vercel.app" + shareLink
      )}`;
    } else if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      "https://cue-nine.vercel.app" +  shareLink
      )}`;
    }

    window.open(shareUrl, "_blank");
  };
  console.log("sharelink", shareLink);
  console.log("location", location);

  return (
    <div className={styles.shareContainer}>
      <div className={styles.shareContainerinfo}>
        <div className={styles.shareinfo}>
          <h1>Share Your Profile</h1>
          <p>Show your friends where you’ve been</p>
        </div>
        <div className={styles.shareLink}>
          <p>
            {" "}
            <a href={shareLink}>{shareLink}</a>
          </p>
        </div>

        <div className={styles.socialButtons}>
          <Button
          img={socialicon1}
            onClick={() => shareOnSocialMedia("twitter")}
          />
          <Button
            img={socialicon}
            onClick={() => shareOnSocialMedia("facebook")}
          />
        </div>
      </div>
    </div>
  );
};
