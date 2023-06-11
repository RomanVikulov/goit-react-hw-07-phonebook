import styled from 'styled-components';

const Item = styled.li`
  font-size: 16px;
  font-weight: 500;
  color: #2a2a2a;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export { Item };
