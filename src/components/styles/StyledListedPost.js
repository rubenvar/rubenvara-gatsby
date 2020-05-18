import styled, { css } from 'styled-components';

const StyledListedPost = styled.div`
  margin-bottom: ${props => props.theme.gap110};
  h2 {
    font-weight: 400;
    font-size: ${props => props.theme.fontSize60};
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
    font-size: ${props => props.theme.fontSize30};
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
    font-size: ${props => props.theme.fontSize30};
    margin: ${props => props.theme.gap50} 0 0;
    text-align: right;
    > span {
      color: ${props => props.theme.grey500};
      &.meta__sep {
        margin: 0 ${props => props.theme.gap40};
      }
      &.meta__cats {
        justify-self: end;
        .meta__cat {
          margin-left: ${props => props.theme.gap20};
          &:first-child {
            margin-left: 0;
          }
          a {
            text-decoration: none;
            color: ${props => props.theme.grey500};
            &:hover {
              color: ${props => props.theme.grey800};
            }
            &::before {
              content: '#';
            }
          }
        }
      }
    }
  }
`;

export default StyledListedPost;
