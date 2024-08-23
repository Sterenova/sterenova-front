import { EquipmentType } from "../../types/EquipmentType";
import { PhotoType } from "../../types/PhotoType";

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
        <div className="container-fluid">
            <div className="row">
                {equipments.map((item: EquipmentType) => (
                    <div key={item.id} className="col-12 col-md-6 col-lg-3 pricing-card">
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
    );
}
