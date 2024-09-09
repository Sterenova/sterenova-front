
import React from "react";
import { NavBarComponent } from "../NavBar";
import { FooterComponent } from "../Footer";

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