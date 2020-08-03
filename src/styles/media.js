const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '450px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(max-width: ${size.mobileM})`,
  mobileM: `(max-width: ${size.mobileL})`,
  mobileL: `(max-width: ${size.tablet})`,
  tablet: `(max-width: ${size.laptop})`,
  laptop: `(max-width: ${size.laptopL})`,
  laptopL: `(max-width: ${size.desktop})`,
};
