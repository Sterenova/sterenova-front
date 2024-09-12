import { FooterComponent } from "../Footer";
import { NavBarComponent } from "../NavBar";

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