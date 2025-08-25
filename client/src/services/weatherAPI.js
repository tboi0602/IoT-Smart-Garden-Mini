export const getCityCoordinates = async (city) => {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    city
  )}&count=1&language=vi&format=json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Lấy tọa độ thành phố thất bại");
  return res.json();
};
export const get7DayWeatherByCity = async (city) => {
  // 1. Lấy tọa độ
  const coordinates = await getCityCoordinates(city);
  const { latitude, longitude } = coordinates.results[0];

  // 2. Lấy cả daily và hourly
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max&hourly=temperature_2m,precipitation,precipitation_probability&timezone=auto`;
  
  const res = await fetch(url);
  if (!res.ok) throw new Error("Lấy dữ liệu thời tiết thất bại");
  const data = await res.json();

  // 3. Xử lý daily
  const dailyConditions = data.daily.time.map((time, index) => ({
    status:
      data.daily.precipitation_sum[index] > 0.5
        ? data.daily.precipitation_probability_max[index] > 50
          ? "Mưa nhiều"
          : "Mưa phùn"
        : data.daily.precipitation_sum[index] === 0 &&
          data.daily.temperature_2m_max[index] < 25
        ? "Nhiều mây"
        : "Nắng",
    day: index === 0 ? "Hôm nay" : new Date(time).toLocaleDateString("vi-VN", { weekday: "long" }),
    maxTemp: Math.ceil(data.daily.temperature_2m_max[index]),
    minTemp: Math.ceil(data.daily.temperature_2m_min[index]),
    precipitation: data.daily.precipitation_sum[index],
    precipitationProbability: data.daily.precipitation_probability_max[index],
  }));

  // 4. Xử lý hourly (lấy mỗi 2 tiếng)
  const hourlyConditions = data.hourly.time
    .map((time, index) => ({
      time,
      precipitationProbability: data.hourly.precipitation_probability[index],
    }))
  return { dailyConditions, hourlyConditions };
};
