import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  movieDetails: {
    padding: 20,
  },

  movieDetailsTriggeringView: {
    paddingBottom: 40,
  },

  movieDetailsItem: {
    padding: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#eee',
  },

  movieDetailsItemHeadline: {
    marginBottom: 2,
    fontWeight: '600',
    fontSize: 16,
  },

  movieHeadline: {
    textAlign: 'center',
    padding: 10,
    fontSize: 24,
    fontWeight: '600',
  },
});

export default styles;