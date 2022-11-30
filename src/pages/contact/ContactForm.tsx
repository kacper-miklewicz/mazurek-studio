import { FormEvent } from "react";

const ContactForm: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-bold mb-8 s:text-xl">
        Lub przez formularz kontaktowy:
      </h3>
      <label className="contact-form-field">
        <span>Imię</span>
        <input type="text" />
      </label>
      <label className="contact-form-field">
        <span>Nazwisko</span>
        <input type="text" />
      </label>
      <label className="contact-form-field">
        <span>Numer telefonu</span>
        <input type="tel" />
      </label>
      <label className="contact-form-field">
        <span>E-mail</span>
        <input type="email" />
      </label>
      <label className="contact-form-field">
        <span>Wiadomość</span>
        <textarea className="resize-none h-60"></textarea>
      </label>
      <div className="w-full text-center">
        <button
          className="bg-black/80 hover:bg-black text-white px-20 py-2 rounded"
          type="submit"
        >
          Wyślij
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
