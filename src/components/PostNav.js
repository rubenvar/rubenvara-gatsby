import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons';

const StyledPostNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  box-shadow: var(--boxShadow100);
  border-radius: var(--smallBr);
  font-size: var(--fontSize30);
  .prev {
    border-right: 1px solid var(--grey200);
    height: 100%;
    padding: var(--gap30);
    padding-left: 0;
  }
  .next {
    height: 100%;
    padding: var(--gap30);
    padding-right: 0;
  }
  a {
    width: 100%;
    text-decoration: none;
    div {
      display: grid;
      gap: 12px;
      align-items: center;
      &.prev {
        grid-template-columns: auto 1fr;
      }
      &.next {
        grid-template-columns: 1fr auto;
        .title {
          text-align: right;
        }
      }
      .title {
        color: var(--primary700);
      }
    }
  }
`;

const PostNav = ({ prev, next }) => (
  <StyledPostNav>
    {prev ? (
      <Link to={`/${prev.frontmatter.slug}`}>
        <div className="prev">
          <div className="dir">
            <IconChevronLeft />
          </div>
          <div className="title">{prev.frontmatter.title}</div>
        </div>
      </Link>
    ) : (
      <div className="prev" />
    )}
    {next ? (
      <Link to={`/${next.frontmatter.slug}`}>
        <div className="next">
          <span className="title">{next.frontmatter.title}</span>
          <span className="dir">
            <IconChevronRight />
          </span>
        </div>
      </Link>
    ) : (
      <div className="next" />
    )}
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
