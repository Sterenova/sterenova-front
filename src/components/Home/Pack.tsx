import { ButtonComponent } from "../Utils/ButtonComponent";
import { HeadingSection } from "../Utils/HeadingSection";
import { Separator } from "../Utils/Separator";

export function PackComponent() {
    const packs = [
        {
            name: "Pack A : 20 personnes",
            subPacks: [
                {
                    name: "Pack Son",
                    description: "- 1 enceinte JBL PartyBox 110",
                    price: 50
                },
                {
                    name: "Pack Lumières",
                    description: "- 1 lampe aquarium<br/>- 1 gros par à LED",
                    price: 30
                }
            ],
            combinedPrice: 60
        },
        {
            name: "Pack B : 50 personnes",
            subPacks: [
                {
                    name: "Pack Son",
                    description: "- 2 satellites Alto de 8 pouces<br/>- 1 caisson de basse Alto de 15 pouces",
                    price: 100
                },
                {
                    name: "Pack Lumières",
                    description: "- 2 par à LED<br/>- 1 stroboscope<br/>- 1 derby<br/>- 2 petite lyre blanche<br/>- 1 pont de lumière<br/>- 1 machine à fumée 1200W",
                    price: 100
                }
            ],
            combinedPrice: 150
        },
        {
            name: "Pack C : 100 personnes",
            subPacks: [
                {
                    name: "Pack Son",
                    description: "- 2 satellites Alto de 15 pouces<br/>- 1 caisson Mac Mah 18 pouces",
                    price: 140
                },
                {
                    name: "Pack Lumières",
                    description: "- 4 par à LED<br/>- 2 lyres Phantom Showtech<br/>- 1 laser KUB400 RGB<br/>- 1 stroboscope<br/>- 1 machine à fumée 1500W<br/>- 1 pont de lumière",
                    price: 200
                }
            ],
            combinedPrice: 280
        },
        {
            name: "Pack D : 200+ personnes",
            subPacks: [
                {
                    name: "Pack Son",
                    description: "- 2 satellites Alto de 15 pouces<br/>- 2 caisson Mac Mah 18 pouces",
                    price: 160
                },
                {
                    name: "Pack Lumières",
                    description: "- 4 lyres Phantom Showtech<br/>- 1 gros par à LED<br/>- 4 par à LED<br/>- 1 laser KUB400 RGB<br/>- 1 stroboscope<br/>- 1 derby<br/>- 1 machine à fumée 3000W<br/>- 1 pont de lumière",
                    price: 220
                }
            ],
            combinedPrice: 310
        }
    ];

    return (
        <div id="pricing-sec" className="flex flex-col justify-center items-center space-y-10 mb-40 overflow-hidden">
            <Separator />
            <HeadingSection title="NOS" titlePrimary="PACKS" description="Choisissez parmi nos packs pour trouver celui qui correspond à vos besoins." />

            <div className="grid md:grid-cols-2 grid-cols-1 flex-wrap gap-6 justify-center">
                {packs.map((pack, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-xl p-6 transition-all hover:scale-105 mx-4 flex flex-col justify-between h-full">
                        <h3 className="font-bold text-xl text-gray-800">{pack.name}</h3>
                        <div className="space-y-4 mt-4 flex-grow">
                            {pack.subPacks.map((subPack, index) => (
                                <div key={index} className="p-4 rounded-lg bg-gray-100 shadow-sm flex flex-col justify-between min-h-[150px]">
                                    <h4 className="font-semibold text-lg text-gray-700">{subPack.name}</h4>
                                    <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: subPack.description }} />
                                    <p className="text-lg font-medium text-gray-800 mt-2">€{subPack.price}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <h6 className="font-semibold text-md text-gray-700">Combo (Son + Lumières) €{pack.combinedPrice}</h6>
                        </div>
                    </div>
                ))}
            </div>
            
            <ButtonComponent className="mt-4" href="/equipment">Voir tout notre matériel</ButtonComponent>            
        </div>

        
    );
}
