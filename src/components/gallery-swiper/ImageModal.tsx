import {
  useEffect,
  Dispatch,
  KeyboardEventHandler,
  SetStateAction,
  useState,
} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import { HiOutlineX } from "react-icons/hi";
import { CSSSelector } from "swiper/types";

interface ImageModalProps {
  photos: string[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  initialSlideIndex: number;
}

const ImageModal: React.FC<ImageModalProps> = ({
  photos,
  setIsOpen,
  initialSlideIndex,
}) => {
  // TODO: Add resize detection to hide navigation on mobile devices
  const [isMobile, setIsMobile] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="fixed flex justify-center top-0 left-0 w-full h-full bg-black/50 z-30">
      <div
        onClick={() => setIsOpen(false)}
        className="absolute top-3 right-3 text-white z-10 cursor-pointer"
      >
        <HiOutlineX className="text-2xl" />
      </div>
      <Swiper
        slidesPerView={1}
        initialSlide={initialSlideIndex}
        modules={[Navigation, Pagination, Keyboard]}
        navigation
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        pagination={{
          clickable: true,
          bulletElement: "swiper-pagination-bullet",
        }}
        className="select-none"
      >
        {photos.map(url => (
          <SwiperSlide className="flex justify-center items-center" key={url}>
            <img
              className="w-full block max-h-[85vh] object-contain"
              src={url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageModal;
