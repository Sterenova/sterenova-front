export function PackComponent() {
    return (
            <section className="pricing-section" id="pricing-sec">
        <div className="container">
            <div className="container-pricing">
                <div className="row portfolio-heading-area text-center text-lg-left">
                    <div className="col-12 col-lg-6">
                        <h4 className="heading wow fadeInLeft">NOS <span className="color">PACKS</span></h4>
                    </div>
                    <div className="col-12 col-lg-5 offset-lg-1">
                        <p className="text wow fadeInRight">
                            Choisissez parmi nos packs pour trouver celui qui correspond à vos besoins.
                        </p>
                    </div>
                </div>
                <div className="row packs-row">
                    <div className="col-md-4 pack">
                        <h3>Pack A</h3>
                        <div className="sub-pack light-pack">
                            <h4>Lights</h4>
                            <p>Description of lights sub-pack.</p>
                            <p className="price">€100</p>
                            <input type="checkbox" id="lightPackA" className="pack-checkbox" data-price="100"/>
                        </div>
                        <div className="sub-pack sound-pack">
                            <h4>Sound</h4>
                            <p>Description of sound sub-pack.</p>
                            <p className="price">€150</p>
                            <input type="checkbox" id="soundPackA" className="pack-checkbox" data-price="150"/>
                        </div>
                        <div className="combined-pack">
                            <h4>Pack A Combo (Lights + Sound)</h4>
                            <p className="price">€220</p>
                        </div>
                    </div>
                </div>
                <div className="row pricing-cards" id="pricing-container">
                    <div className="col-12 text-center">
                        <a href="list-product.html">
                            <button className="btn pink-btn rounded-pill custom-btn">Voir tout notre materiel</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}