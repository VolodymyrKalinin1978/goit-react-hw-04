// import { nanoid } from 'nanoid';
import { ImageCard } from './ImageCard/ImageCard';
import { ContainerUl } from './ImageGallery.styled';
import { nanoid } from 'nanoid';

export const ImageGallery = ({ items, openModal }) => {
  return (
    <ContainerUl>
      {items.map(item => (
        <li key={nanoid()} onClick={() => openModal(item.id)}>
          <ImageCard items={item} />
        </li>
      ))}
    </ContainerUl>
  );
};
