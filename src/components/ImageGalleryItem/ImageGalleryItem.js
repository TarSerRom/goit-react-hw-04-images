import './ImageGalleryItem.css'

export function ImageGalleryItem({ webformatURL, largeImageURL, tags, onOpenModal }) {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        alt={tags}
        src={webformatURL}
        data-source={largeImageURL}
        onClick={onOpenModal}
      />
    </li>
  );
}