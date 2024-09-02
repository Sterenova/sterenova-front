import { FaInstagram, FaTiktok } from "react-icons/fa";

export function BannerComponent() {
    return (
     <div id="banner-slider" className="flex flex-row px-10 space-x-10">
        

        <div className="flex flex-col space-y-10 py-40">
          <a href="https://www.tiktok.com/@sterenova_" className="text-black hover:text-gray-500">
            <FaTiktok className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/sterenova_/?hl=fr" className="text-black hover:text-gray-500">
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>

        <div className="py-20 px-20">
            <h1 className="font-bold text-5xl">STERENOVA </h1>
            <p className="py-10 text-black/70">
                Bienvenue chez Sterenova !
                <br/>
                Nous vous proposons d'équiper vos soirées pour qu'elle soit mémorable.
                <br/>
                Eclairage pour toutes sortes d''ambiance et matériel sonores sont a votre portée.
                <br/>
                N'hésitez pas à explorez notre site et découvrez notre large gamme de
                <br/>
                produits.
            </p>
            <a className="rounded-3xl bg-red-600/90 py-3 px-6 shadow-sm text-white" href="#contact">
                Nous contacter
            </a>
        </div>

        <div className="">
            <div className="max-w-xl">
                <img src="img/sterenova/3mans.png" alt="plant" id="slider-inner-img"/>
            </div>
        </div>
        
        <div className="svg-div svg-anim">
            <svg data-depth="0.05" id="banner-main-svg" viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(120)">
                        <stop offset="0%" style={{ stopColor: "rgb(98,37,181)", stopOpacity: 1 }} />
                        <stop offset="40%" style={{ stopColor: "rgb(128,33,181)", stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <rect width="100" height="100" rx="8" fill="url(#grad1)" />
            </svg>
        </div>
        <div className="slider-icons">
            <ul className="slider-social banner-social">
                <li className="animated-wrap"><a className="animated-element" href="https://www.tiktok.com/@sterenova_"><i
                            className="fab fa-tiktok"></i> </a></li>
                <li className="animated-wrap"><a className="animated-element"
                        href="https://www.instagram.com/sterenova_/?hl=fr"><i className="lab la-instagram"></i> </a></li>
            </ul>
        </div>
    </div>
    )
}