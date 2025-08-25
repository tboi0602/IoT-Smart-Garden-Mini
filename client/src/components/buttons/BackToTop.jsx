import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const duration = 200;
    const start = window.scrollY;
    const startTime = performance.now();

    const scrollStep = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start * (1 - progress));
      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed z-50 bottom-5 right-5 p-5 rounded-full shadow-md bg-gradient-to-t from-green-600 to-blue-600  hover:from-green-700 hover:to-blue-700 text-white transition-all duration-200"
    >
      <ArrowUp className="w-6" />
    </button>
  );
};
export default BackToTop;
