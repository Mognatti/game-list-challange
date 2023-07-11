import { useState, useEffect } from "react";

export default function useWindowSize() {
  const breakPoint = 1127;
  const [showSelect, setShowSelect] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth > breakPoint) {
      setShowSelect(false);
    } else {
      setShowSelect(true);
    }
    window.addEventListener("resize", () =>
      window.innerWidth <= breakPoint
        ? setShowSelect(true)
        : setShowSelect(false)
    );
  }, []);

  return showSelect;
}
