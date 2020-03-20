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
    color: ${theme.grey900};
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
    background: ${theme.primary300};
    color: ${theme.primary100};
  }
  ::-moz-selection {
    background: ${theme.primary300};
    color: ${theme.primary100};
  }
  a {
    transition: all 0.25s;
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
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`;

export default GlobalStyle;
