import { ChevronDown, Home, Settings } from "lucide-react";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Profile from "../../components/HomePage/Profile";
const Navigation = ({ isScrolled }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setIsShowProfile] = useState(false);

  return (
    <div
      className={`${
        isScrolled
          ? "backdrop-blur-sm bg-white/80 transition-all duration-300 scale-110 rounded-lg  shadow-md"
          : ""
      } fixed top-0 right-0 left-0 z-50 flex justify-center items-center p-5 px-20  max-lg:p-4 `}
    >
      <div className="w-full flex justify-between gap-4 px-40">
        {/*Logo */}
        <div
          className="flex justify-center items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/logo-with-text.png" alt="logo.png" className="h-12 " />
        </div>
        {/* Button Login logout */}
        <div className="flex gap-4">
          <div className="flex gap-3 p-1 items-center justify-center max-lg:hidden border-[1px] border-black/10 rounded-xl shadow-sm  shadow-[#16c3f8]/20">
            <NavLink
              to={"."}
              end
              className={({ isActive }) =>
                `py-2 px-3 rounded-md  cursor-pointer transition-all flex gap-1 justify-center items-center
              ${
                isActive
                  ? "bg-green-100 text-green-700"
                  : "text-gray-600 hover:text-green-600 hover:bg-green-50"
              }`
              }
            >
              <Home /> <span>Trang chủ</span>
            </NavLink>

            <NavLink
              to={"./device"}
              className={({ isActive }) =>
                `py-2 px-3 rounded-md  cursor-pointer transition-all flex gap-1 justify-center items-center
              ${
                isActive
                  ? "bg-green-100 text-green-700"
                  : "text-gray-600 hover:text-green-600 hover:bg-green-50"
              }`
              }
            >
              <Settings /> <span>Thiết bị</span>
            </NavLink>
          </div>
        </div>
        <div
          className="relative flex items-center justify-center gap-1 max-lg:hidden p-1 border-[1px] border-black/10 rounded-lg 
          hadow-sm shadow-[#16c3f8]/20 hover:bg-green-100 cursor-pointer
          hover:text-green-600 transition-all "
          onClick={() => setIsShowProfile(!showProfile)}
        >
          Huỳnh Tấn Tài <ChevronDown className="w-5" />
          {showProfile && <Profile />}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
