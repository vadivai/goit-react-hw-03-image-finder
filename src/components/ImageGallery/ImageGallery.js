import { ImageGalleryItem } from 'components';
import css from './ImageGallery.module.css';
import data from '../service/data.json';

const URL =
  'https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?w=740&t=st=1702128478~exp=1702129078~hmac=f6fb190977739c94ddb6975688136a975c8ca0e2765965d6b91f2f8befdd420f';
export const ImageGallery = () => {
  console.log('URL1', URL);
  return (
    <ul className={css.ImageGallery}>
      {data.map(({ id, src, alt }) => {
        return <ImageGalleryItem key={id} src={src} alt={alt} />;
      })}
    </ul>
  );
};
