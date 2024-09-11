import { FooterComponent } from "../Footer";
import { NavBarComponent } from "../NavBar";

interface EquipmentLayoutProps {
    children: React.ReactNode;
}

export function EquipmentLayout({ children }: EquipmentLayoutProps) {
    return (
        <>
            <NavBarComponent scrolledValue={0} isAlreadyScrolled={true} />
                {children}
            <FooterComponent />
        </>
    )
}