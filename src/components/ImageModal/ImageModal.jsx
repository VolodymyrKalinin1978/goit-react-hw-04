import { Descriptions, ImageMolal, WraperModal } from './ImageModal.styled';
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '62%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -60%)',
    maxWidth: '70%',
    maxHeight: '82vh',
    overflow: 'hidden',
    padding: '0',
    borderRadius: '8px',
  },
};
export const ImageModal = ({ modalIsOpen, selectedImage, bigImages, closeModal }) => {
  return (
    <>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <WraperModal>
          <ImageMolal src={bigImages()} />

          {selectedImage && (
            <Descriptions>
              <p>Autor: {selectedImage.user.name}</p> <span>Likes: {selectedImage.likes}</span>
            </Descriptions>
          )}
        </WraperModal>
      </Modal>
    </>
  );
};
