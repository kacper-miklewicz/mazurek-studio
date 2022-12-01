import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/error-message/ErrorMessage";
import FormSubmitButton from "../../components/form-submit-button/FormSubmitButton";
import ContactFormField from "./ContactFormField";

const ContactForm: React.FC = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="font-bold mb-8 s:text-xl">
        Lub przez formularz kontaktowy:
      </h3>

      <ContactFormField title="Imię">
        <input {...register("firstName", { required: true })} type="text" />
        {errors.firstName && <ErrorMessage message="Podaj imię" />}
      </ContactFormField>

      <ContactFormField title="Nazwisko">
        <input {...register("lastName", { required: true })} type="text" />
        {errors.lastName && <ErrorMessage message="Podaj nazwisko" />}
      </ContactFormField>

      <ContactFormField title="Numer telefonu">
        <input
          {...register("phoneNumber", {
            required: true,
          })}
          type="tel"
        />
        {errors.phoneNumber && <ErrorMessage message="Podaj numer telefonu" />}
      </ContactFormField>

      <ContactFormField title="E-mail">
        <input
          {...register("email", {
            required: true,
          })}
          type="email"
        />
        {errors.email && <ErrorMessage message="Podaj e-mail" />}
      </ContactFormField>

      <label className="contact-form-field">
        <span>Wiadomość</span>
        <textarea
          {...register("message", { required: true })}
          className="resize-none h-60"
        ></textarea>
        {errors.message && <ErrorMessage message="Wpisz wiadomość" />}
      </label>

      <FormSubmitButton text="Wyślij" />
    </form>
  );
};

export default ContactForm;
