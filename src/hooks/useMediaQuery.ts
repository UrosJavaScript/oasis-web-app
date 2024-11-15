import { useEffect, useState } from "react";

const useMediaQuery = (width: number) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMatches(window.innerWidth >= width);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Poziva se inicijalno
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return matches;
};

export default useMediaQuery;
