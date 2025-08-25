import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, LockOpen } from "lucide-react";
import InputForm from "../components/inputs/InputForm";
import googleLogo from "../assets/svg/googleLogo.svg";
import facebookLogo from "../assets/svg/facebookLogo.svg";
import ModelForgotPassword from "../components/models/ModelForgotPassword";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isClick, setIsClick] = useState(false);
  useEffect(() => {
    document.title = "Đăng nhập";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return setError("Hãy nhập đầy đủ!");
    if (!email.includes("@")) return setError("Email Không đúng!");
  };

  return (
    <>
      {!isClick && (
        <>
          <div className="flex flex-col justify-between items-center w-full p-5 ">
            <div className="flex items-center justify-between gap-2 mb-5 w-full px-40">
              <div className="cursor-pointer" onClick={()=>navigate("/")}>
                <img src="/logo-with-text.png" alt="logo.png" className="w-36 " />
              </div>
              <div className="flex items-center gap-1 text-md border-2 border-black/20 rounded-md px-2 py-1">
                Đăng ký tài khoản | 
                <div className="text-white bg-blue-green p-2 rounded-md cursor-pointer" onClick={()=>navigate("/register")}>Đăng ký</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl w-full max-w-[866px] flex flex-col lg:flex-row overflow-hidden">
              <div className="hidden lg:block lg:w-1/2 z-10 h-[550px]">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/055/761/215/non_2x/individual-with-smart-garden-system-and-tech-overlay-symbolizing-tech-enhanced-gardening-in-double-exposure-with-copy-space-concept-as-an-individual-blended-with-a-smart-garden-sy-clean-vector.jpg"
                  alt="img_frame_login"
                  className="w-full h-full object-cover object-center p-2"
                />
              </div>
              <div className="w-full lg:w-1/2 p-6 sm:p-10 bg-white bg-opacity-90 backdrop-blur-sm ">
                {/* Social login */}
                <h1 className="text-3xl font-bold mb-8">Đăng nhập</h1>
                <div className="flex flex-col gap-2">
                  <button className="flex items-center justify-center  font-medium gap-2 border w-full py-3 rounded-xl bg-white hover:bg-gray-100 transition-all">
                    <img src={googleLogo} alt="Google" className="w-6" />
                    Đăng nhập bằng Google
                  </button>
                  <button className="flex items-center justify-center font-medium gap-2 border w-full py-3 rounded-xl bg-white hover:bg-gray-100 transition-all">
                    <img src={facebookLogo} alt="Facebook" className="w-6" />
                    Đăng nhập bằng Facebook
                  </button>
                </div>
                <div className="flex items-center my-4">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <span className="mx-4 text-sm text-gray-500">Hoặc</span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 mt-8"
                >
                  <InputForm
                    placeholder="Email"
                    Icon={Mail}
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputForm
                    placeholder="Mật khẩu"
                    Icon={LockOpen}
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="text-sm text-red-600">{error}</p>

                  <button
                    type="submit"
                    className="bg-blue-green-button text-white font-bold text-lg py-2 rounded-xl hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Đăng nhập
                  </button>
                  <p
                    className="text-sm text-left text-blue-600 underline hover:text-blue-800 cursor-pointer"
                    onClick={() => setIsClick(true)}
                  >
                    Quên mật khẩu?
                  </p>
                </form>
              </div>
            </div>
          </div>
        </>
      )}

      {/*//! Quên mật khẩu*/}
      {isClick && <ModelForgotPassword setIsClick={setIsClick} />}
    </>
  );
};

export default LoginPage;
