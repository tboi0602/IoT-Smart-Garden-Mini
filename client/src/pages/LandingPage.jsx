import Header from "../layouts/Header";
import Hero from "../components/LandingPage/Hero";
import Features from "../components/LandingPage/Features";
import { ArrowRight } from "lucide-react";
import Footer from "../layouts/Footer";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <div className="bg-blue-green text-center py-16 px-40 text-white flex flex-col items-center justify-center">
        <h1 className="text-5xl font-medium">Sẵn sàng để sắp xếp công việc?</h1>
        <p className="text-lg mt-4">
          Hãy tham gia cùng hàng ngàn người làm việc hiệu quả tin tưởng SmartGarden
          để quản lý công việc hàng ngày của họ
        </p>

        <button
          className=" group text-blue-700 flex gap-1 mt-8 bg-white text-blue-green px-6 py-3 rounded-xl text-lg font-semibold hover:translate-y-[-4px] transition "
          onClick={() => navigate("/register")}
        >
          <span>Bắt đầu dùng thử ngay hôm nay</span>
          <ArrowRight className="w-5 group-hover:translate-x-1 group-hover:scale-110 transition-all" />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
