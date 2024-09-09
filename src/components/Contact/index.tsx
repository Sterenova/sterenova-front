import { FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { ButtonComponent } from "../Utils/ButtonComponent";

export function ContactComponent() {
  return (
    <section className="py-16 bg-white" id="contact-sec">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="">
            <h4 className="text-3xl font-bold mb-6 text-center lg:text-left">
              PRENDRE CONTACT
            </h4>
            <form className="" id="contact-form-data">
                <div className="flex gap-4">
                  <div className="">

                  <input
                    type="text"
                    placeholder="Nom"
                    required
                    name="userName"
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="email"
                    placeholder="Adresse Mail *"
                    required
                    name="userEmail"
                    className="w-full p-4 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="text"
                    placeholder="Sujet"
                    required
                    name="userSubject"
                    className="w-full p-4 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  </div>

                  <textarea
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Votre Message"
                    name="userMessage"
                    rows={6}
                  ></textarea>
                </div>
              <div className="col-span-1 md:col-span-2 py-4">
                <ButtonComponent className="mt-4 w-full" type="submit">Envoyer Message</ButtonComponent>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="">
            <h4 className="text-3xl font-bold mb-6 text-center lg:text-left">
              NOUS RETROUVER
            </h4>
            <p className="text-gray-600 mb-4 text-center lg:text-left">
              Vous pouvez nous contacter par mail ou par téléphone pour toute
              demande de renseignements ou pour réserver notre matériel ou
              votre événement.
            </p>
            <ul className="space-y-4 text-center lg:text-left">
              <li className="flex items-center justify-center lg:justify-start">
                <FaMapMarkerAlt className="text-2xl text-purple-600" />
                <span className="ml-4 text-lg">Paris</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <FaPhoneAlt className="text-2xl text-purple-600" />
                <div className="ml-4 space-y-1">
                  <p>07 68 36 46 48</p>
                  <p>07 81 98 99 63</p>
                  <p>06 66 99 53 32</p>
                </div>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <FaPaperPlane className="text-2xl text-purple-600" />
                <span className="ml-4 text-lg">contact.sterenova@gmail.fr</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
