import { createGlobalStyle } from 'styled-components';

import theme from './Theme';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Rubik', Arial, Helvetica, sans-serif;
    font-size: 20px;
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.white};
    color: ${theme.black};
    word-wrap: break-word;
    font-size: 1rem;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }
  img {
    max-width: 100%;
    margin: 0;
    padding: 0;
  }
  ::selection {
    background: ${theme.primary500};
    color: ${theme.grey100};
  }
  ::-moz-selection {
    background: ${theme.primary500};
    color: ${theme.grey100};
  }
  a {
    transition: all 0.25s;
    color: ${theme.primary500};
  }
  p {
    margin: 0;
    line-height: 1.625rem;
  }
  h1, h2, h3, h4 {
    margin: 0;
    text-rendering: optimizeLegibility;
    font-family: 'Rubik', cursive;
  }
  h1 {
    font-family: 'Victor Mono', monospace;
  }
  button {
    cursor: pointer;
  }
  button,
  a {
    &:focus {
      outline: none;
      border: 2px solid ${theme.focus};
      transition: none;
    }
  }
  code[class*="language-"], pre[class*="language-"] {
    font-family: 'Victor Mono', monospace;
    font-size: 0.75rem;
  }
  code[class*="language-text"] {
    font-size: 1rem;
  }
  .custom-block {
    box-shadow: ${theme.shadow100};
    margin: ${theme.gap100} 0;
    &.info {
      background: ${theme.grey100};
      padding: 15px 15px ${theme.gap10};
      color: ${theme.grey700};
      a {
        color: ${theme.grey900};
        background: none;
        text-decoration: underline;
      }
    }
    &-body {
      p {
        font-size: 1rem;
        margin-bottom: ${theme.gap40};
      }
    }
  }
  .toc {
    background: ${theme.white};
    padding: ${theme.gap30};
    border: 1px solid ${theme.primary500};
    width: 75%;
    margin: ${theme.gap50} 0;
    ul {
        margin-bottom: ${theme.gap40};
      li {
        font-size: 1rem;
        margin-bottom: ${theme.gap40};
        line-height: 1;
        p {
        font-size: 1rem;
        margin-bottom: ${theme.gap40};
        line-height: 1;
        }
        a {
          background: none;
          text-decoration: none;
          &:hover {

            color: ${theme.primary800};
          }
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`;

export default GlobalStyle;
