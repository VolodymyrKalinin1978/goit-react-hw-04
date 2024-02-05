import styled from '@emotion/styled';

export const ContainerLoadMore = styled.div`
  & > button {
    font-weight: 500;
    font-size: 22px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    display: block;
    margin: 0 auto;
    padding: 16px 32px;
    cursor: pointer;
    background-color: #4d5ae5;
    color: white;
    border-radius: 4px;
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border: none;
    transition-property: background-color;
    transition-duration: 250ms;
  }

  & > button:hover {
    background-color: #404bbf;
  }
`;
