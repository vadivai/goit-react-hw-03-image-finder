// При клике по элементу галереи должно открываться модальное окно с темным оверлеем и отображаться большая версия изображения. Модальное окно должно закрываться по нажатию клавиши ESC или по клику на оверлее.

// Внешний вид похож на функционал этого VanillaJS-плагина, только вместо белого модального окна рендерится изображение (в примере нажми Run). Анимацию делать не нужно!

// <div class="overlay">
//   <div class="modal">
//     <img src="" alt="" />
//   </div>
// </div>

//import toast, { Toaster } from 'react-hot-toast';
// <Toaster />;

import css from './Modal.module.css';

export const Modal = ({ children }) => {
  // return <div className={css.Overlay}>{children}</div>;
};

import ReactModal from 'react-modal';

const styles = {
  overlay: {
    backgroundColor: 'orange',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 20,
  },
};

ReactModal.setAppElement('#root');

export const TopicModal = ({ isOpen, onClose, topic }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={styles}
      contentLabel="Topic modal"
    >
      <p>
        <b>{topic}</b>
      </p>
      <button onClick={onClose}>Close</button>
    </ReactModal>
  );
};
