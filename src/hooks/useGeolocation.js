import { useState, useEffect } from "react";

export const useGeolocation = () => {
  const [currentLocation, setCurrentLocation] = useState(undefined);
  useEffect(() => {
    const onSuccess = (e) => {
      setCurrentLocation({
        latitude: e.coords.latitude.toString(),
        longitude: e.coords.longitude.toString(),
      });
    };
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);

  return currentLocation;
};
