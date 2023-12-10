import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img src={src} alt={alt} className={css['ImageGalleryItem-image']} />
    </li>
  );
};
