import { useState } from "react";
import { Play, Pause, Clock, Settings, Droplets, CircleChevronLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const ControlPage = () => {
  const navigate = useNavigate();
  const [isAutoMode, setIsAutoMode] = useState(true);
  const [wateringActive, setWateringActive] = useState(false);
  const [schedules, setSchedules] = useState([
    { id: 1, time: "06:00", duration: 15, enabled: true, zone: "Luống Rau 1" },
    { id: 2, time: "18:00", duration: 10, enabled: true, zone: "Luống Rau 2" },
  ]);
  const [devices, setDevices] = useState([
    {
      id: "1",
      name: "Cảm Biến Đất A1",
      code: "ABC123",
      status: "online",
      location: "Luống Rau 1",
      batteryLevel: 85,
    },
    {
      id: "2",
      name: "Trạm Thời Tiết",
      code: "XYZ456",
      status: "online",
      location: "Sân Thượng",
      batteryLevel: 92,
    },
    {
      id: "3",
      name: "Bộ Điều Khiển Máy Bơm",
      code: "PUMP789",
      status: "offline",
      location: "Nhà Kho Vườn",
      batteryLevel: 45,
    },
  ]);
  const { id } = useParams();
  const name = devices.find((device) => device.id === id)?.name || "Thiết Bị";
  const startWatering = () => {
    setWateringActive(true);
    setTimeout(() => setWateringActive(false), 5000);
  };

  const stopWatering = () => {
    setWateringActive(false);
  };

  return (
    <div className="space-y-8 p-16 px-96 min-h-screen relative">
      <div className="min-h-screen absolute inset-0 bg-[linear-gradient(90deg,#87d560,#44e708,#42b5e8,#0382e9)] opacity-5 -z-10"></div>
      <div>
        <h1 className="flex gap-2 text-3xl font-bold text-gray-800">
          <CircleChevronLeft className="w-7 h-7 cursor-pointer text-green-600 hover:text-green-800 transition-all" onClick={()=>navigate(-1)} />
          Thiết Bị: <p className="text-green-600">{name}</p>
        </h1>
        <p className="text-gray-600 mt-1">
          Điều khiển hệ thống tưới và quản lý lịch trình
        </p>
      </div>

      {/* Control Panel */}
      <div className="grid grid-cols-1 px-16 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <Droplets className="h-6 w-6 mr-2 text-blue-500" />
            Điều Khiển Tưới
          </h2>

          <div className="space-y-6">
            {/* Auto Mode Toggle */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-800">Chế Độ Tự Động</h3>
                <p className="text-sm text-gray-600">
                  Để hệ thống tưới dựa trên độ ẩm đất
                </p>
              </div>
              <button
                onClick={() => setIsAutoMode(!isAutoMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                  isAutoMode ? "bg-green-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    isAutoMode ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Manual Control */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-800">Điều Khiển Thủ Công</h3>
              <div className="flex space-x-3">
                <button
                  onClick={startWatering}
                  disabled={wateringActive || isAutoMode}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-colors duration-200 ${
                    wateringActive || isAutoMode
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  <Play className="h-5 w-5" />
                  <span>Bắt Đầu Tưới</span>
                </button>
                <button
                  onClick={stopWatering}
                  disabled={!wateringActive}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-colors duration-200 ${
                    !wateringActive
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700 text-white"
                  }`}
                >
                  <Pause className="h-5 w-5" />
                  <span>Dừng Tưới</span>
                </button>
              </div>

              {wateringActive && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-blue-700">
                    <Droplets className="h-5 w-5 animate-pulse" />
                    <span className="font-medium">Đang tưới...</span>
                  </div>
                  <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full animate-pulse"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Watering Schedule */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <Clock className="h-6 w-6 mr-2 text-green-500" />
            Lịch Tưới
          </h2>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200">
            <Settings className="h-4 w-4" />
            <span>Thêm Lịch</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {schedules.map((schedule) => (
            <div
              key={schedule.id}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium text-gray-800">{schedule.zone}</h3>
                  <p className="text-sm text-gray-600">
                    Hàng ngày lúc {schedule.time}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSchedules(
                      schedules.map((s) =>
                        s.id === schedule.id ? { ...s, enabled: !s.enabled } : s
                      )
                    );
                  }}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                    schedule.enabled ? "bg-green-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      schedule.enabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <div className="text-sm text-gray-600">
                Thời gian: {schedule.duration} phút
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ControlPage;
