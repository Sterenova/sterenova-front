export function GalleryComponent() {
    return (    
    <section className="padding-top padding-bottom gallery-section" id="gallery-sec">
        <div className="container">
            <div className="row portfolio-heading-area text-center text-lg-left">
                <div className="col-12 col-lg-6">
                    <h4 className="heading wow fadeInLeft">LA <span className="color">GALERIE</span></h4>
                </div>
                <div className="col-12 col-lg-5 offset-lg-1">
                    <p className="text wow fadeInRight">
                        Decouvrez notre galerie pour vous donner une idee de ce que nous pouvons vous proposer.
                    </p>
                </div>
            </div>
            <div className="gallery-container">
                <div className="gallery-sub-container">
                    <div className="gallery-item">
                        <img src="img/sterenova/galery/img1" alt="img1"/>
                    </div>
                    <div className="gallery-item">
                        <img src="img/sterenova/galery/img2" alt="img2"/>
                    </div>
                    <div className="gallery-item">
                        <img src="img/sterenova/galery/img3" alt="img3"/>
                    </div>
                </div>

                <div className="gallery-item video-item">
                    <video loop autoPlay muted>
                        <source src="img/sterenova/galery/0320.mp4" type="video/mp4"/>
                    </video>
                </div>

                <div className="gallery-sub-container">
                    <div className="gallery-item">
                        <img src="img/sterenova/galery/img4" alt="img4"/>
                    </div>
                    <div className="gallery-item">
                        <img src="img/sterenova/galery/img5" alt="img5"/>
                    </div>
                    <div className="gallery-item">
                        <img src="img/sterenova/galery/img6" alt="img6"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}