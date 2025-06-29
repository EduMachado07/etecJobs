import { StyleSheet } from 'react-native';

const StylesSplash = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
  },
  imglogo: {
    width: '100%', 
    height: '100%', 
  },
  centerLogo: {
    width: 150, 
    height: 150,
    position: 'absolute', 
    top: 0,
    left: '50%',
    marginTop: '50%',
  },
});

export default StylesSplash;
