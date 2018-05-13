import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: '#f6f8ff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderStyle: 'solid',
    display: 'flex',
  },

  buttonContainer: {
    width: 80,
  },

  buttonIcon: {
  },

  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonText: {
    color: '#0099ff'
  },

  headerTitleContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  headerTitle: {
    fontWeight: '600',
  }
});

export default styles;