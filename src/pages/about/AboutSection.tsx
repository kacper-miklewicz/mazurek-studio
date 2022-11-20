interface AboutSectionProps {
  title: string;
  mobileImg: string;
  desktopImg: string;
  className?: string;
  children: React.ReactNode;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  mobileImg,
  desktopImg,
  className,
  children,
}) => {
  return (
    <>
      <h2 className="section-title md:mb-10">{title}</h2>
      <section
        className={`${className} about-section flex flex-col gap-6 xs:gap-12 md:items-center md:flex-row md:mb-20`}
      >
        <div className="md:w-1/2 md:flex-grow md:mr-10 l:mr-10">
          <picture className="mx-auto">
            <source media="(min-width: 1280px)" srcSet={desktopImg} />
            <img src={mobileImg} alt="about section" />
          </picture>
        </div>
        <div className="md:w-1/2">{children}</div>
      </section>
    </>
  );
};

export default AboutSection;
