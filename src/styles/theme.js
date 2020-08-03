export const lightTheme = {
  all: {
    borderRadius: '0.25rem',
    padding: '2rem',
    margin: '2rem',
    paddingMobile: '1rem',
    marginMobile: '1rem',
    fontSize: {
      small: '1.2rem',
      main: '1.6rem',
      large: '2.4rem',
    },
  },
  main: {
    color: '#222',
    bodyColor: '#eee',
    bgColor: '#f4f4f4',
    borderColor: '#d3d3d3',
    logoColor: '#008966',
  },
  secondary: {
    color: '#008966',
    hoverColor: '#00bc8c',
  },
};

export const darkTheme = {
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
    hoverColor: '#00bc8c',
  },
};
