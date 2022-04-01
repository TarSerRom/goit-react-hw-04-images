import {ImageGalleryItem} from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';
import './ImageGallery.css'


function ImageGallery({ images, onOpenModal }) {
  return (
    <ul className="ImageGallery">
       {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onOpenModal={onOpenModal}
        />
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
export default ImageGallery;