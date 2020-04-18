import styled, { css } from 'styled-components';

const StyledPost = styled.div`
  .post__header {
    margin: 0 0 42px;
    h1 {
      font-family: 'Rubik', 'Victor Mono', monospace;
      font-size: 3rem;
      margin: 0;
      font-weight: 400;
      letter-spacing: -1px;
      color: ${props => props.theme.primary800};
      color: ${props => props.theme.primary600};
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
      line-height: 1.15rem;
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
  .twitter {
    background: ${props => props.theme.twitterGradient};
    padding: 0 4px;
    margin-top: 55px;
    margin-bottom: 96px;
    position: relative;
    overflow: hidden;
    svg {
      position: absolute;
      width: 73px;
      height: 73px;
      top: 0;
      right: 0;
    }
    p {
      position: relative;
      font-family: Martel, Cambria, Cochin, Georgia, Times, 'Times New Roman',
        serif;
      line-height: 1.8rem;
      a {
        color: ${props => props.theme.twitter900};
        &:hover {
          color: ${props => props.theme.twitter500};
        }
      }
    }
  }
`;

const StyledContent = styled.div`
  font-family: Martel, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  h2 {
    margin: 55px 0 20px;
    font-size: 2.2rem;
    font-family: 'Rubik', 'Victor Mono', monospace;
    font-weight: 400;
  }
  h3 {
    margin: 42px 0 17px;
    font-size: 1.85rem;
    font-family: 'Rubik', 'Victor Mono', monospace;
    font-weight: 400;
  }
  h4 {
    margin: 32px 0 17px;
    font-size: 1.6rem;
    font-family: 'Rubik', 'Victor Mono', monospace;
    font-weight: 400;
  }
  p,
  li {
    font-size: 1.15rem;
  }
  p {
    margin: 0 0 20px 0;
    line-height: 2rem;
    a {
      text-decoration: none;
      color: ${props => props.theme.primary500};
      background: linear-gradient(
        to top,
        transparent 20%,
        ${props => props.theme.grey300} 20%,
        ${props => props.theme.grey300} 30%,
        transparent 30%
      );
      transition: all 0.5s;
      &:hover {
        color: ${props => props.theme.primary800};
      }
    }
  }
  ul,
  ol {
    line-height: 2rem;
    margin: 0 0 20px;
    li {
      margin: 0 0 12px;
      &::marker {
        color: ${props => props.theme.primary500};
      }
    }
  }
  blockquote {
    margin: 32px 0;
    padding: 20px 0 20px 32px;
    border-left: 3px solid ${props => props.theme.grey600};
    font-weight: 700;
    background-color: ${props => props.theme.grey200};
    color: ${props => props.theme.grey600};
    p {
      font-size: 1.15rem;
      margin: 0;
    }
  }
`;

const StyledPostMeta = styled.div`
  /* border-bottom: 1px solid ${props => props.theme.grey300}; */
  width: 75%;
  color: ${props => props.theme.grey500};
  font-size: 0.85rem;
  margin: 42px 0 96px;
  .meta__date {
    .updated {
      font-size: 0.75rem;
    }
  }
  .meta__cats {
    p {
      margin: 12px 0 0;
      span {
        margin-left: 8px;
        a {
          color: ${props => props.theme.grey500};
        }
      }
    }
  }
`;

const StyledPaginationDefault = css`
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

export { StyledPost, StyledContent, StyledPostMeta, StyledPaginationDefault };
