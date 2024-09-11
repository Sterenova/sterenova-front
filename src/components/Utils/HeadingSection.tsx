interface HeadingSectionProps {
    title: string;
    titlePrimary: string;
    description: string;
    className?: string;
}

export function HeadingSection({ title, titlePrimary, description, className }: HeadingSectionProps) {

    const combinedClassName = `${className} flex flex-col md:flex-row items-center relative mb-10 md:mb-20 px-4`;

    return (
        <div className={combinedClassName}>
            <div className="w-full max-w-screen-lg flex flex-col md:flex-row items-center justify-between">
                <div className="md:max-w-sm w-full mb-4 md:mb-0 md:mr-10 text-center md:text-left">
                    <h4 className="text-red-600/90 font-bold text-3xl md:text-4xl md:mr-20">
                        <span className="text-black">{title}</span> {titlePrimary}
                    </h4>
                </div>
                <p className="md:max-w-sm w-full text-center md:text-left text-gray-600 md:ml-20">
                    {description}
                </p>
            </div>
        </div>
    );
}
