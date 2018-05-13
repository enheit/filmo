import { StyleSheet } from 'react-native';

const movieThumbnailStyles = StyleSheet.create({
  link: {
    marginBottom: 20,
    borderRadius: 10,
  },

  thumbnail: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 400,
    borderRadius: 10,

    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  image: {
    borderRadius: 10,
  },

  footer: {
    borderBottomRightRadius: 9,
    borderBottomLeftRadius: 9,
  },

  footerText: {
    padding: 10,
    fontSize: 34,
    fontWeight: '900',
    color: '#fff',
    textAlign: 'center',
  },

  footerButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
  },
});

export default movieThumbnailStyles;