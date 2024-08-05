export function ContactComponent() {
  return (
    <section
      className="contact-sec padding-top padding-bottom"
      id="contact-sec"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 wow fadeInLeft">
            <h4 className="heading text-center text-lg-left">
              PRENDRE CONTACT
            </h4>
            <form className="row contact-form" id="contact-form-data">
              <div className="col-sm-12" id="result"></div>
              <div className="col-12 col-md-5">
                <input
                  type="text"
                  placeholder="Nom"
                  required
                  name="userName"
                  className="form-control"
                />
                <input
                  type="email"
                  placeholder="Adresse Mail *"
                  required
                  name="userEmail"
                  className="form-control"
                />
                <input
                  type="text"
                  placeholder="Sujet"
                  required
                  name="userSubject"
                  className="form-control"
                />
              </div>
              <div className="col-12 col-md-7">
                <textarea
                  className="form-control"
                  placeholder="Votre Message"
                  name="userMessage"
                  rows={6}
                ></textarea>
              </div>
              <div className="col-12">
                <a
                  href="javascript:void(0);"
                  className="btn contact_btn pink-btn rounded-pill w-100"
                >
                  Envoyer Message
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </form>
          </div>
          <div className="col-12 col-lg-5 text-center text-lg-left position-relative">
            <div className="contact-details wow fadeInRight">
              <h4 className="heading">NOUS RETROUVER</h4>
              <p className="text">
                Vous pouvez nous contacter par mail ou par telephone pour toute
                demande de renseignements ou pour reserver notre materiel ou
                votre evenement.
              </p>
              <ul>
                <li>
                  <i className="las la-map-marker addr"></i>Paris{" "}
                </li>
                <li>
                  <i className="las la-phone-volume phone"></i>
                  <span>07 68 36 46 48</span>
                  <span>07 81 98 99 63</span>
                  <span>06 66 99 53 32</span>
                </li>
                <li>
                  <i className="las la-paper-plane email"></i>
                  contact.sterenova@gmail.fr
                </li>
              </ul>
            </div>
            <img
              src="img/contact-background.png"
              className="contact-background"
              alt="contact"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
