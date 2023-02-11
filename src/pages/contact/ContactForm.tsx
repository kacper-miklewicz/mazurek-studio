import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { ModalSeverity } from "./types";
import { EMAILJS_DATA, MODAL_MESSAGE } from "./consts";

import ErrorMessage from "../../components/error-message/ErrorMessage";
import FormSubmitButton from "../../components/form-submit-button/FormSubmitButton";
import ContactFormField from "./ContactFormField";

interface ContactFormProps {
  displayModal: (message: string, severity: ModalSeverity) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ displayModal }) => {
  const [isPending, setIsPending] = useState(false);
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_DATA;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      message: data.message,
    };

    try {
      setIsPending(true);
      await emailjs.send(SERVICE_ID!, TEMPLATE_ID!, formData, PUBLIC_KEY!);
      displayModal(MODAL_MESSAGE.SUCCESS, "info");
    } catch (err) {
      console.log(err);
      displayModal(MODAL_MESSAGE.ERROR, "error");
    } finally {
      setIsPending(false);
    }

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="font-bold mt-6 mb-6 s:text-lg md:mb-2">
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
          className="resize-none h-40"
        ></textarea>
        {errors.message && <ErrorMessage message="Wpisz wiadomość" />}
      </label>

      <FormSubmitButton text={isPending ? "Wysyłanie..." : "Wyślij"} />
    </form>
  );
};

export default ContactForm;
