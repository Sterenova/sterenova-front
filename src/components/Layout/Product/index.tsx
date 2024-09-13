import { FooterComponent } from "../../Utils/Footer";
import { NavBarComponent } from "../../Utils/NavBar";

interface EquipmentLayoutProps {
    children: React.ReactNode;
}

export function ProductLayout({ children }: EquipmentLayoutProps) {

    const links = [
        { title: "Retour", href: "/equipment" },
    ]

    return (
        <>
            <NavBarComponent scrolledValue={180} links={links} />
                {children}
            <FooterComponent />
        </>
    )
}