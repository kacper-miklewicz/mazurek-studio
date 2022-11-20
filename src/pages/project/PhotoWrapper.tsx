import {
  Dispatch,
  KeyboardEventHandler,
  MouseEventHandler,
  SetStateAction,
} from "react";

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

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = event => {
    if (event.key === "Enter") {
      openModal();
      setActiveSlideIndex(index);
    }
  };

  return (
    <div
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="w-full overflow-hidden cursor-pointer"
    >
      <img src={photoUrl} className="w-full h-full object-cover" />
    </div>
  );
};

export default PhotoWrapper;
