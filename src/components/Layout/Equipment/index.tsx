import { FooterComponent } from "../Footer";
import { NavBarComponent } from "../NavBar";

interface EquipmentLayoutProps {
    children: React.ReactNode;
}

export function EquipmentLayout({ children }: EquipmentLayoutProps) {

    
    const links = [
        { title: "Retour", href: "/" },
    ]
    return (
        <>
            <NavBarComponent scrolledValue={0} isAlreadyScrolled={true} links={links}/>
                {children}
            <FooterComponent />
        </>
    )
}