import styled from '@emotion/styled';

export const Button = styled.button`
  min-width: 100px;
  padding: 10px 20px;
  border: none;
  border: 2px solid #fff;
  font-size: 25px;
  color: #fff;
  background-color: blue;
  text-align: center;
  transition: all 200ms linear;
  cursor: pointer;
  :hover {
    border: 2px solid #060ef3;
    color: #060ef3;
    background-color: #fff;
  }
`;
