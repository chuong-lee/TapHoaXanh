// BackToTopButton.tsx
import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return show ? (
    <button className="back-to-top" onClick={handleClick}>
      <i className="fas fa-arrow-to-top"></i>
    </button>
  ) : null;
};

export default BackToTopButton;
