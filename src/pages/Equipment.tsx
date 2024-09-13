import { useState, useEffect } from "react";
import { EquipmentType } from "../types/EquipmentType";
import apiSterenova from "../tools/apiSterenova";
import { EquipmentComponent } from "../components/Equipment";
import { EquipmentLayout } from "../components/Layout/Equipment";
import { ErrorComponent } from "../components/Error/ErrorComponent";
import { Loader } from "../components/Utils/Loader";

export function Equipment() {
    const [equipments, setEquipments] = useState<EquipmentType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        apiSterenova.get('/equipment')
            .then(response => {
                setEquipments(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setError(true);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error || (equipments && equipments.length === 0)) {
        return <ErrorComponent errorText="Aucun équipement trouvé" />;
    }

    return (
        <EquipmentLayout>
            <EquipmentComponent equipments={equipments} />
        </EquipmentLayout>
    );
}