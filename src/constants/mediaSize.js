export const size = {
  mobile: '375px',
  tablet: '768px',
  default: '960px',
  desktop: '1306px',
};
export const device = {
  // mobile: `min-width: ${size.mobile}`,
  mobile: `@media screen and (min-width: ${size.mobile})`,
  tablet: `@media screen and (min-width: ${size.tablet})`,
  default: `@media screen and (min-width: ${size.default})`,
  desktop: `@media screen and (min-width: ${size.desktop})`,
};
