import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img src={src} alt={alt} className={css['ImageGalleryItem-image']} />
    </li>
  );
};

// openModal = photo => {
//   this.setState({ showModal: true, photo });
// };

// closeModal = () => {
//   this.setState({ showModal: false, photo: '' });
// };
