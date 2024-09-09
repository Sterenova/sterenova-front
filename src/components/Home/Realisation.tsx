import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { Separator } from "../Utils/Separator";
import { HeadingSection } from "../Utils/HeadingSection";

export function RealisationComponent() {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }

    const slides = [
        {
            image: "img/sterenova/gala.png",
            type: "image",
            date: "Janvier 2024",
            description: "Nous avons eu le plaisir de participer au Gala Bal Masqué organisé par l’AESF qui s'est tenu au Salon des Miroirs à Paris. Notre équipe a eu le plaisir de mixer lors de cet événement et de mettre en place un éclairage adapté à l'ambiance de la soirée."
        },
        {
            image: "img/sterenova/soiree_paul.png",
            type: "image",
            date: "Février 2024",
            description: "Nous avons eu le plaisir de participer à la soirée Paul organisée par l’AESF qui s'est tenue au Salon des Miroirs à Paris. Notre équipe a eu le plaisir de mixer lors de cet événement et de mettre en place un éclairage adapté à l'ambiance de la soirée."
        },
        {
            image: "public/img/sterenova/tanguy.png",
            type: "image",
            date: "Février 2024",
            description: "Nous avons eu le plaisir de participer à la soirée Tanguy organisée par l’AESF qui s'est tenue au Salon des Miroirs à Paris. Notre équipe a eu le plaisir de mixer lors de cet événement et de mettre en place un éclairage adapté à l'ambiance de la soirée."
        }
    ];

    return (
        <div id="portfolio-sec" className="flex flex-col justify-center items-center space-y-10 mb-40 overflow-y-hidden overflow-x-hidden">
            <Separator />

            <HeadingSection
                title="NOS DERNIERS EVENEMENTS"
                titlePrimary="& PROJECTS"
                description="Découvrez nos dernières réalisations et projets, et laissez-vous inspirer par nos créations uniques et originales. Nous mettons tout en oeuvre pour vous offrir une expérience inoubliable, à la hauteur de vos attentes."
            />

            {/* Responsive Carousel */}
            <div className="relative flex items-center justify-center w-full max-w-screen-lg px-4">
                <button onClick={handlePrev} className="transition-all hover:scale-105 mr-4 p-2 text-2xl text-white bg-gradient-to-r from-[rgba(98,37,181,0.8)] to-[rgba(128,33,181,0.8)] rounded-full">
                    <FaArrowLeft />
                </button>

                <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-4 md:space-y-0 md:space-x-4">
                    {/* Image or Video */}
                    <div className="w-full md:w-1/2 p-4">
                        {slides[activeIndex].type === "video" ? (
                            <video
                                src={slides[activeIndex].image}
                                autoPlay
                                loop
                                muted
                                className="w-full h-auto object-cover rounded-lg shadow-md"
                            ></video>
                        ) : (
                            <img
                                src={slides[activeIndex].image}
                                alt="Event"
                                className="w-full h-auto object-cover rounded-lg shadow-md"
                            />
                        )}
                    </div>

                    {/* Description */}
                    <div className="w-full md:w-1/2 p-4">
                        <h4 className="text-2xl font-bold text-red-600">{slides[activeIndex].date}</h4>
                        <p className="mt-2 text-gray-600">{slides[activeIndex].description}</p>
                    </div>
                </div>

                <button onClick={handleNext} className="transition-all hover:scale-105 ml-4 p-2 text-2xl text-white bg-gradient-to-r from-[rgba(98,37,181,0.8)] to-[rgba(128,33,181,0.8)] rounded-full">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}
