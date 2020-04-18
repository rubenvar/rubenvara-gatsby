import styled from 'styled-components';

const StyledArchiveHeader = styled.div`
  margin: 0 0 73px;
  h1 {
    margin-bottom: 32px;
    span {
      background: ${props => props.theme.grey200};
      padding: 0 4px;
    }
  }
  p {
    color: ${props => props.theme.grey700};
    margin: 0 0 20px;
    &.updated {
      color: ${props => props.theme.grey400};
      font-size: 0.85rem;
      font-style: italic;
    }
  }
`;

export default StyledArchiveHeader;
