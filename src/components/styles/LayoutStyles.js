import styled from 'styled-components';

const Main = styled.main`
  display: grid;
  grid-template-columns:
    1fr min(var(--maxWidth), calc(100% - 40px))
    1fr;
  grid-column-gap: var(--gap50);
  > * {
    grid-column: 2;
  }
  /* .gatsby-highlight, */
  .full-bleed {
    width: 100%;
    grid-column: 1 / -1;
  }
  margin-top: var(--gap60);
  /* .gatsby-highlight pre code {
    display: block;
    width: 100%;
    max-width: var(--maxCodeWidth);
    margin: 0 auto;
  } */
`;

const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 var(--gap50);
  position: relative;
  @media only screen and (min-width: 740px) {
    width: var(--maxWidth);
    margin: 0 auto;
  }
`;

export { Wrapper, Main };
