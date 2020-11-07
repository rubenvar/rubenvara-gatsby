// import styled from 'styled-components';

// const StyledPost = styled.div`
//   position: relative;
//   .post__header {
//     margin: 0 0 ${(props) => props.theme.gap60};
//     @media only screen and (min-width: 700px) {
//       margin-bottom: ${(props) => props.theme.gap80};
//     }
//     h1 {
//       /* font-family: 'Rubik', 'Victor Mono', monospace; */
//       font-size: ${(props) => props.theme.fontSize90};
//       margin: 0;
//       font-weight: 400;
//       letter-spacing: -1px;
//       color: ${(props) => props.theme.primary800};
//       color: ${(props) => props.theme.primary600};
//       @media only screen and (min-width: 700px) {
//         font-size: ${(props) => props.theme.fontSize110};
//       }
//     }
//   }
// `;

// const StyledContent = styled.div`
//   margin-bottom: ${(props) => (props.isPage ? '73px' : 0)};
//   /* font-family: Martel, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */
//   h2 {
//     margin: ${(props) => props.theme.gap70} 0 ${(props) => props.theme.gap50};
//     font-size: ${(props) => props.theme.fontSize90};
//     font-weight: 400;
//     @media only screen and (min-width: 480px) {
//       margin-top: ${(props) => props.theme.gap90};
//     }
//   }
//   h3 {
//     margin: ${(props) => props.theme.gap60} 0 ${(props) => props.theme.gap40};
//     font-size: ${(props) => props.theme.fontSize80};
//     font-weight: 400;
//     @media only screen and (min-width: 480px) {
//       margin-top: ${(props) => props.theme.gap80};
//     }
//   }
//   h4 {
//     margin: ${(props) => props.theme.gap60} 0 ${(props) => props.theme.gap40};
//     font-size: ${(props) => props.theme.fontSize70};
//     font-weight: 400;
//     @media only screen and (min-width: 480px) {
//       margin-top: ${(props) => props.theme.gap70};
//     }
//   }
//   p,
//   li {
//     /* font-size: 1.15rem; */
//     font-size: 1rem;
//   }
//   p {
//     margin: 0 0 ${(props) => props.theme.gap50} 0;
//     line-height: 1.8rem;
//     a {
//       /* links with undershadow only in content */
//       text-decoration: none;
//       color: ${(props) => props.theme.primary500};
//       background: linear-gradient(
//         to top,
//         transparent 20%,
//         ${(props) => props.theme.grey300} 20%,
//         ${(props) => props.theme.grey300} 30%,
//         transparent 30%
//       );
//       transition: all 0.5s;
//       &:hover {
//         color: ${(props) => props.theme.primary800};
//       }
//     }
//   }
//   ul,
//   ol {
//     line-height: 1.5rem;
//     margin: 0 0 ${(props) => props.theme.gap50};
//     li {
//       margin: 0 0 ${(props) => props.theme.gap30};
//       &::marker {
//         color: ${(props) => props.theme.primary500};
//       }
//     }
//   }
//   blockquote {
//     margin: ${(props) => props.theme.gap70} 0;
//     padding: ${(props) => props.theme.gap50} 0 ${(props) => props.theme.gap50}
//       ${(props) => props.theme.gap70};
//     border-left: 3px solid ${(props) => props.theme.grey600};
//     font-weight: 700;
//     background-color: ${(props) => props.theme.grey200};
//     color: ${(props) => props.theme.grey600};
//     p {
//       font-size: 1.15rem;
//       margin: 0;
//     }
//   }
// `;

// const StyledPostMeta = styled.div`
//   width: 75%;
//   color: ${(props) => props.theme.grey500};
//   font-size: 0.85rem;
//   margin: ${(props) => props.theme.gap80} 0 ${(props) => props.theme.gap110};
//   .meta__date {
//     .updated {
//       font-size: 0.75rem;
//     }
//   }
//   .meta__cats {
//     p {
//       margin: ${(props) => props.theme.gap30} 0 0;
//       span {
//         margin-left: ${(props) => props.theme.gap20};
//         a {
//           color: ${(props) => props.theme.grey500};
//         }
//       }
//     }
//   }
// `;

// export { StyledPost, StyledContent, StyledPostMeta };
