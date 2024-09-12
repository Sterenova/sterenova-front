import { FooterComponent } from "../Footer";
import { NavBarComponent } from "../NavBar";

interface EquipmentLayoutProps {
    children: React.ReactNode;
}

export function ProductLayout({ children }: EquipmentLayoutProps) {
    return (
        <>
            <NavBarComponent scrolledValue={200} isAlreadyScrolled={false} />
                {children}
            <FooterComponent />
        </>
    )
}