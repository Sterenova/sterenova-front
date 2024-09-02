import { useState, useEffect } from "react";

export function NavBarComponent() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${scrolled ? "bg-gradient-to-r from-[rgba(98,37,181,0.8)] to-[rgba(128,33,181,0.8)]" : "bg-transparent"} w-full fixed z-30 overflow-x-hidden`}>
        {/* Navbar Content */}
        <div className="flex justify-between items-center relative z-20 px-4 py-4 max-h-36">
            {/* Navbar title/logo */}
            <a href="#" className="">
                <img src="public/img/sterenova/logo_25.png" alt="Logo"/>
            </a>

            {/* Menu for larger screens */}
            <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-white hover:text-white hover:ring-4 transition">Accueil</a>
                <a href="#portfolio-sec" className="text-white hover:ring-4 transition">Réalisations</a>
                <a href="#gallery-sec" className="text-white hover:ring-4 transition">La Galerie</a>
                <a href="#pricing-sec" className="text-white hover:ring-4 transition">Nos Packs</a>
                <a href="#contact-sec" className="text-white hover:ring-4 transition">Nous Contacter</a>
            </nav>
        </div>
    </nav>
  );
}
