/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO(props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          color
          author
          siteUrl
        }
      }
    }
  `);
  const title = props.title || data.site.siteMetadata.title;
  const description = props.description || data.site.siteMetadata.description;
  const { slug } = props;
  const { color, author, siteUrl } = data.site.siteMetadata;
  const siteImage = `${siteUrl}/rub.jpg`;
  const url = slug ? `${siteUrl}/${slug}/` : `${siteUrl}/`;

  // console.log(title);

  return (
    <Helmet>
      <html lang="es" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="theme-color" content={color} />
      <link rel="shortcut icon" href={`${siteUrl}/favicon.png`} />
      <link rel="canonical" href={url} />

      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={siteImage} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* more tags passed into SEO component directly */}
      {props.children}
    </Helmet>
  );
}

SEO.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
};
