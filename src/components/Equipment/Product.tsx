import { EquipmentType } from "../../types/EquipmentType";
import { Background } from "../Utils/Background";

export function ProductComponent({ equipment }: { equipment: EquipmentType }) {
    return (
        <div className="relative w-full flex justify-center overflow-hidden py-12">
            <Background />

            <div className="relative z-10 max-w-screen-lg w-full rounded-3xl flex items-center justify-center px-6 py-8 bg-gradient-to-br from-purple-600 to-blue-600 shadow-2xl mt-24 mb-24">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
                    <div className="w-full md:w-1/2 p-4">
                        <div className="w-full overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src={`/${equipment.photos[0].url}`}
                                alt={equipment.name}
                                className="w-full max-h-screen rounded-2xl"
                            />
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
