import { useState, useEffect } from "react";
import { EquipmentType } from "../types/EquipmentType";
import apiSterenova from "../tools/apiSterenova";
import { HomeLayout } from "../components/Layout/Home";
import { EquipmentComponent } from "../components/Equipment";

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
        <HomeLayout>
            <EquipmentComponent equipments={equipments} />
        </HomeLayout>
    );
}