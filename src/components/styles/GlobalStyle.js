import { createGlobalStyle } from 'styled-components';

import fontAlte from '../../assets/fonts/AlteHaasGroteskRegular.ttf';
import fontAlteBold from '../../assets/fonts/AlteHaasGroteskBold.ttf';
import fontMansalva from '../../assets/fonts/Mansalva-Regular.ttf';
import fontRubik from '../../assets/fonts/Rubik-Regular.ttf';
import fontRubikBold from '../../assets/fonts/Rubik-Bold.ttf';

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
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
    word-wrap: break-word;
    font-size: 1rem;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }
  [hidden],
  template {
    display: none;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  p {
    margin: 0 0 20px 0;
    line-height: 1.625rem;
  }
  h1, h2, h3, h4 {
    text-rendering: optimizeLegibility;
    font-family: 'Alte Haas Grotesk', cursive;
  }
  input, button, textarea, select {
    font-size: inherit;
    font-family: inherit;
    color: inherit;
  }
  button {
    cursor: pointer;
  }
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`;

export default GlobalStyle;
