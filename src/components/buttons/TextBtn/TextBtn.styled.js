import styled from 'styled-components';

const TextBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #2a2a2a;
  background-color: rgba(110, 140, 180, 0.5);
  border-radius: 5px;
  border: 1px solid rgba(130, 130, 130, 0.3);
  box-shadow: 3px 5px 10px -2px rgba(70, 100, 150, 0.5);
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 1px -1px 10px -2px rgba(70, 100, 150, 0.5) inset;
  }
`;

export default TextBtn;