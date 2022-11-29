import ContactOptions from "./ContactOptions";
import ContactForm from "./ContactForm";
import ContactPhotos from "./ContactPhotos";

const Contact: React.FC = () => {
  return (
    <main className="py-10 s:py-16">
      <section className="mx-auto max-w-[600px] md:max-w-[1280px] px-10 xs:px-20">
        <h1 className="section-title">Zapraszam do kontaktu!</h1>
        <div className="flex flex-col md:flex-row-reverse md:justify-between">
          <ContactPhotos />
          <div className="flex flex-col gap-10 md:mr-30 md:grow md:mr-12 md:max-w-[450px]">
            <ContactOptions />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
