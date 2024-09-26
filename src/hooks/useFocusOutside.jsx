import { useCallback, useEffect, useRef } from "react";

const useFocusOutside = (onFocusOutside, active = true) => {
  const ref = useRef();

  const handleFocusOut = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onFocusOutside(event);
      }
    },
    [onFocusOutside],
  );

  useEffect(() => {
    if (!active) return;

    const handleMouseDown = (event) => {
      handleFocusOut(event);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onFocusOutside(event);
      }
    };

    const handleFocusIn = (event) => {
      handleFocusOut(event);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("touchstart", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("focusin", handleFocusIn);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("touchstart", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, [active, handleFocusOut, onFocusOutside]);

  return ref;
};

export default useFocusOutside;
