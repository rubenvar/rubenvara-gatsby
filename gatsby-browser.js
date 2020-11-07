const React = require('react');
const Layout = require('./src/components/Layout').default;
// import fonts here (https://github.com/KyleAMathews/typefaces -> https://github.com/fontsource/fontsource)
// require('fontsource-mansalva/latin.css');
// require('fontsource-martel/latin.css');
// require('fontsource-rubik/latin.css');
require('victormono');

require('./src/assets/css/dracula-prism.css');

// from https://www.gatsbyjs.com/docs/browser-apis/#wrapPageElement

/* eslint react/jsx-props-no-spreading: 0 */
/* eslint react/display-name: 0 */
/* eslint react/prop-types: 0 */
exports.wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
);
