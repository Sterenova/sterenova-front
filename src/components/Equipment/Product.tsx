import { EquipmentType } from "../../types/EquipmentType";
import { Background } from "../Utils/Background";
import { ButtonComponent } from "../Utils/ButtonComponent";

export function ProductComponent({ equipment }: { equipment: EquipmentType }) {
    return (
        <div className="relative w-full flex justify-center overflow-hidden py-12">
            <Background />
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-0 z-10 overflow-hidden">
                <div className="flex flex-col items-start gap-8 sm:gap-20 lg:flex-row-reverse lg:items-center overflow-hidden">
                    <div className="lg:w-1/2 overflow-hidden bg-slate-200 py-16 px-16 rounded-3xl shadow-lg">
                        <h2 className="mb-4 max-w-3xl text-3xl font-bold md:text-5xl overflow-hidden">
                            {equipment.name}
                        </h2>
                        <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-base md:mb-10 lg:mb-12 overflow-hidden pt-14">
                            {equipment.description}
                            <br />
                            <br />
                            <br />
                            Prix location : {equipment.price} €
                        </p>
                        <p className="text-xs">
                            * Une caution adaptée est demandée pour chaque location d'équipement.
                        </p>
                    </div>
                    <div className="lg:w-1/2 overflow-hidden">
                        <img
                            src={`/${equipment.photos[0].url}`}
                        />
                    </div>

                    <div className="w-full flex justify-center md:hidden">
                        <ButtonComponent href="/equipment" children={"Retour"} />
                    </div>
                </div>
            </div>
        </div>
    );
}