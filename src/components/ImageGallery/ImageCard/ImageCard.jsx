import { Images } from './ImageCard.styled';

export const ImageCard = ({ items }) => {
  return (
    <div>
      <Images src={items.urls.small} alt={items.alt_description} />
    </div>
  );
};
