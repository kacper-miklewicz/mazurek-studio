import PhotoWrapper from "./PhotoWrapper";

interface ProjectPhotoGalleryProps {
  photos: string[];
}

const ProjectPhotoGallery: React.FC<ProjectPhotoGalleryProps> = ({
  photos,
}) => {
  return (
    <div className="grid justify-center gap-2 xs:grid-cols-2 s:grid-cols-3 md:grid-cols-4">
      {photos.map(url => (
        <PhotoWrapper key={url} photoUrl={url} />
      ))}
    </div>
  );
};

export default ProjectPhotoGallery;
