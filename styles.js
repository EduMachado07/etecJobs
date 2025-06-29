import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    width: windowWidth
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  header: {
    miWidth: windowWidth,
    height: 200,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width: '100%',
    height: 80,
    backgroundColor: '#3AC162',
  },
  navigation: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn_Navigation: {
    display: 'flex',
    width: '30%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
});

export default Styles;
