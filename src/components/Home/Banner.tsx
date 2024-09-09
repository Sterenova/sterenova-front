import { FaInstagram, FaTiktok } from "react-icons/fa";
import { ButtonComponent } from "../Utils/ButtonComponent";

export function BannerComponent() {
  return (
    <div id="banner-slider" className="relative flex flex-col md:flex-row justify-center py-20 md:py-32 overflow-x-hidden overflow-y-hidden">
      {/* Background SVG - Masqué sur mobile */}
      <div className="absolute justify-center ml-96 mt-52 z-0 hidden lg:flex" style={{ height: '150px' }}>
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 left-2/3 transform -translate-x-1/2 bg-gradient-custom rounded-custom rotate-[-40deg]">
            <svg data-depth="0.05" id="banner-main-svg" viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg" className="w-[900px] h-[900px]">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(120)">
                  <stop offset="0%" style={{ stopColor: "rgb(98,37,181)", stopOpacity: 1 }} />
                  <stop offset="40%" style={{ stopColor: "rgb(128,33,181)", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row z-10 items-center md:items-start">

        {/* Social Media Links - Masqué sur mobile */}
        <div className="flex flex-col space-y-10 py-10 md:py-44 hidden md:flex mr-0 md:mr-24">
          <a href="https://www.tiktok.com/@sterenova_" className="text-black hover:text-gray-500" target="_blank" rel="noreferrer">
            <FaTiktok className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/sterenova_/?hl=fr" className="text-black hover:text-gray-500" target="_blank" rel="noreferrer">
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>

        {/* Description */}
        <div className="mt-10 md:mt-32 text-center md:text-left px-4 md:px-0">
          <h1 className="font-bold text-3xl md:text-5xl">STERENOVA</h1>
          <p className="py-6 md:py-10 text-black/70 max-w-full md:max-w-sm mr-0 md:mr-40">
            Bienvenue chez Sterenova !
            <br />
            Nous vous proposons d'équiper vos soirées pour qu'elles soient mémorables.
            <br />
            Éclairage pour toutes sortes d'ambiance et matériel sonore sont à votre portée.
            <br />
            N'hésitez pas à explorer notre site et découvrez notre large gamme de produits.
          </p>
          <ButtonComponent className="mt-4 w-full md:w-auto" href="#contact">Nous contacter</ButtonComponent>
        </div>

        {/* Image */}
        <div className="px-8 py-10 md:py-20 mr-0 md:mr-20 flex justify-center">
          <div className="max-w-xs md:max-w-md">
            <img src="img/sterenova/3mans.png" alt="plant" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
