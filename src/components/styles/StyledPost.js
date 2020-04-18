import styled from 'styled-components';

const StyledPost = styled.div`
  position: relative;
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
  }
  .twitter {
    background: ${props => props.theme.twitterGradient};
    padding: 4px;
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
      width: 85%;
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

const StyledPostLiker = styled.div`
  border: 1px solid plum;
  position: sticky;
  top: 350px;
  margin-left: -200px;
  width: 80px;
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
`;

const StyledContent = styled.div`
  margin-bottom: ${props => (props.isPage ? '73px' : 0)};
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

export { StyledPost, StyledPostLiker, StyledContent, StyledPostMeta };
