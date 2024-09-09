import { ButtonComponent } from "../Utils/ButtonComponent";

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
            <div className="flex items-center relative mb-20">
                <div className="flex items-center justify-between w-full max-w-screen-lg px-4">
                    <div className="max-w-sm mr-44">
                        <h4 className="text-red-600/90 font-bold text-5xl"><span className="text-black">NOS</span> PACKS</h4>
                    </div>
                    <p className="max-w-sm ml-44">
                        Choisissez parmi nos packs pour trouver celui qui correspond à vos besoins.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 flex-wrap gap-6 justify-center">
                {packs.map((pack, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-xl p-6 transition-all hover:scale-105">
                        <h3 className="font-bold text-xl text-gray-800">{pack.name}</h3>
                        <div className="space-y-4 mt-4">
                            {pack.subPacks.map((subPack, index) => (
                                <div key={index} className="p-4 rounded-lg bg-gray-100 shadow-sm">
                                    <h4 className="font-semibold text-lg text-gray-700">{subPack.name}</h4>
                                    <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: subPack.description }} />
                                    <p className="text-lg font-medium text-gray-800 mt-2">€{subPack.price}</p>
                                </div>
                            ))}
                            <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                                <h4 className="font-semibold text-lg text-gray-700">{pack.name} Combo (Son + Lumières)</h4>
                                <p className="text-lg font-medium text-gray-800 mt-2">€{pack.combinedPrice}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <ButtonComponent className="mt-4" href="/list-product">Voir tout notre matériel</ButtonComponent>
        </div>
    );
}