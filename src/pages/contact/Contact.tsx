import ContactOptions from "./ContactOptions";
import ContactForm from "./ContactForm";
import ContactPhotos from "./ContactPhotos";

const Contact: React.FC = () => {
  return (
    <main className="py-10 s:py-16">
      <section className="mx-auto h-fit max-w-[600px] md:max-w-[1300px] px-10 xs:px-24">
        <h1 className="section-title">Zapraszam do kontaktu!</h1>
        <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center">
          <ContactPhotos />
          <div className="flex flex-col md:mr-12 grow max-w-[400px]">
            <ContactOptions />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
