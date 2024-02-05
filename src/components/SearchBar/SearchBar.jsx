import { ContainerSearch, SearchIcon } from './SearchBar.styled';

export const SearchBar = ({ onSearch }) => {
  return (
    <ContainerSearch>
      <form onSubmit={onSearch}>
        <div>
          <button type="submit">
            <SearchIcon />
          </button>
          <input
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search images and photos"
          />
        </div>
      </form>
    </ContainerSearch>
  );
};
