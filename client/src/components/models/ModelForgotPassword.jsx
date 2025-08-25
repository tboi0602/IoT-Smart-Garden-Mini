import { useState } from "react";
import { Mail,Check, Lock, ArrowLeft } from "lucide-react";
import InputForm from "../inputs/InputForm";
const ModelForgotPassword = ({ setIsClick }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email.trim()) {
      setError("Email không được để trống");
      return;
    }
    if (!email.includes("@")) return setError("Email Không đúng!");
    setIsSubmit(true);
  };
  if (isSubmit) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-200">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              Kiểm tra email của bạn
            </h2>

            <p className="text-slate-600 mb-2 leading-relaxed">
              Kiểm tra email để kích hoạt đổi mật khẩu
            </p>
            <p className="text-slate-800 font-semibold mb-6">{email}</p>

            <p className="text-sm text-slate-500 mb-8 leading-relaxed">
              Bạn không nhận được email? Hãy kiểm tra thư mục thư rác hoặc liên
              hệ với bộ phận hỗ trợ nếu sự cố vẫn tiếp diễn.
            </p>
            <button
              className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => setIsClick(false)}
            >
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/*//!header*/}
      <div className="text-center m-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Quên mật khẩu?
          </h1>
          <p className="text-slate-600 leading-relaxed mb-12">
            Đừng lo lắng! Nhập địa chỉ email của bạn và chúng tôi sẽ gửi cho bạn
            hướng dẫn thiết lập lại.
          </p>
        </div>
      </div>

      {/*//!form*/}
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center"
      >
        <div className=" p-8 rounded-2xl shadow-xl flex flex-col gap-2 w-1/3 min-w-96">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Địa chỉ email</label>
            <InputForm
              placeholder="Nhập địa chỉ email của bạn"
              Icon={Mail}
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-sm text-red-600">{error}</p>
            <button
              type="submit"
              className="bg-green-600 font-semibold py-3 px-4 rounded-xl text-white mt-5 hover:bg-green-500 active:bg-green-400 transition-all"
            >
              Gửi mã xác thực
            </button>
            <div className="py-5 mt-5 border-t border-slate-200">
              <button
                className="w-full flex items-center justify-center gap-2 text-slate-600 hover:text-slate-800 font-medium group transition-all"
                onClick={() => setIsClick(false)}
              >
                <ArrowLeft className="w-4 group-hover:translate-x-[-6px] transition-all"/>
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default ModelForgotPassword;
