import { StyleSheet } from 'react-native';

const StylesHeader = StyleSheet.create({
  header: {
    width: '100%',
    height: 109,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 13,
    paddingHorizontal: 15,
  },
  imgHeader: {
    marginLeft: -4,
    width: 100,
    height: 86,
  },
  title: {
    marginLeft: 4,
    fontSize: 32,
    fontWeight: '900',
    color: '#cd0505',
  },
});

export default StylesHeader;
