import {EquipmentType} from "../../types/EquipmentType.ts";

interface EquipmentComponentProps {
    equipments: EquipmentType[];
}

export function EquipmentComponent({ equipments }: EquipmentComponentProps) {
    if (!Array.isArray(equipments)) {
        console.error("Expected equipments to be an array, but got", typeof equipments);
        return null;
    }

    return (
        <div className="row">
            {equipments.map((item: EquipmentType) => (
                <div key={item.id} className="col-12 col-md-6 col-lg-3 pricing-card">
                    <div className="pricing-box wow fadeInUp">
                        <div className="pricing-box-detail position-relative">
                            <div className="pricing-detail-overlay"></div>
                            <h5 className="pricing-title text-center">{item.name}</h5>
                            <div className="col-12">
                                <div className="portfolio-carousel owl-carousel owl-item">
                                    {item.image.map((img) => (
                                        <img key={img.id} src={img.url} alt="image" />
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
    );
}