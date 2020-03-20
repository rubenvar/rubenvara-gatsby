import styled, { css } from 'styled-components';

const StyledPost = styled.div`
  .breadcrumb {
    margin-top: 20px;
    color: ${props => props.theme.grey500};
    font-size: 0.75rem;
    margin-bottom: 36px;
    a {
      color: ${props => props.theme.grey500};
      text-decoration: none;
    }
    &__link {
    }
    &__sep {
      margin: 0 6px;
      font-size: 0.6rem;
    }
  }
  .post__header {
    margin-bottom: 36px;
    h1 {
      font-family: 'Victor Mono', monospace;
      font-size: 2.2rem;
      margin: 0 0 17px;
      font-weight: 400;
      letter-spacing: -4px;
      color: ${props => props.theme.primary800};
    }
    button,
    .post__liker {
      font-size: 0.85rem;
      border: none;
      box-shadow: none;
      background: none;
      padding: 3px 0;
      margin: 0;
      transition: all 0.25s;
      line-height: 1.1rem;
      > span {
        padding: 3px 6px;
        background: ${props => props.theme.grey200};
        margin-right: 14px;
        color: ${props => props.theme.grey800};
      }
    }
    p.post__liker {
      color: ${props => props.theme.grey600};
    }
    button {
      color: ${props => props.theme.primary600};
      &:hover {
        color: ${props => props.theme.primary800};
        background: ${props => props.theme.grey100};
        span {
        }
      }
    }
  }
`;

const StyledContent = styled.div`
  font-family: Martel, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  h2 {
    margin: 42px 0 20px;
    font-size: 1.6rem;
    font-family: 'Victor Mono', monospace;
  }
  h3 {
    margin: 32px 0 16px;
    font-size: 1.35rem;
    font-family: 'Victor Mono', monospace;
  }
  p {
    margin: 0 0 20px 0;
    /* line-height: 1.85rem; */
    line-height: 2rem;
    a {
      text-decoration: none;
      color: ${props => props.theme.primary500};
      background: linear-gradient(
        to top,
        transparent 20%,
        ${props => props.theme.grey300} 20%,
        ${props => props.theme.grey300} 42%,
        transparent 42%
      );
      &:hover {
        color: ${props => props.theme.primary800};
      }
    }
  }
  ul {
    line-height: 1.6rem;
    margin: 0 0 20px;
    li {
      margin: 0 0 12px;
      &::marker {
        color: ${props => props.theme.primary500};
      }
    }
  }
  blockquote {
    margin: 30px 0;
    padding: 20px 0 20px 30px;
    border-left: 3px solid ${props => props.theme.grey600};
    font-weight: 700;
    background-color: ${props => props.theme.grey200};
    color: ${props => props.theme.grey600};
    p {
      font-size: 1.1rem;
      margin: 0;
    }
  }
`;

const StyledPostMeta = styled.div`
  color: ${props => props.theme.grey500};
  font-size: 0.85rem;
  &__read {
  }
  .meta__cats {
    p {
      margin: 0;
      a {
        color: ${props => props.theme.grey500};
      }
    }
  }
`;

const StyledNav = css`
  background: ${props => props.theme.whiteTr};
  div {
    a {
      transition: all 0.3s;
      color: ${props => props.theme.primary400};
      text-decoration: none;
      height: 100%;
      display: block;
      border: 3px solid ${props => props.theme.grey200};
      background: ${props => props.theme.grey100};
      font-size: 1.35rem;
      &.next {
        text-align: right;
      }
      &:hover {
        border-color: ${props => props.theme.grey300};
        background: ${props => props.theme.grey200};
      }
      &:focus {
        outline: none;
        border-color: ${props => props.theme.focus};
        transition: none;
      }
    }
  }
`;

export { StyledPost, StyledContent, StyledPostMeta, StyledNav };
