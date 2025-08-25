import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="text-black  p-2 rounded-md hover:bg-black/5 transition-all"
        onClick={() => navigate("/login")}
      >
        Đăng nhập
      </button>
    </>
  );
};

export default LoginButton;