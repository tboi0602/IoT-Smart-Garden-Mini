import { KeyRound, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg w-48 z-50 ">
      <ul className="py-2">
        <li className="flex justify-center items-center gap-1 px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <h1>Đổi mật khẩu</h1>
          <KeyRound className="w-4" />
        </li>
        <li
          className="flex justify-center items-center gap-1 px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <h1>Đăng Xuất</h1>
          <LogOut className="w-4" />
        </li>
      </ul>
    </div>
  );
};

export default Profile;
