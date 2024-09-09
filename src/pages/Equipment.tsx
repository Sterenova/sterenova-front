import { useState, useEffect } from "react";
import { EquipmentType } from "../types/EquipmentType";
import apiSterenova from "../tools/apiSterenova";
import { HomeLayout } from "../components/Layout/Home";
import { HeaderSectionComponent } from "../components/Utils/HeaderSection";
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
            <HeaderSectionComponent title="Nos" titleImportant="Equipements" description="Nous mettons a votre disposition une large gamme de materiel de sonorisation et d'eclairage professionnel pour repondre a vos besoins et vous offrir une experience inoubliable." />
            <EquipmentComponent equipments={equipments} />
        </HomeLayout>
    );
}