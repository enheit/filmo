import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  moviewPreview: {
    marginBottom: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
  },

  poster: {
    height: 154,
    width: 100,
    flex: 0,
  },

  information: {
    flex: 1,
    marginLeft: 10
  },

  originalTitle: {
    fontWeight: '600',
    color: '#0099ff',
    fontSize: 18,
    marginBottom: 5,
  },

  releaseDate: {
    marginBottom: 5,
  },

  voteAverage: {
    marginBottom: 5,
  },

  overview: {
    marginBottom: 5,
  },

  bold: {
    fontWeight: '600',
  },
});

export default styles;