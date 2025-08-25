import { Mail, Phone, Github, Facebook } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start space-x-8">
          <div>
            <div className="flex items-center mb-4 w-72">
              <img src="./logo-with-text.png" alt="logo.png" />
            </div>
            <p className="text-gray-400">
              Ứng dụng việc cần làm trực quan nhất dành cho những người làm việc
              hiệu quả.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Thông tin liên hệ</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-5" />
                <a
                  href="mailto:tailatui46@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  tailatui46@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5" />
                <a
                  href="tel:0898672066"
                  className="text-blue-400 hover:underline"
                >
                  0898672066
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="w-5" />
                <a
                  href="https://www.facebook.com/profile.php?id=61577684572556"
                  className="text-blue-400 hover:underline"
                >
                  Huỳnh Tấn Tài
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-5" />
                <a
                  href="https://github.com/tboi0602"
                  className="text-blue-400 hover:underline"
                >
                  tboi062
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SmartGarden. Mọi quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
