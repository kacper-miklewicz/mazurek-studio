interface OfferPointProps {
  number: number;
  mainText: string;
  secondaryText?: string;
}

const OfferPoint: React.FC<OfferPointProps> = ({
  number,
  mainText,
  secondaryText,
}) => {
  return (
    <li className="offer-point py-6 flex w-full md:py-16">
      <div className="flex items-center px-6 mr-6 text-3xl text-darker font-bold border-r border-darker">
        {number}
      </div>
      <div>
        <p className="text-lg leading-10">{mainText}</p>
        {secondaryText && <p className="text-sm">{secondaryText}</p>}
      </div>
    </li>
  );
};

export default OfferPoint;
