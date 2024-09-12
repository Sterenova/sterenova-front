import { EquipmentType } from "../../types/EquipmentType";
import { Background } from "../Utils/Background";

export function ProductComponent({ equipment }: { equipment: EquipmentType }) {
    return (
        <div className="relative w-full flex justify-center overflow-hidden py-12">
            <Background />

            <div className="relative z-10 max-w-screen-lg w-full rounded-3xl flex items-center justify-center px-6 py-8 bg-slate-300 shadow-2xl mt-24 mb-24">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
                    <div className="w-full md:w-1/2 p-4">
                        <div className="w-full overflow-hidden rounded-2xl shadow-lg bg-purple-700">
                            {equipment.photos.length > 0 ? (
                                <img
                                    className="w-full max-h-screen rounded-2xl shadow-lg"
                                    src={`/${equipment.photos[0].url}`}
                                    alt={equipment.name}
                                />
                            ) : (
                                <div className="min-w-full max-h-screen bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-500">No Image Available</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 p-6 space-y-4">
                        <h3 className="text-4xl font-extrabold text-white">{equipment.name}</h3>
                        <p className="text-lg text-white">{equipment.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
