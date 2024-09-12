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
            <NavBarComponent scrolledValue={200} isAlreadyScrolled={false} links={links} />
                {children}
            <FooterComponent />
        </>
    )
}