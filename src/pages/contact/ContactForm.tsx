interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  return (
    <form>
      <h3 className="font-bold mb-8">Lub przez formularz kontaktowy:</h3>
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
    </form>
  );
};

export default ContactForm;
