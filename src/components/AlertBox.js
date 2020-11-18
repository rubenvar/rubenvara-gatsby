import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  IconAlertTriangle,
  IconPencil,
  IconSpeakerphone,
  IconTool,
  IconTrophy,
  IconUrgent,
} from '@tabler/icons';
import { motion } from 'framer-motion';

// 🚧 work in progress 🚧

const StyledBox = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1);
  padding: var(--gap60);
  margin: var(--gap30) 0 var(--gap80);
  word-wrap: break-word;
  background: linear-gradient(
    to right,
    ${(props) => `var(--${props.type}400)`} ${(props) => `${props.full}%`},
    #fefefe ${(props) => `${props.full}%`}
  );
  border-radius: 13px;
  border: 3px solid;
  position: relative;
  transition: all 0.3s;
  p {
    &:last-child {
      margin: 0;
    }
  }
  color: ${(props) => `var(--${props.type}600)`};
  border-color: ${(props) => `var(--${props.type}400)`};
  h4 {
    color: ${(props) => `var(--${props.type}600)`};
  }
  a {
    color: ${(props) => `var(--${props.type}500)`};
    &:hover {
      color: ${(props) => `var(--${props.type}600)`};
    }
  }
`;

const StyledIcon = styled(motion.span)`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
  position: absolute;
  width: 48px;
  height: 48px;
  top: -20px;
  left: -20px;
  border: 3px solid;
  border-radius: 50%;
  background: #fefefe;
  line-height: 1;
  text-align: center;
  padding: 6px;
  transition: all 0.3s;
  border-color: ${(props) => `var(--${props.type}400)`};
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    cursor: pointer;
    transform: scale(0.95);
    border-color: ${(props) => `var(--${props.type}500)`};
    svg {
      stroke: ${(props) => `var(--${props.type}600)`};
    }
  }
  svg {
    stroke: ${(props) => `var(--${props.type}500)`};
    line-height: 1;
    width: 28px;
    height: 28px;
    transition: all 0.3s;
  }
`;

function Icon({ type, handleClick, clicked }) {
  let SVG = <IconTool size={28} />;

  if (type === 'success') SVG = <IconTrophy size={28} />;
  if (type === 'announce') SVG = <IconSpeakerphone size={28} />;
  if (type === 'note') SVG = <IconPencil size={28} />;
  if (type === 'warning') SVG = <IconAlertTriangle size={28} />;
  if (type === 'danger') SVG = <IconUrgent size={28} />;

  const variants = {
    clicked: { scale: 0.7 },
    unClicked: { scale: 1 },
  };

  return (
    <StyledIcon
      onClick={handleClick}
      type={type}
      animate={clicked ? 'clicked' : 'unClicked'}
      variants={variants}
    >
      {SVG}
    </StyledIcon>
  );
}

function AlertBox({ type = 'info', title, children }) {
  const [full, setFull] = useState(0);
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    // if (full < 100) setFull(full + 10);
    setClicked(true);
  };
  useEffect(() => {
    setTimeout(() => setClicked(false), 500);
  });

  return (
    <StyledBox type={type} full={full}>
      <Icon type={type} handleClick={handleClick} clicked={clicked} />
      {title ? <h4>{title}</h4> : null}
      {clicked ? 'clicked' : 'notClicked'}
      {children}
    </StyledBox>
  );
}

AlertBox.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  type: PropTypes.string,
};

Icon.propTypes = {
  full: PropTypes.any,
  handleClick: PropTypes.any,
  setFull: PropTypes.any,
  type: PropTypes.string,
};

export default AlertBox;
