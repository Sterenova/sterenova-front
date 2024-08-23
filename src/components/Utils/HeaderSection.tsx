interface HeaderSectionComponentProps {
    title: string;
    titleImportant: string;
    description: string;
}

export function HeaderSectionComponent({ title, titleImportant, description }: HeaderSectionComponentProps) {
    return (
        <section className="pricing-sec padding-top padding-bottom" id="pricing-sec">
        <div className="container">
            <div className="row">
                <div className="col-12 pricing-heading-area text-center">
                    <h4 className="heading">{title} <span className="color">{titleImportant}</span></h4>
                    <p className="text">
                        {description}
                    </p>
                </div>
            </div>
            <div className="row pricing-cards" id="pricing-container"></div>
        </div>
    </section>
    );
}