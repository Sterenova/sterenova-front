import { EquipmentType } from "../../types/EquipmentType";
import { Background } from "../Utils/Background";

export function ProductComponent({ equipment }: { equipment: EquipmentType }) {
    return (
        <div className="relative w-full flex justify-center overflow-hidden py-12 bg-gradient-to-b ">
            <Background />

            <div className="relative z-10 max-w-screen-lg w-full rounded-3xl flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400 shadow-2xl mt-12 mb-12 transform transition-all hover:scale-105">
                
                {/* Image Section */}
                <div className="w-full md:w-1/2 p-4">
                    <div className="w-full overflow-hidden rounded-3xl shadow-lg bg-purple-800 transform transition-all hover:scale-105">
                        {equipment.photos.length > 0 ? (
                            <img
                                className="w-full h-auto object-cover rounded-3xl"
                                src={`/${equipment.photos[0].url}`}
                                alt={equipment.name}
                            />
                        ) : (
                            <div className="min-w-full h-64 bg-gray-300 flex items-center justify-center rounded-3xl">
                                <span className="text-gray-500">No Image Available</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Info Section */}
                <div className="w-full md:w-1/2 p-6 space-y-6 text-center md:text-left">
                    <h3 className="text-5xl font-extrabold text-white tracking-tight">
                        {equipment.name}
                    </h3>
                    <p className="text-lg text-gray-200 leading-relaxed">
                        {equipment.description}
                    </p>
                    <div className="pt-4">
                        <button className="px-6 py-3 bg-purple-600 text-white font-bold rounded-full shadow-md transition-all hover:bg-purple-800">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
