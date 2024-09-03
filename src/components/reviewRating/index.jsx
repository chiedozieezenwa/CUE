import { useState, useEffect } from "react";
import axios from "axios";
import { lady, lady1, man } from "../../assets";
import Rating from "../landingPage/rating";
import styles from "./styles.module.css";
import { Button } from "../button";
import Ratings from "../landingPage/rating2";

export const RatingReview = () => {
      const [note, setNote] = useState("");
      const [newReview, setNewReview] = useState({
        location: "",
        date: "",
        stayType: "",
        rating: 0,
      });
      const [submittedReviews, setSubmittedReviews] = useState([]);
      const [totalReviews, setTotalReviews] = useState(320);
      const [progress, setProgress] = useState({
        5: 70,
        4: 85,
        3: 60,
        2: 20,
      });
    
      useEffect(() => {
        const savedReviews = JSON.parse(localStorage.getItem("submittedReviews"));
        const savedProgress = JSON.parse(localStorage.getItem("progress"));
        const savedTotalReviews = localStorage.getItem("totalReviews");
    
        if (savedReviews) {
          setSubmittedReviews(savedReviews);
        }
        if (savedProgress) {
          setProgress(savedProgress);
        }
        if (savedTotalReviews) {
          setTotalReviews(Number(savedTotalReviews));
        }
    
        const currentDate = new Date().toISOString().substring(0, 7);
        setNewReview((prevReview) => ({
          ...prevReview,
          date: currentDate,
        }));
    
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              try {
                const { latitude, longitude } = position.coords;
                const response = await axios.get(
                  `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
                );
                const location =
                  response.data.results[0]?.formatted_address || "Location not found";
                setNewReview((prevReview) => ({
                  ...prevReview,
                  location,
                }));
              } catch (error) {
                console.error("Error fetching location:", error);
                setNewReview((prevReview) => ({
                  ...prevReview,
                  location: "Unknown Location",
                }));
              }
            },
            () => {
              setNewReview((prevReview) => ({
                ...prevReview,
                location: "Unknown Location",
              }));
            }
          );
        } else {
          setNewReview((prevReview) => ({
            ...prevReview,
            location: "Geolocation not supported",
          }));
        }
      }, []);
    
      const handleNoteChange = (e) => {
        setNote(e.target.value);
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
      };
    
      const handleRatingChange = (newRating) => {
        setNewReview({ ...newReview, rating: newRating });
      };
    
      const handleNoteSubmit = async () => {
        if (
          note.trim() &&
          newReview.location &&
          newReview.date &&
          newReview.stayType &&
          newReview.rating
        ) {
          try {
            // Send the review data to the backend
            const response = await axios.post(
              "https://cue-api-3tyr.onrender.com/api/v1/reviews",
              {
                location: newReview.location,
                date: newReview.date,
                stayType: newReview.stayType,
                rating: newReview.rating,
                note,
              }
            );
    
            if (response.status === 201) { // Assuming 201 is the status for successful creation
              // Update state and local storage
              const updatedProgress = { ...progress };
              if (updatedProgress[newReview.rating] !== undefined) {
                updatedProgress[newReview.rating] = Math.min(
                  updatedProgress[newReview.rating] + 5,
                  100
                );
              }
    
              const updatedReviews = [...submittedReviews, { ...newReview, note }];
              const updatedTotalReviews = totalReviews + 1;
    
              setProgress(updatedProgress);
              setTotalReviews(updatedTotalReviews);
              setSubmittedReviews(updatedReviews);
    
              localStorage.setItem("submittedReviews", JSON.stringify(updatedReviews));
              localStorage.setItem("progress", JSON.stringify(updatedProgress));
              localStorage.setItem("totalReviews", updatedTotalReviews.toString());
    
              setNote("");
              setNewReview({ location: "", date: "", stayType: "", rating: 0 });
            } else {
              console.error("Failed to submit review:", response.statusText);
            }
          } catch (error) {
            console.error("Error submitting review:", error);
          }
        }
      };
    
      const handleDeleteReview = (index) => {
        const updatedReviews = submittedReviews.filter((_, i) => i !== index);
        const updatedTotalReviews = totalReviews - 1;
    
        setSubmittedReviews(updatedReviews);
        setTotalReviews(updatedTotalReviews);
    
        localStorage.setItem("submittedReviews", JSON.stringify(updatedReviews));
        localStorage.setItem("totalReviews", updatedTotalReviews.toString());
      };
    
  return (
    <div>
      <section className={styles.containerReview}>
        <div>
          <h1>Customer Reviews ({totalReviews})</h1>
          <div className={styles.containerReviewInfo}>
            <div className={styles.containerReviewInfo1}>
              <p id={styles.rating}>4.5</p>
              <p className={styles.rating2}>
                <Rating />
              </p>
              <p id={styles.verified}>All from verified purchases</p>
            </div>
            <div className={styles.containerReviewInfo2}>
              {[5, 4, 3, 2].map((star) => (
                <div key={star} className={styles.reviewItem}>
                  <p>{star} Stars</p>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.filledBar}
                      style={{ width: `${progress[star]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <article className={styles.reviewTestimonial}>
        <div className={styles.reviewTestimonialinfo}>
          <div className={styles.reviewTestimonialinfo1}>
            <img src={lady} alt="" />
            <div className={styles.reviewRating}>
              <p>Claire Alfred</p>
              <p>Lagos, Nigeria</p>
              <div id={styles.stayed}>
                <p>
                  <Rating />
                </p>
                <p>July 2024. Stayed with kids</p>
              </div>
              <p>
                I loved our stay at this apartment, as a family woman it was
                very conducive and accommodating for people with family.
              </p>
            </div>
          </div>
          <div className={styles.reviewTestimonialinfo1}>
            <img src={man} alt="" />
            <div className={styles.reviewRating}>
              <p>Samuel Uche</p>
              <p>Abuja, Nigeria</p>
              <div id={styles.stayed}>
                <p>
                  <Rating />
                </p>
                <p>May 2024. Stayed with Friends</p>
              </div>
              <p>
                Their security feature is top-notch, I really liked it. I also
                like how serene the environment is.
              </p>
            </div>
          </div>
          <div>
            {submittedReviews.map((review, index) => (
              <div key={index} className={styles.reviewDynamic}>
                <img src={lady1} alt="" />
                <div className={styles.reviewRating}>
                  <p>{review.location}</p>
                  <div id={styles.stayed}>
                    <p>
                      <Ratings rating={review.rating} />
                    </p>
                    <p>
                      {review.date}. {review.stayType}
                    </p>
                  </div>
                  <p id={styles.reviewRating}>{review.note}</p>
                </div>
                  <button
                  onClick={() => handleDeleteReview(index)}
                    className={styles.deleteButton}
                  >
                     &times;
                  </button>
              </div>
            ))}
          </div>
        </div>
      </article>

      <article className={styles.textareaTesti}>
        <div className={styles.textareaInfo}>
          <h5>Share your experience</h5>
          <div>
            <textarea
              id="note"
              value={note}
              onChange={handleNoteChange}
              placeholder="Write your review"
              className={styles.reviewTextarea}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="location"
              name="location"
              value={newReview.location}
              onChange={handleInputChange}
              placeholder="Your location"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <select
              id="stayType"
              name="stayType"
              value={newReview.stayType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select</option>
              <option value="Stayed Solo">Stayed Solo</option>
              <option value="Stayed with Partner">Stayed with Partner</option>
              <option value="Stayed with Friends">Stayed with Friends</option>
              <option value="Stayed with Kids">Stayed with Kids</option>
              <option value="Stayed for Business">Stayed for Business</option>
            </select>
          </div>
          <div className={styles.ratingBTN}>
            <div>
              <p>How would you like to rate us?</p>
              <Ratings
                rating={newReview.rating}
                onRatingChange={handleRatingChange}
              />
            </div>
            <Button
              content="Submit Review"
              onClick={handleNoteSubmit}
              className={styles.textareaBTN}
            />
          </div>
        </div>
      </article>
    </div>
  );
};
