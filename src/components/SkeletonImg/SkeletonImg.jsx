import { ContainerUl } from 'components/ImageGallery/ImageGallery.styled';

import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonImage, Waper } from './SkeletonImg.styled';

export const SkeletonImg = ({ cards }) => {
  return (
    <ContainerUl>
      {Array(cards)
        .fill(0)
        .map((card, index) => (
          <li key={index}>
            <Waper>
              <SkeletonImage />
            </Waper>
          </li>
        ))}
    </ContainerUl>
  );
};
