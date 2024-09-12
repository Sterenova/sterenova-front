import { useState, useEffect } from "react";
import { EquipmentType } from "../types/EquipmentType";
import apiSterenova from "../tools/apiSterenova";
import { ErrorComponent } from "../components/Error/ErrorComponent";
import { ProductComponent } from "../components/Equipment/Product";
import { useParams } from "react-router-dom";
import { ProductLayout } from "../components/Layout/Product";

export function Product() {
    const [equipment, setEquipment] = useState<EquipmentType>();

    const { id } = useParams<{ id: string }>(); 

    useEffect(() => {
        apiSterenova.get('/equipment/' + id)
            .then(response => {
                setEquipment(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    if (!equipment) {
        return <ErrorComponent errorText="Aucun équipement trouvé" />;
    }

    return (
        <ProductLayout>
            <ProductComponent equipment={equipment} />
        </ProductLayout>
    );
}