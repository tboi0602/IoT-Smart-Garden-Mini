
import PropTypes from "prop-types";

const SensorCard = ({ title, value, icon, color, status }) => {
  const getColorClasses = (color) => {
    const colors = {
      blue: "text-blue-600 bg-blue-100",
      orange: "text-orange-600 bg-orange-100",
      teal: "text-teal-600 bg-teal-100",
      green: "text-green-600 bg-green-100",
    };
    return colors[color] || colors.blue;
  };

  const getStatusColor = (status) => {
    const statusColors = {
      optimal: "text-green-600",
      low: "text-yellow-600",
      critical: "text-red-600",
    };
    return statusColors[status] || statusColors.optimal;
  };

  const getStatusText = (status) => {
    const statusTexts = {
      optimal: "Tối Ưu",
      low: "Thấp",
      critical: "Nguy Hiểm",
    };
    return  statusTexts[status] || statusTexts.optimal;
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${getColorClasses(color)}`}>{icon}</div>
        <div
          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
            status
          )} bg-opacity-20 ${
            status === "optimal"
              ? "bg-green-100"
              : status === "low"
              ? "bg-yellow-100"
              : "bg-red-100"
          }`}
        >
          {getStatusText(status)}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

SensorCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["optimal", "low", "critical"]).isRequired,
};

export default SensorCard;
