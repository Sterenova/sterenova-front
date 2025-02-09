import { useState, useEffect } from "react";
import { Link } from "../../types/LinkInterface";


interface NavBarProps {
  links?: Link[];
  isAlreadyScrolled?: boolean;
  scrolledValue?: number;
}

const defaultLinks: Link[] = [
  { title: "Accueil", href: "/" },
  { title: "Réalisations", href: "#portfolio-sec" },
  { title: "La Galerie", href: "#gallery-sec" },
  { title: "Nos Packs", href: "#pricing-sec" },
  { title: "Nous Contacter", href: "#contact-sec" },
];

export function NavBarComponent({ links = defaultLinks, isAlreadyScrolled = false, scrolledValue = 190 }: NavBarProps) {
  const [scrolled, setScrolled] = useState(isAlreadyScrolled);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= scrolledValue);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${scrolled ? "bg-gradient-to-r from-[rgba(98,37,181,0.8)] to-[rgba(128,33,181,0.8)]" : "bg-transparent"} w-full fixed z-30 overflow-x-hidden overflow-y-hidden`}>
      <div className="flex justify-center items-center relative z-20 px-4 py-4 max-h-36 w-full">
        <div className="md:flex md:items-center md:justify-between md:w-full md:max-w-screen-xl md:px-4">
          <a className="flex" href="/">
            <img src="/img/sterenova/logo_25.png" alt="Logo" />
          </a>
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
                <a 
                key={link.title} 
                href={link.href} 
                className="relative text-white font-semibold transition-all duration-300 hover:after:content-['v'] hover:after:absolute hover:after:-top-4 hover:after:left-1/2 hover:after:transform hover:after:-translate-x-1/2 "
                >
                {link.title}
                </a>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
}
