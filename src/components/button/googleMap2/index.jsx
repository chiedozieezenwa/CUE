import { useState, useEffect, useCallback, useMemo } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Marker } from '@react-google-maps/api';

const GoogleMapWithDirections = ({ origin, destination, searchQuery }) => {
  const [response, setResponse] = useState(null);
  const [places, setPlaces] = useState([]);
  const [center, setCenter] = useState(origin);

  const directionsCallback = useCallback((result, status) => {
    if (status === 'OK' && result) {
      setResponse(result);
    } else {
      console.error('Error fetching directions:', status, result);
    }
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));
      const request = {
        query: searchQuery,
        fields: ['name', 'geometry'],
      };

      service.findPlaceFromQuery(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
          setPlaces(results);
          if (results[0]?.geometry?.location) {
            setCenter(results[0].geometry.location); // Re-center the map
          }
        }
      });
    }
  }, [searchQuery]);

  // Memoize the map options to avoid unnecessary re-renders
  const mapOptions = useMemo(() => ({
    center: center,
    zoom: 7,
  }), [center]);

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}  // Ensure your API key is set here
      libraries={['places']}
    >
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        {...mapOptions}
      >
        <DirectionsService
          options={{
            destination: destination,
            origin: origin,
            travelMode: 'DRIVING',
          }}
          callback={directionsCallback}
        />

        {response && (
          <DirectionsRenderer
            options={{
              directions: response,
            }}
          />
        )}

        {places.map((place, index) => (
          <Marker
            key={index}
            position={place.geometry.location}
            title={place.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapWithDirections;
