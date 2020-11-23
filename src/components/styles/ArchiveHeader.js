import styled from 'styled-components';

const StyledArchiveHeader = styled.div`
  margin: 0 0 var(--gap100);
  @media only screen and (min-width: 480) {
    margin-bottom: var(--gap100);
  }
  h1 {
    margin-bottom: var(--gap30);
    @media only screen and (min-width: 480) {
      margin-bottom: var(--gap70);
    }
    span {
      background: var(--grey200);
      padding: 0 var(--gap10);
    }
  }
  p {
    color: var(--grey600);
    margin: 0 0 var(--gap50);
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default StyledArchiveHeader;
