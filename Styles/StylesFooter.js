import { StyleSheet } from 'react-native';

const StylesFooter = StyleSheet.create({
  footer: {
    width: '100%',
    height: 72,
  },
  navigation: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 11,
  },
  btn_Navigation: {
    display: 'flex',
    width: '30%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
  },
  btn_text: {
    fontSize: 19,
    fontWeight: '700',
    color: '#f1ffff',
  },
  
});

export default StylesFooter;