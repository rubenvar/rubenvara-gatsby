import styled, { css } from 'styled-components';

const StyledListedPost = styled.div`
  margin-bottom: ${props => props.theme.gap100};
  h2 {
    font-weight: 400;
    font-size: ${props => props.theme.fontSize50};
    margin-bottom: ${props => props.theme.gap20};
    a {
      text-decoration: none;
      color: ${props => props.theme.primary600};
      &:hover {
        color: ${props => props.theme.primary900};
      }
    }
  }
  .description {
    color: ${props => props.theme.grey500};
    font-size: 0.75rem;
    line-height: 1.35rem;
    a {
      color: ${props => props.theme.grey800};
      text-decoration: none;
      &:hover {
        color: ${props => props.theme.primary600};
      }
    }
  }
  .meta {
    font-size: 0.75rem;
    margin: ${props => props.theme.gap50} 0 0;
    > span {
      color: ${props => props.theme.grey500};
      &.meta__cats {
        display: block;
        justify-self: end;
        .meta__cat {
          margin-right: ${props => props.theme.gap10};
          &::before {
            content: '#';
          }
        }
      }
    }
  }
`;

export default StyledListedPost;
