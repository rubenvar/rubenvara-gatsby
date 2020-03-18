import styled from 'styled-components';

const StyledPost = styled.div`
  .breadcrumb {
    margin-top: 20px;
    color: ${props => props.theme.grey500};
    font-size: 0.75rem;
    margin-bottom: 40px;
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
  h1 {
    /* text-align: center; */
    font-family: 'Victor Mono', monospace;
    font-size: 2.4rem;
    margin: 0 0 30px;
    font-weight: 400;
    letter-spacing: -4px;
    color: ${props => props.theme.primary500};
  }
`;

const StyledContent = styled.div`
  font-family: Martel, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  h2 {
    margin: 42px 0 20px;
    font-size: 1.8rem;
    font-family: 'Victor Mono', monospace;
  }
  h3 {
    margin: 32px 0 16px;
    font-size: 1.35rem;
    font-family: 'Victor Mono', monospace;
  }
  p {
    margin: 0 0 20px 0;
    line-height: 1.8rem;
    a {
      /* color: ${props => props.theme.primary500};
      position: relative;
      text-decoration: none;
      padding: 0 1px;
      &::after {
        position: absolute;
        background: linear-gradient(
          to right,
          ${props => props.theme.primary500},
          ${props => props.theme.primary700}
        );
        content: '';
        width: 100%;
        height: 2px;
        bottom: -2px;
        left: 0;
        z-index: -1;
        transition: all 0.25s;
      }
      &:hover {
        color: ${props => props.theme.white};
        border-color: transparent;

        &::after {
          height: 100%;
        }
      }
      &:focus {
        outline: none;
        border: 2px solid ${props => props.theme.grey900};
        border-radius: 3px;
        transition: none;
      } */
    }
  }
  ul {
    /* list-style: none; */
    line-height: 1.4rem;
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
      font-size: 25px;
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

export { StyledPost, StyledContent, StyledPostMeta };
