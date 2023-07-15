import { useState, useEffect } from "react";

const showButtonHeight = 500;
export default function useWindowSize() {
  const breakPoint = 1127;
  const [showSelect, setShowSelect] = useState<boolean>(false);
  const [showScrollToTopButton, setShowButton] = useState(false);

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
    window.addEventListener("scroll", () =>
      window.scrollY > showButtonHeight
        ? setShowButton(true)
        : setShowButton(false)
    );
  }, []);

  return [{ showSelect, showScrollToTopButton }];
}
