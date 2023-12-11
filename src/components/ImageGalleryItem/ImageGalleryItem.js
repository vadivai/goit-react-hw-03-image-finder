import css from './ImageGalleryItem.module.css';
import { ImgStyled, ItemStyled } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <ItemStyled>
      <ImgStyled src={src} alt={alt} />
    </ItemStyled>
  );
};
