import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";

const useScreenSize = () => {
  const { width } = useWindowSize();

  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
  });

  const handleScreenSize = () => {
    if (width < 768) {
      setScreenSize({
        isMobile: true,
        isTablet: false,
        isLaptop: false,
        isDesktop: false,
      });
    } else if (width >= 768) {
      setScreenSize({
        isMobile: false,
        isTablet: true,
        isLaptop: false,
        isDesktop: false,
      });
    } else if (width >= 1024) {
      setScreenSize({
        isMobile: false,
        isTablet: false,
        isLaptop: true,
        isDesktop: false,
      });
    } else if (width >= 1440) {
      setScreenSize({
        isMobile: false,
        isTablet: false,
        isLaptop: false,
        isDesktop: true,
      });
    }
  };

  useEffect(() => {
    handleScreenSize();
  }, [width]);

  return screenSize;
};

export default useScreenSize;
