import styled from 'styled-components';

const StyledPost = styled.div`
  position: relative;
  .post__header {
    margin: 0 0 ${props => props.theme.gap80};
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
    padding: ${props => props.theme.gap10};
    margin-top: ${props => props.theme.gap90};
    margin-bottom: ${props => props.theme.gap110};
    position: relative;
    overflow: hidden;
    svg {
      position: absolute;
      width: ${props => props.theme.gap100};
      height: ${props => props.theme.gap100};
      top: 0;
      right: 0;
      .primary {
        fill: ${props => props.theme.twitter500};
      }
      .secondary {
        fill: none;
      }
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

const StyledContent = styled.div`
  margin-bottom: ${props => (props.isPage ? '73px' : 0)};
  font-family: Martel, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  h2 {
    margin: ${props => props.theme.gap90} 0 ${props => props.theme.gap50};
    font-size: 2.2rem;
    font-family: 'Rubik', 'Victor Mono', monospace;
    font-weight: 400;
  }
  h3 {
    margin: ${props => props.theme.gap80} 0 ${props => props.theme.gap40};
    font-size: 1.85rem;
    font-family: 'Rubik', 'Victor Mono', monospace;
    font-weight: 400;
  }
  h4 {
    margin: ${props => props.theme.gap70} 0 ${props => props.theme.gap40};
    font-size: 1.6rem;
    font-family: 'Rubik', 'Victor Mono', monospace;
    font-weight: 400;
  }
  p,
  li {
    font-size: 1.15rem;
  }
  p {
    margin: 0 0 ${props => props.theme.gap50} 0;
    line-height: 2rem;
    /* links with undershadow only in content */
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
    margin: 0 0 ${props => props.theme.gap50};
    li {
      margin: 0 0 ${props => props.theme.gap30};
      &::marker {
        color: ${props => props.theme.primary500};
      }
    }
  }
  blockquote {
    margin: ${props => props.theme.gap70} 0;
    padding: ${props => props.theme.gap50} 0 ${props => props.theme.gap50}
      ${props => props.theme.gap70};
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
  margin: ${props => props.theme.gap80} 0 ${props => props.theme.gap110};
  .meta__date {
    .updated {
      font-size: 0.75rem;
    }
  }
  .meta__cats {
    p {
      margin: ${props => props.theme.gap30} 0 0;
      span {
        margin-left: ${props => props.theme.gap20};
        a {
          color: ${props => props.theme.grey500};
        }
      }
    }
  }
`;

export { StyledPost, StyledContent, StyledPostMeta };
