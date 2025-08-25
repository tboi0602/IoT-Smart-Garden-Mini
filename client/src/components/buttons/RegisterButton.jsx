import { useNavigate } from "react-router-dom";

const RegisterButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="p-2 px-3 font-medium rounded-md bg-blue-green-button text-white cursor-pointer "
        onClick={() => navigate("/register")}
      >
        Đăng ký
      </button>
    </>
  );
};

export default RegisterButton;
