import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className=" p-24 flex justify-center min-h-screen bg-gradient-to-b from-white to-[green]/10 ">
      <div className="px-80 py-6 flex flex-col items-center relative">
        <div className="bg-[linear-gradient(90deg,#45863e,#42b5e8,#045395)] py-14 w-3/6 blur-2xl opacity-15 absolute top-0"></div>
        <h1 className="text-7xl font-bold bg-[linear-gradient(90deg,#b4d560,#42b5e8,#045395)] bg-clip-text text-transparent">
          Quản Lý Cây Trồng
        </h1>
        <p className="text-2xl mt-4 text-black/60 text-center">
          Ứng dụng quản lý cây trồng trực quan nhất giúp bạn duy trì năng suất,
          tiện lợi và tăng năng suất lao động lên gấp bội lần.
        </p>
        <div className="flex gap-4 mt-8">
          <button
            className="group flex gap-1 p-2 px-4 text-lg font-light border-2 
            border-white rounded-xl bg-blue-green text-white cursor-pointer 
            hover:translate-y-[-4px] hover:shadow-blue-green transition-all "
            onClick={() => navigate("/register")}
          >
            <span>Đăng ký ngay</span>
            <ArrowRight className="w-4 group-hover:translate-x-1 group-hover:scale-110 transition-all" />
          </button>
        </div>
        <div className="mt-16 p-1 rounded-xl bg-[linear-gradient(90deg,#b4d560,#42b5e8,#045395)] text-white w-3/4">
          <div className="flex justify-evenly  rounded-lg bg-white p-4 py-6 gap-2 ">
            <div className="flex flex-col items-center w-full">
              <h1 className="text-black">Nhiệm vụ hôm nay</h1>
              <div className="flex flex-col gap-2 mt-4 w-full ">
                {[
                  {
                    title: "Tưới nước khu vườn rau",
                    completed: true,
                  },
                  {
                    title: "Tưới nước khu vườn hoa",
                    completed: true,
                  },
                  {
                    title: "Tưới nước khu vườn cây ăn quả",
                    completed: false,
                  },
                  {
                    title: "Tưới nước khu vườn cây cảnh",
                    completed: false,
                  },
                ].map((task, index) => (
                  <p
                    key={index}
                    className={`${
                      task.completed ? "line-through text-black/50 " : ""
                    } " text-black/70 p-2 bg-gray-50 rounded-md text-[13px] "`}
                  >
                    {" "}
                    {task.title}{" "}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center  w-full">
              <h1 className="text-black">Thông báo sắp tới</h1>
              <div className="flex flex-col  gap-2 mt-4 w-full">
                {[
                  {
                    title: "Mưa phùn nhẹ",
                    date: "2 tiếng nữa, 13 giờ ngày 09/08/2025",
                  },
                  {
                    title: "Có mưa lớn",
                    date: "Ngày mai, 10 giờ ngày 08/08/2025",
                  },
                ].map((task, index) => (
                  <div
                    className="w-full bg-green-300 pl-1 rounded-lg"
                    key={index}
                  >
                    <p
                      key={index}
                      className="text-center font-medium text-black/70 p-3 bg-gradient-to-r from-blue-100 to-green-100 rounded-md text-[13px] w-full"
                    >
                      {task.title}{" "}
                      <p className="font-thin text-black/50">{task.date}</p>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
