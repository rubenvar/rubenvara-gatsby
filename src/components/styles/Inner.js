import styled from 'styled-components';

const Inner = styled.div`
  max-width: 100%;
  margin: 0 ${props => props.theme.gap50};
  position: relative;
  main {
    margin-top: ${props => props.theme.gap60};
    @media only screen and (min-width: 700px) {
      margin-top: ${props => props.theme.gap80};
    }
  }
  @media only screen and (min-width: 740px) {
    width: ${props => props.theme.maxWidth};
    margin: 0 auto;
  }
`;

export default Inner;
