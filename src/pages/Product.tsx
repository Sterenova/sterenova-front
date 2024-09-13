import { useState, useEffect } from "react";
import { EquipmentType } from "../types/EquipmentType";
import apiSterenova from "../tools/apiSterenova";
import { ErrorComponent } from "../components/Error/ErrorComponent";
import { ProductComponent } from "../components/Equipment/Product";
import { useParams } from "react-router-dom";
import { ProductLayout } from "../components/Layout/Product";
import { Loader } from "../components/Utils/Loader";

export function Product() {
    const [equipment, setEquipment] = useState<EquipmentType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>(); 

    useEffect(() => {
        apiSterenova.get('/equipment/' + id)
            .then(response => {
                setEquipment(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setError(true);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (error || !equipment) {
        return <ErrorComponent errorText="Aucun équipement trouvé" />;
    }

    return (
        <ProductLayout>
            <ProductComponent equipment={equipment} />
        </ProductLayout>
    );
}