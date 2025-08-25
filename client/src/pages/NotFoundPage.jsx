import {
  Home,
  ArrowLeft,
  MapPin,
  Compass,
  Plane,
  Camera,
  Globe,
  Mountain,
  Palmtree,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl text-center">
          {/* Main 404 */}
          <div className="mb-12">
            <div className="relative mb-8">
              <h1 className="text-[8rem] md:text-[12rem] font-black text-transparent bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-500 bg-clip-text leading-none select-none">
                404
              </h1>
              {/* Floating travel icons */}

              <div className="absolute top-8 left-8 animate-float">
                <Palmtree className="w-8 h-8 text-emerald-400 opacity-60" />
              </div>
              <div className="absolute top-16 right-12 animate-float delay-300">
                <Mountain className="w-10 h-10 text-slate-400 opacity-60" />
              </div>
            </div>

            <div className="space-y-4 mb-12">
              <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
                Ôi! Bạn đang lạc lối
              </h2>
              <p className="text-xl text-slate-600 mb-2 leading-relaxed max-w-2xl mx-auto">
                Có vẻ như trang bạn đang tìm kiếm không còn tồn tại hoặc đã bị
                di chuyển.
              </p>
            
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => navigate("/home")}
              className="group bg-blue-green-button text-white font-semibold py-4 px-8 rounded-2xl hover:from-blue-700 hover:to-blue-400 transition-all duration-500 flex items-center"
            >
              <Home className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
              Trở về Trang chủ
            </button>

            <button
              onClick={() => navigate(-1)}
              className="group bg-white text-slate-700 font-semibold py-4 px-8 rounded-2xl border-2 border-slate-20 flex items-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2 transition-all group-hover:-translate-x-1" />
              Trở về
            </button>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              Mã lỗi: 404 • Đã mất nhưng không bị lãng quên •{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Liên hệ với chuyên gia du lịch của chúng tôi
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
