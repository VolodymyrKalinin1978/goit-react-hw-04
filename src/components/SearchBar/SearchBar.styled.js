import styled from '@emotion/styled';
import { ImSearch } from 'react-icons/im';

export const SearchIcon = styled(ImSearch)`
  width: 18px;
  height: 16px;
`;

export const ContainerSearch = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #3f57b3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  & > form {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

    & > div {
      display: flex;
      position: relative;

      & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        cursor: pointer;
        outline: none;
        border: none;
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
      }
      & > input {
        max-width: 350px;
        max-height: 50px;
        padding-left: 35px;
        border: none;
        outline: none;
        border-radius: 4px;
      }
      & > input:focus {
        outline: none;
      }
      & > input::placeholder {
        font-size: 22px;
      }
    }
  }
`;
