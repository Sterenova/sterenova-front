export function NavBarComponent() {
    return (
        <header id="home" className="cursor-light">

            <div className="inner-header nav-icon">
                <div className="main-navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-lg-3">
                                <a className="navbar-brand link" href="index.html">
                                    <img src="img/sterenova/logo_25.png" className="logo-simple" alt="logo"/>
                                        <img src="img/sterenova/logo_25.png" className="logo-fixed" alt="logo"/>
                                        </a>
                                    </div>
                                    <div className="col-8 col-lg-9 simple-navbar d-flex align-items-center justify-content-end">
                                        <nav className="navbar navbar-expand-lg">
                                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                <div className="navbar-nav ml-auto">
                                                    <a className="nav-link home link" href="#">ACCUEIL</a>
                                                    <a className="nav-link scroll link" href="#portfolio-sec">REALISATIONS</a>
                                                    <a className="nav-link scroll link" href="#gallery-sec">LA GALERIE</a>
                                                    <a className="nav-link scroll link" href="#pricing-sec">NOS PACKS</a>
                                                    <a className="nav-link scroll link" href="#contact-sec">NOUS CONTACTER</a>
                                                    <span className="menu-line"><i aria-hidden="true"
                                                        className="fa fa-angle-down"></i></span>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <a href="javascript:void(0)" className="sidemenu_btn link" id="sidemenu_toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div className="side-menu hidden side-menu-opacity">
                    <div className="bg-overlay"></div>
                    <div className="inner-wrapper">
                        <span className="btn-close" id="btn_sideNavClose"><i></i><i></i></span>
                        <div className="container">
                            <div className="row w-100 side-menu-inner-content">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <a href="index.html" className="navbar-brand"><img src="img/sterenova/logo_25.png"
                                        alt="logo"/></a>
                                </div>
                                <div className="col-12 col-lg-8">
                                    <nav className="side-nav w-100">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a className="nav-link scroll" href="#home">ACCUEIL</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link scroll" href="#portfolio-sec">REALISATIONS</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link scroll" href="#gallery-sec">LA GALERIE</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link scroll" href="#pricing-sec">NOS PACKS</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link scroll" href="#contact-sec">NOUS CONTACTER</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-12 col-lg-4 d-flex align-items-center">
                                    <div className="side-footer text-white w-100">
                                        <div className="menu-company-details">
                                            <span><a
                                                href="mailto:contact.sterenova@gmail.fr">contact.sterenova@gmail.fr</a></span>
                                        </div>
                                        <ul className="social-icons-simple">
                                            <li><a className="instagram-text-hvr" href="https://www.tiktok.com/@sterenova_"><i
                                                className="fab fa-tiktok"></i> </a> </li>
                                            <li><a className="instagram-text-hvr"
                                                href="https://www.instagram.com/sterenova_/?hl=fr"><i
                                                    className="fab fa-instagram"></i> </a> </li>
                                        </ul>
                                        <p className="text-white">&copy; 2024 Sterenova.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a id="close_side_menu" href="javascript:void(0);"></a>

        </header>
    )
}