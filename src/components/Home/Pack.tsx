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
                    description: "- 1 lampe aquarium\n- 1 gros par à LED",
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
                    description: "- 2 satellites Alto de 8 pouces\n- 1 caisson de basse Alto de 15 pouces",
                    price: 100
                },
                {
                    name: "Pack Lumières",
                    description: "- 2 par à LED\n- 1 stroboscope\n- 1 derby\n- 2 petite lyre blanche\n- 1 pont de lumière\n- 1 machine à fumée 1200W",
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
                    description: "- 2 satellites Alto de 15 pouces\n- 1 caisson Mac Mah 18 pouces",
                    price: 140
                },
                {
                    name: "Pack Lumières",
                    description: "- 4 par à LED\n- 2 lyres Phantom Showtech\n- 1 laser KUB400 RGB\n- 1 stroboscope\n- 1 machine à fumée 1500W\n- 1 pont de lumière",
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
                    description: "- 2 satellites Alto de 15 pouces\n- 2 caisson Mac Mah 18 pouces",
                    price: 160
                },
                {
                    name: "Pack Lumières",
                    description: "- 4 lyres Phantom Showtech\n- 1 gros par à LED\n- 4 par à LED\n- 1 laser KUB400 RGB\n- 1 stroboscope\n- 1 derby\n- 1 machine à fumée 3000W\n- 1 pont de lumière",
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
                        <h4 className="text-red-600/90 font-bold text-5xl">NOS PACKS</h4>
                    </div>
                    <p className="max-w-sm ml-44">
                        Choisissez parmi nos packs pour trouver celui qui correspond à vos besoins.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 flex-wrap gap-4 justify-center">
                {packs.map((pack, index) => {
                    return (
                        <div key={index} className="space-y-4 bg-red-50 rounded-xl p-4">
                            <h3 className="font-bold text-xl">{pack.name}</h3>
                            {pack.subPacks.map((subPack, index) => {
                                return (
                                    <div key={index} className="rounded-xl bg-slate-500">
                                        <h4 className="font-bold">{subPack.name}</h4>
                                        <p dangerouslySetInnerHTML={{ __html: subPack.description.replace(/\n/g, '<br />') }} />
                                        <p className="price">€{subPack.price}</p>
                                    </div>
                                );
                            })}
                            <div className="rounded-xl bg-slate-500">
                                <h4 className="font-bold">{pack.name} Combo (Son + Lumières)</h4>
                                <p className="price">€{pack.combinedPrice}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <a href="/list-product" className="rounded-3xl bg-red-600/90 py-3 px-6 shadow-sm text-white hover:bg-gradient-to-r from-[rgba(98,37,181,0.8)] to-[rgba(128,33,181,0.8)]">
                Voir tout notre matériel
            </a>
        </div>
    );
}
