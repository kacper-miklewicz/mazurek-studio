interface OfferPointProps {
  title?: string;
  paragraphs: string[];
}

const OfferPoint: React.FC<OfferPointProps> = ({ title, paragraphs }) => {
  return (
    <li className="offer-point py-8 flex w-full md:py-10">
      <div>
        {title && (
          <p className="flex items-center text-xl pb-4 mb-6 text-darker border-b border-darker font-bold">
            {title}
          </p>
        )}
        <ul className="pl-6">
          {paragraphs.map(paragraph => (
            <li className="mb-2 list-[square] marker:text-darker s:text-[18px]">
              {paragraph}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default OfferPoint;
