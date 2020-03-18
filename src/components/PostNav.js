import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledPostNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  margin: 70px 0;
  div {
    background: ${props => props.theme.listedPostBg};
    a {
      text-decoration: none;
      div {
        display: block;
        width: 100%;
        height: 100%;
        border: 3px solid ${props => props.theme.grey200};
        background: none;
        box-shadow: none;
        transition: all 0.3s;
        padding: 12px;
        display: grid;
        grid-template-rows: 1.25fr 1fr;
        align-items: center;
        &.next {
          text-align: right;
        }
        span {
          display: block;
          &.dir {
            color: ${props => props.theme.primary400};
            font-size: 1.2rem;
          }
          &.title {
            color: ${props => props.theme.grey400};
            font-size: 0.6rem;
          }
        }
        &:hover {
          background: ${props => props.theme.grey200};
          border-color: ${props => props.theme.grey300};
        }
      }
    }
  }
`;

const PostNav = ({ prev, next }) => (
  <StyledPostNav>
    <div>
      {prev && (
        <Link to={`/${prev.frontmatter.slug}`}>
          <div className="prev">
            <span className="dir">👈 Anterior</span>
            <span className="title">{prev.frontmatter.title}</span>
          </div>
        </Link>
      )}
    </div>
    <div>
      {next && (
        <Link to={`/${next.frontmatter.slug}`}>
          <div className="next">
            <span className="dir">Siguiente 👉</span>
            <span className="title">{next.frontmatter.title}</span>
          </div>
        </Link>
      )}
    </div>
  </StyledPostNav>
);

PostNav.propTypes = {
  next: PropTypes.shape({
    frontmatter: PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
  prev: PropTypes.shape({
    frontmatter: PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
};

export default PostNav;
