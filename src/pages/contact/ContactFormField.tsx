interface ContactFormFieldProps {
  title: string;
  children: React.ReactNode;
}

const ContactFormField: React.FC<ContactFormFieldProps> = ({
  title,
  children,
}) => {
  return (
    <label className="contact-form-field">
      <span>{title}</span>
      {children}
    </label>
  );
};

export default ContactFormField;
