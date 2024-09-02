import { useState, useEffect } from "react";

export function NavBarComponent() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <nav className={`${scrolled ? "bg-purple-600" : "bg-transparent"} fixed top-0 left-0 w-full p-4`}>
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#" className="text-3xl font-bold text-white">
                    <img src="public/img/sterenova/logo_25.png"></img>
                </a>

                {/* <!-- Menu pour écran large --> */}
                <nav className="hidden md:flex space-x-8">
                    <a href="#" className="text-white hover:text-white hover:ring-4 transition">Accueil</a>
                    <a href="#portfolio-sec" className="text-white hover:ring-4 transition">Réalisations</a>
                    <a href="#gallery-sec" className="text-white hover:ring-4 transition">La Galerie</a>
                    <a href="#pricing-sec" className="text-white hover:ring-4 transition">Nos Packs</a>
                    <a href="#contact-sec" className="text-white hover:ring-4 transition">Nous Contacter</a>
                </nav>

                {/* <!-- Bouton de menu pour mobile --> */}
                <div className="">
                    <button id="mobile-menu-button" className="text-white hover:ring-4 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* <!-- Menu pour mobile (initialement caché) --> */}
            <div id="mobile-menu" className="hidden md:hidden">
                <nav className="px-2 pt-2 pb-4 space-y-1">
                    <a href="#" className="block text-gray-700 hover:text-purple-600 transition">Accueil</a>
                    <a href="#portfolio-sec" className="block text-gray-700 hover:text-purple-600 transition">Réalisations</a>
                    <a href="#gallery-sec" className="block text-gray-700 hover:text-purple-600 transition">La Galerie</a>
                    <a href="#pricing-sec" className="block text-gray-700 hover:text-purple-600 transition">Nos Packs</a>
                    <a href="#contact-sec" className="block text-gray-700 hover:text-purple-600 transition">Nous Contacter</a>
                </nav>
            </div>
    </nav>
    )
}
