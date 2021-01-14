import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

const StyledToggle = styled.label`
  /* props to Sara Soueidan (https://sarasoueidan.com) for the component design */
  position: relative;
  justify-self: end;
  transition: all 0.25s;
  color: var(--grey500);
  &:hover {
    color: var(--primary500);
    .switch {
      border-color: var(--primary600);
    }
  }

  .text {
    font-size: var(--fontSize30);
    cursor: pointer;
    vertical-align: middle;
    transition: all 0.25s;
    &.selected {
      color: var(--primary500);
    }
  }

  .checkbox {
    opacity: 0;
    position: absolute;
    right: 0px;
    top: 25%;
    z-index: 1;

    &:focus + .switch {
      box-shadow: 0 0 0 2px var(--white), 0 0 0 4px var(--focus);
      outline: 3px solid transparent;
    }

    &:focus:not(:focus-visible) + .switch {
      box-shadow: none;
    }

    &:checked + .switch {
      background: var(--primary500);
      border-color: var(--primary800);

      &::after {
        transform: translatex(22.5px);
        border-color: #fff;
      }
    }
  }

  .switch {
    display: inline-block;
    width: 50px;
    height: 25px;
    border-radius: 12.5px;
    border: 2px solid #ddd;
    background: #eee;
    cursor: pointer;
    vertical-align: middle;
    overflow: hidden;
    margin: 0 5px;
    transition: all 0.25s;
    &::after {
      content: '';
      width: 21px;
      height: 21px;
      background: #fff;
      content: '';
      border-radius: 10.5px;
      position: absolute;
      margin-top: 0px;
      margin-left: 1px;
      border: 1px solid #eee;
      box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.2);
      transition: all 0.25s;
    }
  }
`;

const IntroTextToggle = ({ isLongIntro, setIsLongIntro }) => (
  <StyledToggle
    htmlFor="toggler"
    className="theme-toggler"
    onClick={() => scrollTo('#intro-title')}
  >
    <input
      type="checkbox"
      id="toggler"
      className="checkbox"
      checked={isLongIntro}
      onChange={() => setIsLongIntro(!isLongIntro)}
    />
    <span aria-hidden="true" className="switch" />
    <span className={isLongIntro ? 'text selected' : 'text'}>
      Versión extendida
    </span>
  </StyledToggle>
);

IntroTextToggle.propTypes = {
  isLongIntro: PropTypes.bool,
  setIsLongIntro: PropTypes.func,
};

export default IntroTextToggle;
