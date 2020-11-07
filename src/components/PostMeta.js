import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import CategoryLink from './CategoryLink';
import { formatDate } from '../utils';

const StyledPostMeta = styled.p`
  margin: 0;
  display: flex;
  justify-content: space-between;
  color: var(--grey500);
  font-size: var(--fontSize30);
  #cats {
    span {
      margin: 0 var(--gap20) 0 0;
      a {
        color: var(--grey500);
        text-decoration: none;
        &:hover {
          color: var(--primary500);
        }
      }
    }
  }
`;

const PostMeta = ({ date, cats }) => (
  <StyledPostMeta>
    <span>
      <time dateTime={date}>{formatDate(date)}</time>
    </span>
    <span id="cats">
      {cats.map((cat, i) => (
        <span key={i}>
          <CategoryLink cat={cat} />
        </span>
      ))}
    </span>
  </StyledPostMeta>
);

PostMeta.propTypes = {
  cats: PropTypes.array,
  date: PropTypes.string,
};

export default PostMeta;
