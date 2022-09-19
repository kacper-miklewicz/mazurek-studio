interface PhotoWrapperProps {
  photoUrl: string;
}

const PhotoWrapper: React.FC<PhotoWrapperProps> = ({ photoUrl }) => {
  return (
    <div className="w-full aspect-square overflow-hidden max-w-[450px]">
      <img src={photoUrl} className="w-full h-full object-cover" />
    </div>
  );
};

export default PhotoWrapper;
