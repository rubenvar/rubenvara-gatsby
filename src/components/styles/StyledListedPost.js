import styled, { css } from 'styled-components';

const StyledListedPost = styled.div`
  background: ${props => props.theme.whiteTr};
  box-shadow: ${props => props.theme.shadow200};
  padding: ${props => props.theme.gap30} ${props => props.theme.gap40};
  margin: 0 0 ${props => props.theme.gap110};
  transition: all 0.5s;
  position: relative;
  transform: rotate(-1deg);
  &::before,
  &::after {
    transition: all 0.3s;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${props => props.theme.whiteTr};
    box-shadow: ${props => props.theme.shadow100};
  }
  &::before {
    z-index: -1;
  }
  &::after {
    z-index: -2;
    transform: rotate(3deg);
  }
  &:hover {
    transform: scale(1.01) rotate(-1deg);
    box-shadow: ${props => props.theme.shadow300};
    &::before,
    &::after {
      box-shadow: ${props => props.theme.shadow200};
    }
  }
  h2 {
    font-family: 'Victor Mono', monospace;
    a {
      text-decoration: none;
      color: ${props => props.theme.primary600};
      &:hover {
        color: ${props => props.theme.primary900};
      }
    }
  }
  .description {
    margin-top: ${props => props.theme.gap60};
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    > span {
      color: ${props => props.theme.grey500};
      &.meta__read {
        justify-self: center;
      }
      &.meta__cats {
        justify-self: end;
        .meta__cat {
          margin-right: ${props => props.theme.gap10};
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
