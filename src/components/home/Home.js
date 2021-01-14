import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import Img from 'gatsby-image';

import IntroText from './IntroText';
import NowText from './NowText';

const colors = ['primary400', 'primary500', 'primary600', 'primary700'];
const changeColor = keyframes`
  0% {
    color: var(--${colors[0]});
  }
  20% {
    color: var(--${colors[3]});
  }
  40% {
    color: var(--${colors[2]});
  }
  60% {
    color: var(--${colors[0]});
  }
  80% {
    color: var(--${colors[3]});
  }
  100% {
    color: var(--${colors[1]});
  }
`;
const randomColor = colors[Math.floor(Math.random() * colors.length)];

const StyledH1 = styled.h1`
  font-family: var(--logoFont);
  font-size: var(--fontSize150);
  /* letter-spacing: -1px; */
  color: var(--${randomColor});
  @media only screen and (min-width: 780px) {
    animation: ${changeColor} 11s infinite alternate;
  }
  span {
    &.🚀 {
      display: inline-block;
      transition: all 0.4s;
      &:hover {
        transform: translateY(-20px);
        &:nth-child(4) {
          transform: translateY(-20px) translateX(-6px) rotate(-23deg);
        }
        &:nth-child(10) {
          transform: translateY(19px) translateX(6px) rotate(33deg);
        }
      }
    }
    &.V {
      letter-spacing: -4px;
    }
  }
`;

export default function Homepage() {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "rub.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  // separate the letters
  const letters = Array.from('Rubén Vara').map((letter, i) => (
    <span key={i} className={letter === ' ' ? '💩' : `🚀 ${letter}`}>
      {letter}
    </span>
  ));

  return (
    <>
      <StyledH1>{letters}</StyledH1>
      <IntroText />
      {/* <Img fluid={data.backgroundImage.childImageSharp.fluid} /> */}
      <NowText />
    </>
  );
}
