import { Dispatch, MouseEventHandler, SetStateAction } from "react";

interface PhotoWrapperProps {
  photoUrl: string;
  index: number;
  openModal: () => void;
  setActiveSlideIndex: Dispatch<SetStateAction<number>>;
}

const PhotoWrapper: React.FC<PhotoWrapperProps> = ({
  photoUrl,
  index,
  openModal,
  setActiveSlideIndex,
}) => {
  const handleClick = () => {
    openModal();
    setActiveSlideIndex(index);
  };

  return (
    <div
      onClick={() => handleClick()}
      className="w-full aspect-square overflow-hidden max-w-[450px] cursor-pointer"
    >
      <img src={photoUrl} className="w-full h-full object-cover" />
    </div>
  );
};

export default PhotoWrapper;
