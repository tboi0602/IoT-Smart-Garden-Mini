import { Clock, Cloudy, Cpu, Zap } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 " />,
      title: "Tiết kiêm thời gian",
      description:
        "Tạo và quản lý công việc một cách nhanh chóng và hiệu quả",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Điều khiển từ xa",
      description:
        "Quản lý công việc của bạn từ bất kỳ đâu với ứng dụng di động thân thiện",
    },
    {
      icon: <Cloudy  className="w-8 h-8" />,
      title: "Dự đoán thời tiết",
      description:
        "Dự đoán thời tiết chính xác để lên kế hoạch công việc hiệu quả",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Nhắc nhở thông minh",
      description:
        "Không bao giờ bỏ lỡ thời hạn với hệ thống thông báo thông minh",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-r from-[#3bc6f0]/5 to-[#3bc6f0]/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tính năng mạnh mẽ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mọi thứ bạn cần để duy trì sự ngăn nắp và hiệu quả
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-duration="1500"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
