import ReactModal from 'react-modal';
import { Overlay, ModalStyled } from './Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Modal = ({ isOpen, onClose, srcLarge, alt }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Large Image"
    >
      <Overlay>
        <ModalStyled>
          <img src={srcLarge} alt={alt} />
        </ModalStyled>
      </Overlay>
    </ReactModal>
  );
};

ReactModal.setAppElement('#root');
