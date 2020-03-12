import styled from 'styled-components';

const Inner = styled.div`
  width: ${props => props.theme.maxWidth};
  max-width: 100%;
  margin: 0 auto;
`;

export default Inner;
