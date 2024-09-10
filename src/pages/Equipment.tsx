import { useState, useEffect } from "react";
import { EquipmentType } from "../types/EquipmentType";
import apiSterenova from "../tools/apiSterenova";
import { EquipmentComponent } from "../components/Equipment";
import { EquipmentLayout } from "../components/Layout/Equipment";
import { ErrorComponent } from "../components/Error/ErrorComponent";

export function Equipment() {
    const [equipments, setEquipments] = useState<EquipmentType[]>([]);

    useEffect(() => {
        apiSterenova.get('/equipment')
            .then(response => {
                setEquipments(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    if (!equipments || equipments.length === 0) {
        return <ErrorComponent errorText="Aucun équipement trouvé" />;
    }

    return (
        <EquipmentLayout>
            <EquipmentComponent equipments={equipments} />
        </EquipmentLayout>
    );
}