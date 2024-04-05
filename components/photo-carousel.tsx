import Image from 'next/image';
type PhotoCarouselProps = {
  instagramArray: any[]; // replace any with the actual type if known
};

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ instagramArray }) => {
  return (
    <div className="carousel carousel-center  w-full space-x-4  rounded-box p-4">
      {instagramArray.map((item, index) => (
        <div className="carousel-item" key={index}>
          <Image
            className="cover rounded-box"
            width={200}
            height={200}
            alt={item.caption}
            src={item.media_url}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoCarousel;
