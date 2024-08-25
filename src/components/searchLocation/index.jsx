import { useRef, useEffect } from 'react';
import { useLoadScript } from "@react-google-maps/api";
import styles from "./styles.module.css";

const libraries = ["places"];

const LocationSearchInput = ({ onPlaceSelected }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
    async: true,
  });

  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    if (isLoaded && !autocompleteRef.current) {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
        componentRestrictions: { country: "NG" }, // Restrict to Nigeria
      });

      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current.getPlace();
        const selectedTime = new Date();

        if (place.geometry && place.geometry.location) {
          const location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          };

          const imageUrl = place.photos && place.photos.length > 0
            ? place.photos[0].getUrl({ maxWidth: 400, maxHeight: 300 })
            : null;

          onPlaceSelected({
            name: place.name,
            image: imageUrl,
            time: selectedTime,
            geometry: place.geometry,
          });
        }
      });
    }
  }, [isLoaded, onPlaceSelected]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <p>Places to visit</p>
        <p id={styles.tittle}>Add a title (e.g. “Restaurants”)</p>
      </div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Add a place"
        className={styles.places}
      />
    </div>
  );
};

export default LocationSearchInput;
