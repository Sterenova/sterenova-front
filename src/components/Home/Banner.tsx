import { FaInstagram, FaTiktok } from "react-icons/fa";
import { ButtonComponent } from "../Utils/ButtonComponent";
import { Background } from "../Utils/Background";

export function BannerComponent() {
  return (
    <div id="banner-slider" className="relative flex flex-col md:flex-row justify-center py-20 md:py-48 overflow-x-hidden overflow-y-hidden">
      <Background />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row z-10 items-center md:items-start">

        {/* Social Media Links - Masqué sur mobile */}
        <div className="flex-col space-y-10 py-10 md:py-56 md:flex mr-0 md:mr-24 hidden">
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
          <ButtonComponent className="mt-4 w-full md:w-auto" href="#contact-sec">Nous contacter</ButtonComponent>
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
