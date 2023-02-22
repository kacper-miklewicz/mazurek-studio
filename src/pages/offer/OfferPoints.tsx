import OfferPoint from "./OfferPoint";

import { finalParagraph, offerPoints, secondParagraph } from "./consts";

interface OfferPointsProps {}

const OfferPoints: React.FC<OfferPointsProps> = () => {
  return (
    <>
      <p className="section-text mt-16">{secondParagraph}</p>
      <ul className="w-fit mx-auto">
        {offerPoints.map((op, index) => (
          <OfferPoint
            key={op.mainText}
            number={index + 1}
            mainText={op.mainText}
            secondaryText={op.secondaryText}
            tertiaryText={op.tertiaryText}
          />
        ))}
      </ul>
      <p className="section-text mt-10">{finalParagraph}</p>
    </>
  );
};

export default OfferPoints;
