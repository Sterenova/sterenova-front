import { EquipmentType } from "../../../types/EquipmentType";

export function ProductComponent({ equipment }: { equipment: EquipmentType }) {
    return (
        <div className="flex flex-col justify-center items-center space-y-10 mb-40">
            <div className="relative flex items-center justify-center w-full max-w-screen-md px-4 bg-slate-400 mt-40">
                <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={`/${equipment.photos[0].url}`}
                            alt={equipment.name}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <h3 className="text-3xl font-bold text-[#6225B5]">{equipment.name}</h3>
                        <p className="text-lg text-[#6225B5]">{equipment.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}