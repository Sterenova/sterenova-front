
import React from "react";
import { NavBarComponent } from "../../Utils/NavBar";
import { FooterComponent } from "../../Utils/Footer";

interface HomeLayoutProps {
    children: React.ReactNode;
}

export function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <>
            <NavBarComponent />
                {children}
            <FooterComponent />
        </>
    )
}