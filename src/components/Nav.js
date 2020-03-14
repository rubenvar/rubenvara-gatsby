import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNav = styled.nav`
  padding: 0;
  margin: ${props => (props.isIndex ? `0 0` : '30px auto ')} 60px;
  /* width: 940px; */
  max-width: 85%;
  justify-self: end;
  align-self: end;
  ul {
    list-style: none;
    display: flex;
    flex-direction: ${props => (props.isIndex ? `column` : `row`)};
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: ${props => (props.isIndex ? `end` : `center`)};
    margin: 0;
    padding: 0;
    li {
      margin: 0;
      padding: 0;
    }
  }
`;

const StyledSep = styled.li`
  /* color: ${props => props.theme.greyDarkest}; */
  color: ${props => props.theme.blueDarker};
`;

const StyledNavItem = styled.li`
  display: flex;
  flex-direction: column;
  span {
    color: ${props => props.theme.greyDarkest};
    font-size: 0.55rem;
    &.top {
      transform: translateY(10px) translateX(-3px) rotate(-6deg);
    }
    &.bottom {
      transition: all 0.25s;
      opacity: 0;
      align-self: end;
      transform: translateY(-6px) translateX(3px) rotate(-6deg);
    }
  }
  &:hover {
    span.bottom {
      opacity: 1;
    }
  }
  a {
    font-weight: 700;
    font-family: 'Alte Haas Grotesk';
    color: ${props => props.theme.red};
    text-decoration: none;
    font-size: 2.6rem;
    transition: all 0.25s;
    &:hover {
      /* color: ${props => props.theme.greyDarkest}; */
      color: ${props => props.theme.blueDarker};
    }
  }
`;

const Sep = () => <StyledSep>◇</StyledSep>;

const LiLink = ({ to, text, top, bottom }) => (
  <StyledNavItem>
    <span className="top">{top}</span>
    <Link to={to}>{text}</Link>
    <span className="bottom">{bottom}</span>
  </StyledNavItem>
);

const Nav = ({ isIndex }) => (
  <StyledNav isIndex={isIndex}>
    <ul>
      <LiLink
        to="/now"
        top="Mira qué hago"
        text="ahora"
        bottom="Siempre algo nuevo."
      />
      {!isIndex && <Sep />}
      <LiLink
        to="/blog"
        top="Pásate por mi"
        text="blog"
        bottom="Aprenderás algo."
      />
      {!isIndex && <Sep />}
      <LiLink
        to="/proyectos"
        top="Trabajo en estos"
        text="proyectos"
        bottom="Y alguno más."
      />
      {!isIndex && <Sep />}
      <LiLink
        to="/viajes"
        top="He hecho varios"
        text="viajes"
        bottom="Poco a poco."
      />
    </ul>
  </StyledNav>
);

LiLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
};

Nav.propTypes = {
  isIndex: PropTypes.bool,
};

export default Nav;
