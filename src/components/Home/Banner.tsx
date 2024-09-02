import { FaInstagram, FaTiktok } from "react-icons/fa";

export function BannerComponent() {
  return (
    <div id="banner-slider" className="relative flex flex-row px-10 space-x-10 py-40">
        {/* Background SVG */}
        <div className="absolute inset-x-0 top-96" style={{ height: '150px' }}>
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
      <div className="flex flex-row w-full">
        
        {/* Social Media Links */}
        <div className="flex flex-col space-y-10 py-40">
          <a href="https://www.tiktok.com/@sterenova_" className="text-black hover:text-gray-500">
            <FaTiktok className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/sterenova_/?hl=fr" className="text-black hover:text-gray-500">
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>

        {/* Description */}
        <div className="py-20 px-20 flex-1">
          <h1 className="font-bold text-5xl">STERENOVA</h1>
          <p className="py-10 text-black/70">
            Bienvenue chez Sterenova !
            <br />
            Nous vous proposons d'équiper vos soirées pour qu'elles soient mémorables.
            <br />
            Éclairage pour toutes sortes d'ambiance et matériel sonore sont à votre portée.
            <br />
            N'hésitez pas à explorer notre site et découvrez notre large gamme de
            <br />
            produits.
          </p>
          <a className="rounded-3xl bg-red-600/90 py-3 px-6 shadow-sm text-white" href="#contact">
            Nous contacter
          </a>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <div className="max-w-xl">
            <img src="img/sterenova/3mans.png" alt="plant" />
          </div>
        </div>
      </div>
    </div>
  );
}
