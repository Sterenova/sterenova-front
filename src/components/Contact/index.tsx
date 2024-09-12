"use server";
import { FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { ButtonComponent } from "../Utils/ButtonComponent";
import { HeadingSection } from "../Utils/HeadingSection";
import { Separator } from "../Utils/Separator";
import apiSterenova from "../../tools/apiSterenova";
import { toast } from "react-toastify";

export function ContactComponent() {

  function sendContactForm(formData: any) {
    formData.preventDefault();

    const form = formData.target;
    const data = new FormData(form);

    const userName = data.get('userName');
    const userEmail = data.get('userEmail');
    const userSubject = data.get('userSubject');
    const userMessage = data.get('userMessage');

    apiSterenova.post('/contact', {
      name: userName,
      email: userEmail,
      subject: userSubject,
      message: userMessage
    })
      .then(response => {
        console.log(response);
        toast.success("Message envoyé avec succès");
        form.reset();
      })
      .catch(error => {
        console.error(error);
        toast.error("Erreur lors de l'envoi du message");
      });
    
  }

return (
    <div className="flex flex-col justify-center items-center space-y-10 mb-40 overflow-hidden" id="contact-sec">
      <Separator />
      <HeadingSection title="NOUS" titlePrimary="CONTACTER" description="Vous pouvez nous contacter par mail ou par téléphone pour toute demande de renseignements ou pour réserver notre matériel ou votre événement." />

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 justify-center max-w-screen-lg">
        {/* Form Section */}
        <form className="w-full" id="contact-form-data" onSubmit={sendContactForm}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-4">
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
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Sujet"
                required
                name="userSubject"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <textarea
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              placeholder="Votre Message"
              name="userMessage"
              rows={6}
            ></textarea>
          </div>

          <div className="mt-4">
            <ButtonComponent className="w-full" type="submit">Envoyer Message</ButtonComponent>
          </div>
        </form>

        {/* Contact Information Section */}
        <div className="flex justify-center md:justify-start">
          <ul className="space-y-4 text-center md:text-left md:ml-12">
            <li className="flex items-center md:justify-start">
              <FaMapMarkerAlt className="text-2xl text-purple-600" />
              <span className="ml-4 text-lg">Paris</span>
            </li>
            <li className="flex items-center md:justify-start">
              <FaPhoneAlt className="text-2xl text-purple-600" />
              <div className="ml-4 space-y-1">
                <p>07 68 36 46 48</p>
                <p>07 81 98 99 63</p>
                <p>06 66 99 53 32</p>
              </div>
            </li>
            <li className="flex items-center lg:justify-start">
              <FaPaperPlane className="text-2xl text-purple-600" />
              <span className="ml-4 text-lg">contact.sterenova@gmail.fr</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
