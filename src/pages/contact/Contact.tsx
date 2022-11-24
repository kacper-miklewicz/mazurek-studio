import ContactOptions from "./ContactOptions";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <main className="py-10 s:py-16">
      <section className="mx-auto max-w-[800px] px-10 xs:px-20 s:px-40">
        <h1 className="section-title mb-16">Zapraszam do kontaktu!</h1>
        <div className="flex flex-col gap-10">
          <ContactOptions />
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;
