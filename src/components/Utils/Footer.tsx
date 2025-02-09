import { FaTiktok, FaInstagram, FaArrowUp } from 'react-icons/fa';

export function FooterComponent() {
  return (
    <footer className="bg-gray-900 text-white py-6 relative pb-6 overflow-x-hidden">
      <div className="container mx-auto flex justify-between items-center">

        {/* Social Icons */}
        <div className="flex space-x-12 px-80">
          <a href="https://www.tiktok.com/@sterenova_" className="text-white hover:text-gray-500" target="_blank">
            <FaTiktok className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/sterenova_/?hl=fr" className="text-white hover:text-gray-500" target="_blank">
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-white text-sm px-80">
          &copy; 2024 Sterenova
        </div>

        {/* Back to Top Button */}
        <a href="#top" className="transition-all hover:scale-105 bg-gradient-to-r from-[rgba(98,37,181,0.8)] to-[rgba(128,33,181,0.8)] hover:bg-red-700 text-white p-3 rounded-full fixed bottom-4 right-4">
          <FaArrowUp className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}
