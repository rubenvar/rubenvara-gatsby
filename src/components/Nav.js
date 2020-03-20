import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const StyledNav = styled.nav`
  padding: 0;
  margin: ${props => (props.isIndex ? `0 0` : '30px auto ')} 60px;
  ${props =>
    !props.isIndex &&
    css`
      max-width: ${props.theme.maxWidth};
    `}
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
    .nav__item {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      margin-bottom: ${props => (props.isIndex ? '20px' : 0)};
      &:last-child {
        margin-bottom: 0;
      }
      &--now {
        .top {
          transform: ${props =>
            !props.isIndex
              ? 'translateY(15px) translateX(47px)'
              : 'translateY(20px) translateX(55px)'};
        }
      }
      &--blog {
        .bottom {
          transform: ${props =>
            !props.isIndex
              ? 'translateY(-10px) translateX(0px)'
              : 'translateY(-10px) translateX(0px)'};
        }
      }
      &--proyectos {
        .top {
          transform: ${props =>
            !props.isIndex
              ? 'translateY(15px) translateX(0px)'
              : 'translateY(20px) translateX(0px)'};
        }
      }
      span {
        color: ${props => props.theme.grey800};
        font-size: 0.6rem;
        line-height: 1;
      }
      a {
        font-size: ${props => (props.isIndex ? `3rem` : `2.55rem`)};
        font-weight: 700;
        color: ${props => props.theme.primary500};
        text-decoration: none;
        transition: all 0.25s;
        &:hover {
          color: ${props => props.theme.secondary700};
        }
      }
    }
    .nav__sep {
      color: ${props => props.theme.secondary700};
    }
  }
`;

const NavSep = () => <div className="nav__sep">◇</div>;

const NavItem = ({ to, text, top, bottom }) => (
  <div className={`nav__item nav__item--${to.replace('/', '')}`}>
    <span className="top">{top}</span>
    <Link to={to}>{text}</Link>
    <span className="bottom">{bottom}</span>
  </div>
);

const Nav = ({ isIndex }) => (
  <StyledNav isIndex={isIndex}>
    <ul>
      <NavItem to="/now" top="Mira qué hago" text="ahora" />
      {!isIndex && <NavSep />}
      <NavItem to="/blog" bottom="sobre webdev." text="blog" />
      {!isIndex && <NavSep />}
      <NavItem to="/proyectos" top="Trabajo en estos" text="proyectos" />
    </ul>
  </StyledNav>
);

NavItem.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
};

Nav.propTypes = {
  isIndex: PropTypes.bool,
};

export default Nav;
