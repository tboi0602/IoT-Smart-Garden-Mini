import SensorCard from "../components/HomePage/SensorCard";
import WeatherForecast from "../components/HomePage/WeatherForecast";
import { Bell, Clock, Cloud, Droplet, Thermometer, Wind } from "lucide-react";

const HomePage = () => {
  const sensorData = {
    // Data từ phần cứng
    soilMoisture: 68,
    temperature: 24,
    humidity: 72,
    airQuality: "Tốt",
  };
  const notifications = [
    {
      id: 1,
      type: "rain",
      message: "Dự báo mưa trong 2 giờ tới",
      time: "2 giờ trước",
      urgent: true,
    },
    {
      id: 2,
      type: "reminder",
      message: "Hoàn thành tưới theo lịch cho Luống Rau 1",
      time: "30 phút trước",
      urgent: false,
    },
    {
      id: 3,
      type: "warning",
      message: "Phát hiện độ ẩm đất thấp ở Luống Rau 3",
      time: "1 giờ trước",
      urgent: true,
    },
  ];
  return (
    <div className="space-y-8 p-16 px-40 min-h-screen relative">
      <div className="min-h-screen absolute inset-0 bg-[linear-gradient(90deg,#87d560,#44e708,#42b5e8,#0382e9)] opacity-5 -z-10"></div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 mt-16">
          Bảng Điều Khiển Vườn
        </h1>
        <p className="text-gray-600">
          Theo dõi tình trạng vườn của bạn theo thời gian thực
        </p>
      </div>

      {/* Sensor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-40 gap-6">
        <SensorCard
          title="Độ Ẩm Đất"
          value={`${sensorData.soilMoisture}%`}
          icon={<Droplet className="h-8 w-8" />}
          color="blue"
          status={
            sensorData.soilMoisture > 60
              ? "optimal"
              : sensorData.soilMoisture > 30
              ? "low"
              : "critical"
          }
        />
        <SensorCard
          title="Nhiệt Độ"
          value={`${sensorData.temperature}°C`}
          icon={<Thermometer className="h-8 w-8" />}
          color="orange"
          status="optimal"
        />
        <SensorCard
          title="Độ Ẩm Không Khí"
          value={`${sensorData.humidity}%`}
          icon={<Wind className="h-8 w-8" />}
          color="teal"
          status="optimal"
        />
      </div>

      {/* Weather Forecast and Water Level Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative">
          <WeatherForecast />
        </div>
        {/* Notifications */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <Bell className="h-6 w-6 mr-2 text-orange-500" />
            Thông Báo
          </h2>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border-l-4 ${
                  notification.urgent
                    ? "bg-red-50 border-red-400"
                    : "bg-blue-50 border-blue-400"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    {notification.type === "rain" && (
                      <Cloud className="h-5 w-5 text-blue-500 mt-0.5" />
                    )}
                    {notification.type === "reminder" && (
                      <Clock className="h-5 w-5 text-green-500 mt-0.5" />
                    )}
                    {notification.type === "warning" && (
                      <Bell className="h-5 w-5 text-red-500 mt-0.5" />
                    )}
                    <div>
                      <p
                        className={`text-sm font-medium ${
                          notification.urgent ? "text-red-800" : "text-blue-800"
                        }`}
                      >
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
