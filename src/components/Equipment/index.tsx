import { useState } from "react";
import { EquipmentType } from "../../types/EquipmentType";
import { ButtonComponent } from "../Utils/ButtonComponent";
import { HeadingSection } from "../Utils/HeadingSection";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface EquipmentComponentProps {
    equipments: EquipmentType[];
}

export function EquipmentComponent({ equipments }: EquipmentComponentProps) {
    const [activeIndexes, setActiveIndexes] = useState<number[]>(Array(equipments.length).fill(0));

    const handleNext = (index: number) => {
        setActiveIndexes((prevIndexes) =>
            prevIndexes.map((activeIndex, i) =>
                i === index ? (activeIndex + 1) % equipments[index].photos.length : activeIndex
            )
        );
    };

    // Function to handle "Previous" for specific equipment
    const handlePrev = (index: number) => {
        setActiveIndexes((prevIndexes) =>
            prevIndexes.map((activeIndex, i) =>
                i === index ? (activeIndex - 1 + equipments[index].photos.length) % equipments[index].photos.length : activeIndex
            )
        );
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-10 mb-40 overflow-hidden px-4 md:px-8 lg:px-16">
            <HeadingSection
                title="Nos "
                titlePrimary="Équipements"
                description="Découvrez notre large gamme de produits"
                className="md:pt-48"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                {equipments.map((item: EquipmentType, equipmentIndex: number) => (
                    <div key={item.id} className="flex flex-col bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-sm h-96">
                        <div className="p-4 text-center">
                            <h5 className="text-lg font-semibold">{item.name}</h5>
                        </div>

                        <div className="relative flex items-center justify-center w-full px-4">
                            <button
                                onClick={() => handlePrev(equipmentIndex)}
                                className="transition-all hover:scale-105 mr-4 p-2 text-2xl text-white bg-gradient-to-r from-[rgba(98,37,181,0.8)] to-[rgba(128,33,181,0.8)] rounded-full"
                            >
                                <FaArrowLeft />
                            </button>

                            <div className="w-full flex justify-center">
                                <div className="w-full h-48 md:h-56 overflow-hidden">
                                    {item.photos.length > 0 ? (
                                        <img
                                            className="w-full h-full object-contain"
                                            src={item.photos[activeIndexes[equipmentIndex]].url}
                                            alt={item.name}
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-500">No Image Available</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button
                                onClick={() => handleNext(equipmentIndex)}
                                className="transition-all hover:scale-105 ml-4 p-2 text-2xl text-white bg-gradient-to-r from-[rgba(98,37,181,0.8)] to-[rgba(128,33,181,0.8)] rounded-full"
                            >
                                <FaArrowRight />
                            </button>
                        </div>

                        <div className="p-4">
                            <ButtonComponent className="w-full flex justify-center" href={`product-detail?id=${encodeURIComponent(item.id)}`}>
                                Voir Détails
                            </ButtonComponent>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
