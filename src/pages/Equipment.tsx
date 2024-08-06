import { useState, useEffect } from "react";
import { EquipmentLayout } from "../components/Layout/Equipment";
import { EquipmentComponent } from "../components/Equipment";
import { EquipmentType } from "../types/EquipmentType";
import apiSterenova from "../tools/apiSterenova";

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

    return (
        <EquipmentLayout>
            <EquipmentComponent equipments={equipments} />
        </EquipmentLayout>
    );
}