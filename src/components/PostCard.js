import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledPostCard = styled.div`
  border: 3px solid #663399;
  border-radius: 6px;
  padding: 12px;
  max-width: 640px;
  margin: 20px auto;
`;

const PostCard = ({ post }) => (
  <StyledPostCard>
    <p>
      <Link to={post.frontmatter.slug}>
        {post.frontmatter.title} ({post.frontmatter.date})
      </Link>
    </p>
    <p>{post.frontmatter.description}</p>
  </StyledPostCard>
);

PostCard.propTypes = {
  post: PropTypes.any,
};

export default PostCard;
