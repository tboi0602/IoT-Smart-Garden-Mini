import { useState } from "react";

const ModelAddDevice = ({newDevice,setNewDevice,addDevice,setShowAddForm}) => {
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4">Thêm Thiết Bị Mới</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tên Thiết Bị
          </label>
          <input
            type="text"
            value={newDevice.name}
            onChange={(e) =>
              setNewDevice({ ...newDevice, name: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="VD: Cảm Biến Đất B1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mã Thiết bị
          </label>
          <input
            type="text"
            value={newDevice.code}
            onChange={(e) =>
              setNewDevice({ ...newDevice, code: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="VD: 02D1895Gh"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Vị Trí
          </label>
          <input
            type="text"
            value={newDevice.location}
            onChange={(e) =>
              setNewDevice({ ...newDevice, location: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="VD: Luống Rau 2"
          />
        </div>
      </div>
      <div className="flex space-x-3">
        <button
          onClick={addDevice}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          Thêm Thiết Bị
        </button>
        <button
          onClick={() => setShowAddForm(false)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md transition-colors duration-200"
        >
          Hủy
        </button>
      </div>
    </div>
  );
};

export default ModelAddDevice;
