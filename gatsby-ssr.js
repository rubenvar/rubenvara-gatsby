// from https://www.gatsbyjs.com/docs/browser-apis/#wrapPageElement
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./src/components/Layout').default;

exports.wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
);