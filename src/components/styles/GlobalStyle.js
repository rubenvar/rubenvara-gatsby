import { createGlobalStyle } from 'styled-components';
import 'victormono';

import theme from './Theme';
import fontAlte from '../../assets/fonts/AlteHaasGroteskRegular.ttf';
import fontAlteBold from '../../assets/fonts/AlteHaasGroteskBold.ttf';
import fontMansalva from '../../assets/fonts/Mansalva-Regular.ttf';
import fontRubik from '../../assets/fonts/Rubik-Regular.ttf';
import fontRubikBold from '../../assets/fonts/Rubik-Bold.ttf';
import fontMartel from '../../assets/fonts/Martel-Regular.ttf';
import fontMartelBold from '../../assets/fonts/Martel-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Alte Haas Grotesk";
    src: url(${fontAlte});
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Alte Haas Grotesk";
    src: url(${fontAlteBold});
    font-weight: bold;
  }
  @font-face {
    font-family: "Mansalva";
    src: url(${fontMansalva});
    font-weight: normal;
    font-size: normal;
  }
  @font-face {
    font-family: "Rubik";
    src: url(${fontRubik});
    font-weight: normal;
    font-size: normal;
  }
  @font-face {
    font-family: "Rubik";
    src: url(${fontRubikBold});
    font-weight: bold;
  }
  @font-face {
    font-family: "Martel";
    src: url(${fontMartel});
    font-weight: normal;
    font-size: normal;
  }
  @font-face {
    font-family: "Martel";
    src: url(${fontMartelBold});
    font-weight: bold;
  }
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
    color: ${theme.white};
  }
  ::-moz-selection {
    background: ${theme.primary500};
    color: ${theme.white};
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
    font-family: 'Alte Haas Grotesk', cursive;
  }
  h2 {
    a {
      text-decoration: none;
      color: ${theme.primary500};
      &:hover {
        color: ${theme.primary900};
      }
    }
  }
  button {
    cursor: pointer;
  }
  button,
  a {
    &:focus {
      outline: none;
      border: 2px solid orange;
      transition: none;
    }
  }
  code[class*="language-"], pre[class*="language-"] {
    font-family: 'Victor Mono', monospace;
    font-size: 0.8rem;
  }
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`;

export default GlobalStyle;
