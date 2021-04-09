import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
console.log(height);

export const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: height - 96,
    paddingBottom: 20,
  },
  navbar: {
    height: 96,
    width: '100%',
    elevation: 7,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cont: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  hi: {
    color: 'green',
    fontSize: 25,
  },
});
