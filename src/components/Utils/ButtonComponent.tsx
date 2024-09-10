import React from 'react';

interface ButtonProps {
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    href?: string;
    children: React.ReactNode;
}

export function ButtonComponent(props: ButtonProps) {
    const { className, type, href, children } = props;

    if (href) {
        return (
            <a
                href={href}
                className={`${className} hover:bg-red-600/90 py-3 px-6 shadow-sm text-white bg-gradient-to-r from-[rgba(98,37,181,0.8)] to-[rgba(128,33,181,0.8)] rounded-full transition-all duration-300 hover:scale-105`}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type || 'button'}
            className={`${className} hover:bg-red-600/90 py-3 px-6 shadow-sm text-white bg-gradient-to-r from-[rgba(98,37,181,0.8)] to-[rgba(128,33,181,0.8)] rounded-full transition-all duration-300 hover:scale-105`}
        >
            {children}
        </button>
    );
}