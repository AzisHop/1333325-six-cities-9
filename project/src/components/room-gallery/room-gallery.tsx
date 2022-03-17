interface PropertyGalleryProps {
  images: string[];
}
export default function RoomGallery({images} : PropertyGalleryProps): JSX.Element {
  let imgId = 0;
  const gallery = images.map((image, index) => (
    <div className="property__image-wrapper" key={imgId++}>
      <img className="property__image" src={image} alt="Photo studio"/>
    </div>
  ));
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {gallery}
      </div>
    </div>
  );
}
