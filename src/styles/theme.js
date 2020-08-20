export const lightTheme = {
  id: 'lightTheme',
  all: {
    borderRadius: '1.0rem',
    padding: '2rem',
    margin: '2rem',
    paddingMobile: '1rem',
    marginMobile: '1rem',
    fontSize: {
      small: '1.2rem',
      main: '1.6rem',
      large: '2.4rem',
    },
    errorColor: '#f74f3e',
    successColor: '#00ccaa',
  },
  main: {
    color: '#111',
    bodyColor: '#444',
    bgColor: '#b0b0b0',
    borderColor: '#888',
    logoColor: '#00bc8c',
  },
  secondary: {
    color: '#008966',
  },
};

export const darkTheme = {
  id: 'darkTheme',
  all: { ...lightTheme.all },
  main: {
    color: '#eee',
    bodyColor: '#222',
    bgColor: '#303030',
    borderColor: '#444',
    logoColor: '#008966',
  },
  secondary: {
    color: '#008966',
  },
};

export const getLocalTheme = () => {
  const themeId = localStorage.getItem('songBirdTheme')
    ? localStorage.getItem('songBirdTheme')
    : null;

  let initTheme = darkTheme;

  if (themeId) {
    initTheme = (JSON.parse(themeId) === 'lightTheme') ? lightTheme : darkTheme;
  }

  return initTheme;
};

export const initTheme = getLocalTheme();
