export function RealisationComponent() {
    return (
            <section className="portfolio-sec padding-top padding-bottom" id="portfolio-sec">
        <div className="container">
            <div className="row portfolio-heading-area text-center text-lg-left">
                <div className="col-12 col-lg-6">
                    <h4 className="heading wow fadeInLeft">NOS DERNIERS EVENEMENTS <span>& <span
                                className="color">PROJECTS</span></span></h4>
                </div>
                <div className="col-12 col-lg-5 offset-lg-1">
                    <p className="text wow fadeInRight">
                        Découvrez nos dernières réalisations et projets, et laissez-vous inspirer par nos créations
                        uniques et originales.
                        <br/>
                        Nous mettons tout en oeuvre pour vous offrir une expérience inoubliable, à la hauteur de vos
                        attentes.
                    </p>
                </div>
            </div>
            <div className="row position-relative">
                <div className="col-12">
                    <div className="portfolio-carousel owl-carousel owl-item">
                        <div className="item">
                            <div className="section-container">
                                <div className="section-image">
                                    <video loop autoPlay muted>
                                        <source src="img/sterenova/rendu_paul.mp4" type="video/mp4"/>
                                    </video>
                                </div>
                                <div className="section-details">
                                    <div className="section-mini-detail">
                                        <h4 className="section-mini-heading">Janvier 2024</h4>
                                    </div>
                                    <p className="text-description">
                                        Nous avons eu le plaisir de participer a la soiree d'anniversaire de Paul.
                                        <br/>
                                        Nous avons mis en place un eclairage adapte a l'ambiance de la soiree et nous
                                        avons
                                        assure l'animation musicale de la soiree.
                                    </p>
                                </div>,
                            </div>
                        </div>
                        <div className="item">
                            <div className="section-container">
                                <div className="section-image">
                                    <img src="img/sterenova/gala.png"/>
                                </div>
                                <div className="section-details">
                                    <div className="section-mini-detail">
                                        <h4 className="section-mini-heading">Fevrier 2024</h4>
                                    </div>
                                    <p className="text-description">
                                        Nous eu le plaisir de participer au Gala Bal Masquee organise par l’AESF
                                        qui s'est tenu au Salon des Miroirs a Paris.
                                        <br/>
                                        Notre equipe a eu le plaisir de mixer lors de cet evenement et de mettre en
                                        place
                                        un eclairage adapte a l'ambiance de la soiree.
                                    </p>
                                </div>
                            </div>
                        </div>,
                        <div className="item">
                            <div className="section-container">
                                <div className="section-image">
                                    <img src="img/sterenova/adam_tanguy.png"/>
                                </div>
                                <div className="section-details">
                                    <div className="section-mini-detail">
                                        <h4 className="section-mini-heading">Mars 2024</h4>
                                    </div>
                                    <p className="text-description">
                                        Nous avons eu le plaisir de participer a la soiree d'anniversaire de Adam et
                                        Tanguy.
                                        <br/>
                                        Nous avons mis en place un eclairage adapte a l'ambiance de la soiree et nous
                                        avons
                                        assure l'animation musicale de la soiree.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="portfolio-links" id="portfolio-arr-left"><i className="fas fa-angle-left"></i> </a>
                <a className="portfolio-links" id="portfolio-arr-right"><i className="fas fa-angle-right"></i> </a>
            </div>
        </div>
    </section>
    )
}