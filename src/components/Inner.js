import styled from 'styled-components';

const Inner = styled.div`
  width: ${props => props.theme.maxWidth};
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  main {
    margin-top: ${props => (!props.isPost ? '36px' : 0)};
  }
`;

export default Inner;
