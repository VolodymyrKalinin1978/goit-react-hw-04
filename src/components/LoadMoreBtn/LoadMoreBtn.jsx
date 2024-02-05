import { ContainerLoadMore } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <ContainerLoadMore>
      <button type="button" onClick={onLoadMore}>
        Load More...{' '}
      </button>
    </ContainerLoadMore>
  );
};
