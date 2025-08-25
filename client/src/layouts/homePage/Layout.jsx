import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import CopyRight from "./CopyRight";
import { useEffect, useState } from "react";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <Navigation isScrolled={isScrolled} />
      <main>
        <Outlet />
      </main>
      <CopyRight />
    </div>
  );
};

export default Layout;
