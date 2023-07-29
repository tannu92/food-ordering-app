import { useEffect, useState } from "react";

// Custom Hook  (same as functional component)

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  // return online status- Boolean value
  return onlineStatus;
};

export default useOnlineStatus;
