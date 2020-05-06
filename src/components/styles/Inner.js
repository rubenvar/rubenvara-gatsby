import styled from 'styled-components';

const Inner = styled.div`
  width: ${props => props.theme.maxWidth};
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  main {
    margin-top: ${props => props.theme.gap80};
  }
`;

export default Inner;
