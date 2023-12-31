import { useEffect, useState } from "react";

const useResponsive = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobile = innerWidth < 500;
  const tablet = innerWidth > 500 && innerWidth < 885;
  const desktop = innerWidth > 885;

  return {
    mobile,
    tablet,
    desktop,
  };
};

export default useResponsive;
