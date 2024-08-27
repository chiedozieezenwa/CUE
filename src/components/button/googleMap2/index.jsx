// import React, { useCallback, useRef } from 'react';
// import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

// const GoogleMapWithDirections = ({ origin, destination }) => {
//   const [response, setResponse] = React.useState(null);

//   const directionsCallback = useCallback((result, status) => {
//     if (status === 'OK' && result) {
//       setResponse(result);
//     } else {
//       console.error('Error fetching directions:', status, result);
//     }
//   }, []);

//   return (
//     <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
//       <GoogleMap
//         mapContainerStyle={{ width: '100%', height: '400px' }} // Ensure container has height and width
//         center={origin}
//         zoom={7}
//       >
//         <DirectionsService
//           options={{
//             destination: destination,
//             origin: origin,
//             travelMode: 'DRIVING'
//           }}
//           callback={directionsCallback}
//         />

//         {response && (
//           <DirectionsRenderer
//             options={{
//               directions: response
//             }}
//           />
//         )}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default GoogleMapWithDirections;


import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Marker } from '@react-google-maps/api';

const GoogleMapWithDirections = ({ origin, destination, searchQuery }) => {
  const [response, setResponse] = useState(null);
  const [places, setPlaces] = useState([]);

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
          if (results[0].geometry.location) {
            // Optional: Re-center the map on the first result
          }
        }
      });
    }
  }, [searchQuery]);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={['places']}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={origin}
        zoom={7}
      >
        <DirectionsService
          options={{
            destination: destination,
            origin: origin,
            travelMode: 'DRIVING'
          }}
          callback={directionsCallback}
        />

        {response && (
          <DirectionsRenderer
            options={{
              directions: response
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
