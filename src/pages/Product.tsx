import { useState, useEffect } from "react";
import { EquipmentType } from "../types/EquipmentType";
import apiSterenova from "../tools/apiSterenova";
import { EquipmentLayout } from "../components/Layout/Equipment";
import { ErrorComponent } from "../components/Error/ErrorComponent";
import { ProductComponent } from "../components/Layout/Equipment/Product";
import { useParams } from "react-router-dom";

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

    console.log(equipment);

    if (!equipment) {
        return <ErrorComponent errorText="Aucun équipement trouvé" />;
    }

    return (
        <EquipmentLayout>
            <ProductComponent equipment={equipment} />
        </EquipmentLayout>
    );
}