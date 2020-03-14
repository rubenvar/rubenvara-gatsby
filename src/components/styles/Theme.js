const text = `hsl(0, 20%, 5%)`;
const redLighter = `hsl(0, 64%, 70%)`;
const red = `hsl(0, 64%, 45%)`;
const redDarker = `hsl(0, 64%, 25%)`;

const theme = {
  maxWidth: `770px`,

  black: `hsl(0, 20%, 5%)`,
  white: `hsl(0, 20%, 97%)`,

  bg: `hsl(0, 20%, 97%)`,
  bgDarker: `hsl(0, 10%, 76%)`,

  text,

  codeBg: `#282a36`,

  grey: `#dadada`,
  greyDark: `#999`,
  greyDarker: `#566565`,
  greyDarkest: `#323232`,
  copyrightGrey: `#797979`,

  redLighter,
  red,
  redDarker,
  redDarkest: `hsl(358, 57%, 16%)`,

  blue: `hsl(180, 64%, 45%)`,
  blueDarker: `hsl(180, 64%, 25%)`,

  redGradient: `linear-gradient(to right, var(${redLighter}), var(${red}), var(${red}), var(${redDarker}))`,

  twitterGradient: `linear-gradient(to left, white, hsl(203, 89%, 83%))`,
  twitterLink: `hsl(203, 99%, 23%)`,
  twitterTitle: `hsl(203, 69%, 33%)`,

  listedPostBg: `linear-gradient(to right, hsla(0, 20%, 92%, 0.55), hsla(0, 20%, 94%, 0.35))`,
  listedPostBorder: `#ccc`,

  jsColor: `#f7df1e`,
  htmlColor: `#f16529`,
  cssColor: `#2965f1`,

  linkHover: `var(${text})`,

  defBs: `0 2px 3px rgba(0, 0, 0, 0.2)`,
  defBr: `3px`,

  buttonRadius: `3px`,
  buttonShadow: `0 2px 3px rgba(0, 0, 0, 0.19)`,

  // rv-red: #e10707,
  // rv-red: hsl(0, 94%, 45%),
};

export default theme;
