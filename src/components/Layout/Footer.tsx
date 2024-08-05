export function FooterComponent() {
  return (
    <footer className="footer-style-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="footer-social text-center text-lg-left ">
              <ul className="list-unstyled">
                <li>
                  <a
                    className="wow fadeInUp"
                    href="https://www.tiktok.com/@sterenova_"
                  >
                    <i aria-hidden="true" className="fab fa-tiktok"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="wow fadeInUp"
                    href="https://www.instagram.com/sterenova_/?hl=fr"
                  >
                    <i aria-hidden="true" className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <p className="company-about fadeIn">© 2024 Sterenova</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
