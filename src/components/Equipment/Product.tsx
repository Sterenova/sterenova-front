import { EquipmentType } from "../../types/EquipmentType";
import { Background } from "../Utils/Background";

export function ProductComponent({ equipment }: { equipment: EquipmentType }) {
    return (
        <div className="relative w-full h-screen flex justify-center overflow-hidden">
            <Background />

            <div className="relative z-10 max-w-screen-lg max-h-fit rounded-3xl flex items-center justify-center px-4 bg-black">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full md:w-1/2 p-4">
                        <div className="w-full h-full overflow-hidden">
                            <img
                                src={`/${equipment.photos[0].url}`}
                                alt={equipment.name}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-10 space-y-4">
                        <h3 className="text-3xl font-bold text-white">{equipment.name}</h3>
                        <p className="text-lg text-white">{equipment.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}