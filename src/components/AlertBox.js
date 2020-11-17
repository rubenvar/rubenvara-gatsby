import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// 🚧 work in progress 🚧

const StyledBox = styled.div`
  border: 3px solid
    ${(props) => (props.type === 'success' ? 'seagreen' : 'grey')};
  border-radius: 13px;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.12);
  padding: var(--gap40);
  margin-bottom: var(--gap60);
  p {
    &:last-child {
      margin: 0;
    }
  }
`;

function AlertBox({ type = 'info', title, children }) {
  return (
    <StyledBox type={type}>
      {title ? <h4>{title}</h4> : null}
      {children}
    </StyledBox>
  );
}

AlertBox.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default AlertBox;
