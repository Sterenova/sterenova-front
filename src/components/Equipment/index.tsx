import { EquipmentType } from "../../types/EquipmentType";
import { ButtonComponent } from "../Utils/ButtonComponent";
import { HeadingSection } from "../Utils/HeadingSection";

interface EquipmentComponentProps {
    equipments: EquipmentType[];
}

export function EquipmentComponent({ equipments }: EquipmentComponentProps) {
    return (
        <div className="flex flex-col items-center justify-center space-y-10 mb-40 overflow-hidden px-4 md:px-8 lg:px-16">
            <HeadingSection
                title="Nos "
                titlePrimary="Équipements"
                description="Découvrez notre large gamme de produits"
                className="md:pt-48"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                {equipments.map((item: EquipmentType) => (
                    <div key={item.id} className="flex flex-col bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-sm h-96">
                        {/* Equipment Title */}
                        <div className="p-4 text-center">
                            <h5 className="text-lg font-semibold">{item.name}</h5>
                        </div>

                        <div className="flex-1 overflow-hidden relative bg-slate-100 pb-10">
                            {item.photos.length > 0 ? (
                                <img
                                    className="w-full h-full object-contain"
                                    src={item.photos[0].url}
                                    alt={item.name}
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-500">No Image Available</span>
                                </div>
                            )}
                        </div>

                        <div className="p-4">
                            <ButtonComponent className="w-full flex justify-center" href={`product-detail?id=${encodeURIComponent(item.id)}`}>
                                Voir Details
                            </ButtonComponent>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
