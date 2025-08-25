import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Undo2, Mail, LockOpen } from "lucide-react";
import InputForm from "../components/inputs/InputForm";
import ModelForgotPassword from "../components/models/ModelForgotPassword";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [isClick, setIsClick] = useState(false);
  useEffect(() => {
    document.title = "SmartGarden | Đăng ký";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) return setError("Hãy nhập đầy đủ!");
    if (!email.includes("@")) return setError("Email Không đúng!");
    if (password !== confirmPassword) return setError("Mật khẩu không khớp!");
  };

  return (
    <>
      {!isClick && (
        <>
          <div className="flex flex-col justify-between items-center w-full p-5 ">
            <div className="flex items-center justify-between gap-2 mb-5 w-full px-40">
              <div className="cursor-pointer" onClick={() => navigate("/")}>
                <img
                  src="/logo-with-text.png"
                  alt="logo.png"
                  className="w-36 "
                />
              </div>
              <div
                className="text-white bg-blue-green p-2 rounded-md cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Đăng nhập
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
                <h1 className="text-3xl font-bold mb-8">Đăng ký</h1>

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
                  <InputForm
                    placeholder="Mật khẩu"
                    Icon={LockOpen}
                    type="password"
                    name="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <p className="text-sm text-red-600">{error}</p>

                  <button
                    type="submit"
                    className="bg-blue-green-button text-white font-bold text-lg py-2 rounded-xl hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Đăng ký
                  </button>
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
