import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

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
    ]



    return (
        <div id="portfolio-sec" className="flex flex-col justify-center space-y-10 overflow-y-hidden overflow-x-hidden">
            <div className="flex justify-center items-center relative">
                <div className="flex items-center justify-between w-full max-w-screen-lg px-4">
                    <div className="max-w-sm">
                        <h4 className="text-red-600/90 font-bold text-5xl">NOS DERNIERS EVENEMENTS <span>& <span
                            className="color">PROJECTS</span></span></h4>
                    </div>
                    <p className="max-w-sm">
                        Découvrez nos dernières réalisations et projets, et laissez-vous inspirer par nos créations
                        uniques et originales.
                        <br />
                        Nous mettons tout en oeuvre pour vous offrir une expérience inoubliable, à la hauteur de vos
                        attentes.
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-center w-full max-w-screen-lg px-4">
                <button onClick={handlePrev} className="absolute left-0 z-10 p-2 text-2xl text-gray-500 hover:text-gray-700">
                    <FaArrowLeft className=""></FaArrowLeft>
                </button>

                <div className="flex items-center justify-center w-full">
                    <div className="w-1/2 p-4">
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

                    <div className="w-1/2 p-4">
                        <h4 className="text-2xl font-bold text-red-600">{slides[activeIndex].date}</h4>
                        <p className="mt-2 text-gray-600">{slides[activeIndex].description}</p>
                    </div>
                </div>

                <button onClick={handleNext} className="absolute right-0 z-10 p-2 text-2xl text-gray-500 hover:text-gray-700">
                    <FaArrowRight className="fas fa-angle-right"></FaArrowRight>
                </button>
            </div>
        </div>
    )
}