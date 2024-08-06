import { FooterComponent } from "../Footer";
import { NavBarComponent } from "../NavBar";

interface StuffLayoutProps {
    children: React.ReactNode;
}

export function StuffLayout({ children }: StuffLayoutProps) {
    return (
        <>
            <NavBarComponent />
            {children}
            <FooterComponent />
        </>
    )
}