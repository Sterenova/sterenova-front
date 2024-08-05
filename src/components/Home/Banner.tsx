export function BannerComponent() {
    return (
     <section className="banner-slider padding-bottom position-relative cursor-light" id="banner-slider">
        <div className="container">
            <div className="row banner-slider-row">
                <div
                    className="col-12 col-lg-6 d-flex align-items-center text-center text-lg-left text-sm-center justify-content-center justify-content-md-start">
                    <div className="slider-banner-content wow slideInLeft" data-wow-delay=".8s">
                        <h4 className="heading">STERENOVA </h4>
                        <p className="text">
                            Bienvenue chez Sterenova !
                            <br/>
                            Nous vous proposons d'équiper vos soirées pour qu'elle soit mémorable.
                            <br/>
                            Eclairage pour toutes sortes d''ambiance et matériel sonores sont a votre portée.
                            <br/>
                            N'hésitez pas à explorez notre site et découvrez notre large gamme de
                            <br/>
                            produits.
                        </p>
                        <a className="btn pink-btn rounded-pill" href="#contact-sec">Nous contacter
                            <span></span><span></span><span></span><span></span>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-center">
                    <div className="slider-img-area wow slideInRight" data-wow-delay=".8s" data-depth="0.1">
                        <img src="img/sterenova/3mans.png" alt="plant" id="slider-inner-img"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="svg-div svg-anim">
    <svg data-depth="0.05" id="banner-main-svg" viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(120)">
                <stop offset="0%" style={{ stopColor: "rgb(98,37,181)", stopOpacity: 1 }} />
                <stop offset="40%" style={{ stopColor: "rgb(128,33,181)", stopOpacity: 1 }} />
            </linearGradient>
        </defs>
        <rect width="100" height="100" rx="8" fill="url(#grad1)" />
    </svg>
</div>
        <div className="slider-icons">
            <ul className="slider-social banner-social">
                <li className="animated-wrap"><a className="animated-element" href="https://www.tiktok.com/@sterenova_"><i
                            className="fab fa-tiktok"></i> </a></li>
                <li className="animated-wrap"><a className="animated-element"
                        href="https://www.instagram.com/sterenova_/?hl=fr"><i className="lab la-instagram"></i> </a></li>
            </ul>
        </div>
    </section>
    )
}