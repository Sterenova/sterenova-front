import { useState, useEffect } from "react";

export function NavBarComponent() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 190);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${scrolled ? "bg-gradient-to-r from-[rgba(98,37,181,0.8)] to-[rgba(128,33,181,0.8)]" : "bg-transparent"}
                        w-full fixed z-30 overflow-x-hidden overflow-y-hidden`}>
      <div className="flex justify-center items-center relative z-20 px-4 py-4 max-h-36 w-full">
        <div className="flex items-center justify-between w-full max-w-screen-xl px-4">
          <a className="flex">
            <img src="/img/sterenova/logo_25.png" alt="Logo" />
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:ring-4 transition">Accueil</a>
            <a href="#portfolio-sec" className="text-white hover:ring-4 transition">Réalisations</a>
            <a href="#gallery-sec" className="text-white hover:ring-4 transition">La Galerie</a>
            <a href="#pricing-sec" className="text-white hover:ring-4 transition">Nos Packs</a>
            <a href="#contact-sec" className="text-white hover:ring-4 transition">Nous Contacter</a>
          </nav>
        </div>
      </div>
    </nav>
  );
}
