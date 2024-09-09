import { EquipmentType } from "../../types/EquipmentType";
import { PhotoType } from "../../types/PhotoType";
import { Background } from "../Utils/Background";
import { HeadingSection } from "../Utils/HeadingSection";

interface EquipmentComponentProps {
    equipments: EquipmentType[];
}

export function EquipmentComponent({ equipments }: EquipmentComponentProps) {
    console.log(equipments);

    // Render nothing if equipments is undefined or empty
    if (!equipments || equipments.length === 0) {
        return <div>No equipment available.</div>;
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center py-20 md:py-32 overflow-hidden">
                <Background />
                <HeadingSection title="Nos " titlePrimary="Equipements" description="Découvrez notre large gamme de produits" />
            </div>
            <div className="relative flex flex-row justify-center items-center mb-20">
                <div className="flex flex-col md:flex-row items-center md:items-start space-x-2">
                {equipments.map((item: EquipmentType) => (
                    <div key={item.id} className="bg-slate-500 rounded-md min-w-60 min-h-60">
                        <div className="pricing-box wow fadeInUp">
                            <div className="pricing-box-detail position-relative">
                                <div className="pricing-detail-overlay"></div>
                                <h5 className="pricing-title text-center">{item.name}</h5>
                                <div className="col-12">
                                    <div className="portfolio-carousel owl-carousel owl-item">
                                        {item.photos.map((img: PhotoType) => (
                                            <img key={img.id} src={img.url} alt={img.id.toString()} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="pricing-box-header position-relative">
                                <div className="pricing-header-overlay"></div>
                                <div className="header-content">
                                    <a href={`product-detail.html?id=${encodeURIComponent(item.id)}`} className="btn pink-btn rounded-pill w-100">Voir Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}
