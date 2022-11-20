import { MouseEventHandler, useState } from "react";
import ImageModal from "../../components/gallery-swiper/ImageModal";
import PhotoWrapper from "./PhotoWrapper";

interface ProjectPhotoGalleryProps {
  photos: string[];
}

const ProjectPhotoGallery: React.FC<ProjectPhotoGalleryProps> = ({
  photos,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="grid justify-center gap-2">
      {photos.map((url, index) => (
        <PhotoWrapper
          key={url}
          photoUrl={url}
          index={index}
          openModal={openModal}
          setActiveSlideIndex={setActiveSlideIndex}
        />
      ))}
      {isModalOpen && (
        <ImageModal
          photos={photos}
          setIsOpen={setIsModalOpen}
          initialSlideIndex={activeSlideIndex}
        />
      )}
    </div>
  );
};

export default ProjectPhotoGallery;
