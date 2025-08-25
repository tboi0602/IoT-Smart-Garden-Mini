import {
  CircleChevronRight,
  Settings,
  Trash2,
  Wifi,
  WifiOff,
} from "lucide-react";
import { Link } from "react-router-dom";

const DeviceCart = ({
  id,
  status,
  name,
  location,
  batteryLevel,
  deleteDevice,
}) => {
  return (
    <div
      key={id}
      className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          {status === "online" ? (
            <Wifi className="h-5 w-5 text-green-500" />
          ) : (
            <WifiOff className="h-5 w-5 text-red-500" />
          )}
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        </div>
        <div className="flex space-x-2">
          <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <Settings className="h-4 w-4" />
          </button>
          <button
            onClick={deleteDevice}
            className="text-red-400 hover:text-red-600 transition-colors duration-200"
          >
            <Trash2 className="h-4 w-4" />
          </button>
          <Link
            to={`/home/device/${id}`}
            className="flex justify-center items-center gap-1"
          >
            <CircleChevronRight className="w-5 text-green-600 hover:text-green-800 transition-all " />
          </Link>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Vị trí:</span>
          <span className="text-sm font-medium">{location}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Trạng thái:</span>
          <span
            className={`text-sm font-medium ${
              status === "online" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status === "online" ? "Trực tuyến" : "Ngoại tuyến"}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Pin:</span>
          <span
            className={`text-sm font-medium ${
              batteryLevel > 50 ? "text-green-600" : "text-orange-600"
            }`}
          >
            {batteryLevel}%
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              batteryLevel > 50 ? "bg-green-500" : "bg-orange-500"
            }`}
            style={{ width: `${batteryLevel}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DeviceCart;
