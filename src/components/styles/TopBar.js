import styled from 'styled-components';

const TopBar = styled.div`
  width: 100%;
  height: 5px;
  background: ${props => props.theme.primary500};
  top: 0;
  position: sticky;
`;

export default TopBar;
