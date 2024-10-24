import { useState } from "react";
import image1 from "../pictures/gallery/IMG-01.jpg";
import image2 from "../pictures/gallery/IMG-02.jpg";
import image3 from "../pictures/gallery/IMG-03.jpg";
import image4 from "../pictures/gallery/IMG-04.jpg";
import image5 from "../pictures/gallery/IMG-05.jpg";
import image6 from "../pictures/gallery/IMG-06.jpg";
import image7 from "../pictures/gallery/IMG-07.jpg";
import image8 from "../pictures/gallery/IMG-08.jpg";
import image9 from "../pictures/gallery/IMG-09.jpg";
import image10 from "../pictures/gallery/IMG-10.jpg";
const images = [
  {
    src: image1,
    full: image1,
    alt: "Image 1",
  },
  {
    src: image2,
    full: image2,
    alt: "Image 2",
  },
  {
    src: image3,
    full: image3,
    alt: "Image 3",
  },
  {
    src: image4,
    full: image4,
    alt: "Image 4",
  },
  {
    src: image5,
    full: image5,
    alt: "Image 5",
  },
  {
    src: image6,
    full: image6,
    alt: "Image 6",
  },
  {
    src: image7,
    full: image7,
    alt: "Image 7",
  },
  {
    src: image8,
    full: image8,
    alt: "Image 8",
  },
  {
    src: image9,
    full: image9,
    alt: "Image 9",
  },
  {
    src: image10,
    full: image10,
    alt: "Image 10",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(images[0].full);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <div>
      <div className="image-grid">
        {images.map((image, index) => (
          <div className={`gallery-img`} key={index}>
            <img
              key={index}
              className={` ${isClicked ? "clicked" : ""}`}
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
