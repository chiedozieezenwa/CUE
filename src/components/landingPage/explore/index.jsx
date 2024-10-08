import { Button } from "../../button";
import { Destination } from "../destination";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

export const Explore = () => {
    const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const url = "https://cuedemo.onrender.com/api/v1/destinations";

    fetch(url)
      .then((response) => {
        return response.json();
      })

      .then((response) => {
        console.log("fetch response: ", response);
        console.log(response, "rrr");

        setDestinations(response.data.destinations || []);
      })

      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  console.log("Destinations State:", destinations[0]);

  return (
    <div className={styles.container}>
    <div className={styles.explore2}>
    <p>Explore The Hidden Wonders Of Nigeria.</p>
    <Button
    content="See all"
    className={styles.exploreBTN}
    />
    </div>
  
    <div className={styles.homeCards}>
      {destinations.length > 0 ? (
        destinations
          .slice(0, 3)
          .map((destination, index) => (
            <Destination
              key={index}
              hasTag={true}
              destinationImage={destination.image_url}
              subject={destination.name}
              name={destination.name}
              title={destination.title}
              description={destination.state}
              rating={destination.ratingS}
              review={destination.review}
              destinationImg={destination.destinationImg}
            />
          ))
      ) : (
        <p>No destinations to display</p>
      )}
    </div>
  </div>
  )
}
