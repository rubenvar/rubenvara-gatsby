import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import styled from 'styled-components';
import Layout from '../components/Layout';

const StyledProyecto = styled.div`
  box-shadow: ${props => props.theme.shadow200};
  padding: 15px;
  h2 {
    margin-bottom: 15px;
  }
  > div {
    margin-bottom: 24px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 24px;
    gap: 24px;
    .images {
      position: relative;
      > div {
        width: 70%;
        height: 100%;
        &:nth-child(1) {
          margin-left: 0;
        }
        &:nth-child(2) {
          margin-left: 30px;
        }
        &:nth-child(3) {
          margin-left: 60px;
        }
        img {
          border-radius: 15px;
          box-shadow: ${props => props.theme.shadow100};
          height: 20%;
        }
      }
    }
  }
`;

const ProyectosPage = ({ data }) => {
  const {
    images: { nodes: images },
    proyectos: { totalCount: total, nodes: proyectos },
  } = data;
  // console.log({ total, images, proyectos });
  return (
    <Layout>
      <div>
        <p>{total} proyectos!</p>
        {proyectos.map(proyecto => (
          <StyledProyecto key={proyecto.id}>
            <h2>{proyecto.name}</h2>
            <div>
              <div className="images">
                {proyecto.images.map(proyectImage => {
                  const image = images.find(obj => obj.name === proyectImage);
                  return image ? (
                    <Img
                      key={image.name}
                      fluid={image.childImageSharp.fluid}
                      style={{ position: 'absolute', overflow: 'visible' }}
                    />
                  ) : null;
                })}
              </div>
              <p>{proyecto.intro}</p>
            </div>
            <p>{proyecto.description}</p>
            {proyecto.tags.map(tag => (
              <span key={`${proyecto.id}-${tag}`}>{tag}</span>
            ))}
          </StyledProyecto>
        ))}
      </div>
    </Layout>
  );
};

ProyectosPage.propTypes = {
  data: PropTypes.object,
};

export const proyectosQuery = graphql`
  query {
    images: allFile(filter: { relativeDirectory: { eq: "proyectos" } }) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    proyectos: allProyecto {
      nodes {
        id
        name
        intro
        description
        tags
        images
      }
      totalCount
    }
  }
`;

export default ProyectosPage;
