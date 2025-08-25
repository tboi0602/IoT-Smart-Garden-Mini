import { useState } from "react";
import { Plus, Trash2, Wifi, WifiOff, Settings } from "lucide-react";
import DeviceCart from "../components/Card/DeviceCart";
import ModelAddDevice from "../components/models/ModelAddDevice";

const DevicePage = () => {
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

  const [showAddForm, setShowAddForm] = useState(false);
  const [newDevice, setNewDevice] = useState({
    name: "",
    code: "",
    location: "",
  });

  const addDevice = () => {
    if (!newDevice.name || !newDevice.code || !newDevice.location) return;
    const device = {
      id: Date.now().toString(),
      name: newDevice.name,
      code: newDevice.code,
      status: "online",
      location: newDevice.location,
      batteryLevel: Math.floor(Math.random() * 30) + 70,
    };
    setDevices([...devices, device]);
    setNewDevice({ name: "", code: "", location: "" });
    setShowAddForm(false);
  };

  const deleteDevice = (id) => {
    setDevices(devices.filter((d) => d.id !== id));
  };

  return (
    <div className="space-y-8 p-16 min-h-screen relative">
      <div className="min-h-screen absolute inset-0 bg-[linear-gradient(90deg,#87d560,#44e708,#42b5e8,#0382e9)] opacity-5 -z-10"></div>
      {/* Header */}
      <div className="flex justify-between items-center ">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Quản Lý Thiết Bị</h1>
          <p className="text-gray-600 mt-1">
            Quản lý các thiết bị IoT và cảm biến của bạn
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors duration-200"
        >
          <Plus className="h-5 w-5" />
          <span>Thêm Thiết Bị</span>
        </button>
      </div>

      {/* Add Device Form */}
      {showAddForm && (
        <ModelAddDevice
          newDevice={newDevice}
          setNewDevice={setNewDevice}
          addDevice={addDevice}
          setShowAddForm={setShowAddForm}
        />
      )}

      {/* Device List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {devices.map((device) => (
          <DeviceCart
            id={device.id}
            status={device.status}
            name={device.name}
            location={device.location}
            batteryLevel={device.batteryLevel}
            deleteDevice={() => deleteDevice(device.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default DevicePage;
