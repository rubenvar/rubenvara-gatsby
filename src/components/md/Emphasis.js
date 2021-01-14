import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const StyledEmphasis = styled.span`
  font-style: italic;
  border-radius: 3px;
  padding: 0 2px;
  font-family: var(--codeFont);
  font-weight: 700;
  font-size: 0.9rem;
  ${(props) =>
    props.use === 'js' &&
    css`
      color: var(--javascriptYellow);
      background: #333;
    `}
`;

export default function Emphasis({ use, children }) {
  return <StyledEmphasis use={use}>{children}</StyledEmphasis>;
}

Emphasis.propTypes = {
  children: PropTypes.string,
  use: PropTypes.string,
};
