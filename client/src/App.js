import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import DevicePage from "./pages/DevicePage";
import Layout from "./layouts/homePage/Layout";
import ControlPage from "./pages/ControlPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="device" element={<DevicePage />} />
          <Route path="/home/device/:id" element={<ControlPage />} />
        </Route>

        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
