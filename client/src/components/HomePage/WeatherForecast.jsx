import React, { useState } from "react";
import { Cloud, CloudRain, CloudRainWind, Sun } from "lucide-react";
import { get7DayWeatherByCity } from "../../services/weatherAPI";

const WeatherForecast = () => {
  const [city, setCity] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [weatherDataHour, setWeatherDataHour] = useState([]);
  const [loading, setLoading] = useState(false);

  const icons = {
    Nắng: Sun,
    "Mưa nhiều": CloudRainWind,
    "Mưa phùn": CloudRain,
    "Nhiều mây": Cloud,
  };

  const handleAdd = async (e) => {
    if (!inputCity) return setError("Vui lòng nhập địa điểm!");
    setCity("");
    setError("");
    setLoading(true);
    try {
      const data = await get7DayWeatherByCity(inputCity);
      const mapDataDaily = data.dailyConditions.map((item) => ({
        ...item,
        icon: icons[item.status] || Sun,
      }));
      setWeatherDataHour(data.hourlyConditions);
      console.log("Dữ liệu giờ:", data.hourlyConditions);
      setWeatherData(mapDataDaily);
      setCity(inputCity);
      setInputCity("");
    } catch (error) {
      console.error("Địa điểm không tồn tại", error);
      setError("Địa điểm không tồn tại");
      setWeatherData([]);
    } finally {
      setLoading(false);
    }
  };

  // Lấy giờ hiện tại
  const now = new Date();
  // Lọc các giờ hôm nay có khả năng mưa > 50%
  const rainHoursToday = weatherDataHour
    .filter((hour) => {
      const hourDate = new Date(hour.time);
      return (
        hourDate.getDate() === now.getDate() &&
        hourDate.getMonth() === now.getMonth() &&
        hourDate.getFullYear() === now.getFullYear() &&
        hour.precipitationProbability > 50 &&
        hourDate > now // Chỉ giờ tương lai
      );
    })
    .map((hour) => new Date(hour.time).getHours()); // chỉ lấy giờ

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 relative">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Dự Báo Thời Tiết 7 Ngày Tới
      </h2>

      {city && <h3 className="text-4xl font-bold py-2">{city}</h3>}

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="loader"></div>
        </div>
      ) : weatherData.length > 0 ? (
        <div className="space-y-4">
          {weatherData.map((day, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <day.icon
                    className={`h-6 w-6 ${
                      day.status === "Nắng"
                        ? "text-yellow-500"
                        : day.status === "Mưa phùn" ||
                          day.status === "Mưa nhiều"
                        ? "text-blue-500"
                        : "text-gray-500"
                    }`}
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{day.day}</p>
                  <p className="text-sm text-gray-600">{day.status}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-right">
                <div>
                  <p className="font-semibold text-gray-800">
                    {" "}
                    {day.minTemp} - {day.maxTemp}
                  </p>
                  <p className="text-sm text-blue-600">
                    {day.precipitationProbability}%
                  </p>
                </div>
              </div>
            </div>
          ))}

          {rainHoursToday.length > 0 && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <CloudRain className="h-5 w-5 text-blue-600" />
                <span className="text-blue-800 font-medium">
                  Cảnh Báo Mưa Hôm Nay
                </span>
              </div>
              <p className="text-blue-700 text-sm">
                Hôm nay dự báo có mưa vào lúc: {rainHoursToday.join(" giờ, ")} giờ. <br />
                Hệ thống tưới tự động sẽ tạm dừng.
              </p>
            </div>
          )}
        </div>
      ) : (
        <p className="text-gray-500 text-sm mt-4">
          Không có dữ liệu dự báo thời tiết, vui lòng nhập địa điểm.
        </p>
      )}

      {/* Input */}
      <div className="flex flex-col absolute top-4 right-4 w-1/2">
        <div className="flex gap-2 w-full">
          <input
            type="text"
            placeholder="Nhập địa điểm"
            className="p-2 w-full rounded-lg outline-none border 
        hover:bg-blue-100 hover:text-blue-700 hover:placeholder:text-blue-700 
        focus:bg-blue-100 focus:text-blue-700 focus:border-blue-600 focus:placeholder:text-blue-700"
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAdd();
              }
            }}
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-500 text-white p-2 rounded-lg"
          >
            Thêm
          </button>
        </div>
        {error && <p className="text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default WeatherForecast;
