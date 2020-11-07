// import styled, { css } from 'styled-components';
// // import theme from './Theme';

// // const onHover = keyframes`
// //   20% {
// //     background-color: ${theme.secondary700};
// //   }
// //   40% {
// //     background-color: ${theme.secondary500};
// //   }
// //   60% {
// //     background-color: ${theme.primary400};
// //   }
// //   80% {
// //     background-color: ${theme.secondary700};
// //   }
// //   100% {
// //     background-color: ${theme.secondary500};
// //   }
// // `;

// const StyledNav = styled.nav`
//   padding: 0;
//   margin: ${(props) => (props.isIndex ? `0 0` : '32px auto ')}
//     ${(props) => props.theme.gap100};
//   ${(props) =>
//     !props.isIndex &&
//     css`
//       max-width: ${props.theme.maxWidth};
//     `}
//   justify-self: end;
//   align-self: end;
//   ul {
//     list-style: none;
//     display: flex;
//     flex-direction: ${(props) => (props.isIndex ? `column` : `row`)};
//     flex-wrap: wrap;
//     justify-content: space-between;
//     align-items: ${(props) => (props.isIndex ? `end` : `center`)};
//     margin: 0;
//     padding: 0;
//     .nav__item {
//       display: flex;
//       flex-direction: column;
//       margin: 0;
//       padding: 0;
//       margin-bottom: ${(props) => (props.isIndex ? '20px' : 0)};
//       &:last-child {
//         margin-bottom: 0;
//       }
//       &-- {
//         .top {
//           transform: ${(props) =>
//             !props.isIndex
//               ? 'translateY(15px) translateX(15px)'
//               : 'translateY(20px) translateX(55px)'};
//         }
//       }
//       &--now {
//         .top {
//           transform: ${(props) =>
//             !props.isIndex
//               ? 'translateY(15px) translateX(47px)'
//               : 'translateY(20px) translateX(55px)'};
//         }
//       }
//       &--blog {
//         .bottom {
//           transform: ${(props) =>
//             !props.isIndex
//               ? 'translateY(-10px) translateX(0px)'
//               : 'translateY(-10px) translateX(0px)'};
//         }
//       }
//       span {
//         color: ${(props) => props.theme.grey800};
//         font-size: 0.6rem;
//         line-height: 1;
//       }
//       a {
//         font-size: ${(props) => (props.isIndex ? `3rem` : `2.55rem`)};
//         font-weight: 700;
//         color: ${(props) => props.theme.primary500};
//         text-decoration: none;
//         transition: all 0.3s;
//         &:hover {
//           color: ${(props) => props.theme.secondary500};
//           /* animation: ${onHover} 0.35s steps(1, start) alternate infinite; */
//           /* color: transparent; */
//           /* background-clip: text; */
//           /* -webkit-background-clip: text; */
//         }
//       }
//     }
//     .nav__sep {
//       color: ${(props) => props.theme.secondary700};
//     }
//   }
// `;

// export default StyledNav;
