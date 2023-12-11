// import css from './Button.module.css';
import { ButtonStyled } from './Button.styled';

export const Button = ({ children }) => {
  return <ButtonStyled type="button">{children}</ButtonStyled>;
};
