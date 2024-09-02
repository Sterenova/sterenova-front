
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
            <main className="pt-60">
                {children}
            </main>
            <FooterComponent />
        </>
    )
}