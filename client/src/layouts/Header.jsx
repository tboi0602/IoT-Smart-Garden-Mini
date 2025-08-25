import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import LoginButton from "../components/buttons/LoginButton";
import RegisterButton from "../components/buttons/RegisterButton";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`${
        isScrolled
          ? "backdrop-blur-sm bg-white/80 transition-all duration-300 scale-100 rounded-lg  shadow-md"
          : ""
      } fixed top-0 right-0 left-0 z-50 flex justify-center items-center p-5 px-20  max-lg:p-4 `}
    >
      <div className="w-full flex justify-between gap-4 px-40">
        {/*Logo */}
        <div className="flex justify-center items-center gap-2 cursor-pointer" 
        onClick={() => navigate("/")}>
          <img src="/logo-with-text.png" alt="logo.png" className="h-12 " />
        </div>
        {/* Button Login logout */}
        <div className="flex gap-4">
          <div className="flex gap-3 p-1 items-center justify-center max-lg:hidden border-[1px] border-black/10 rounded-xl shadow-sm  shadow-[#16c3f8]/20">
            <a
              href="#features"
              className=" py-2 px-3 rounded-md hover:bg-black/5 transition-all"
            >
              Tính năng
            </a>

            <a
              href="#contact"
              className="p-2 px-3 rounded-md hover:bg-black/5 transition-all"
            >
              Liên hệ
            </a>
          </div>
          <div className="flex gap-1 max-lg:hidden p-1 border-[1px] border-black/10 rounded-xl shadow-sm shadow-[#16c3f8]/20">
            <LoginButton />
            <RegisterButton />
          </div>
        </div>
        {/**Mobie menu */}
        <div className="lg:hidden flex items-center">
          {isMenuOpen ? (
            <X
              className=" cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <Menu
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>
      </div>
      {/* Modal mở menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-3 w-1/3 bg-black/50 backdrop-blur-md  flex flex-col gap-4 items-center py-6 lg:hidden transition-all duration-300 z-50 rounded-2xl">
          <a href="#chat_ai" onClick={() => setIsMenuOpen(false)}>
            Trợ lý AI
          </a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>
            Dịch vụ
          </a>
          <a href="#destination" onClick={() => setIsMenuOpen(false)}>
            Gói du lịch
          </a>
          <a href="#review" onClick={() => setIsMenuOpen(false)}>
            Đánh giá
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Liên hệ
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
