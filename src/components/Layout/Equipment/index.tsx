import { FooterComponent } from "../Footer";
import { NavBarComponent } from "../NavBar";

interface EquipmentLayoutProps {
    children: React.ReactNode;
}

export function EquipmentLayout({ children }: EquipmentLayoutProps) {
    return (
        <>
            <NavBarComponent />
                {children}
            <FooterComponent />
        </>
    )
}