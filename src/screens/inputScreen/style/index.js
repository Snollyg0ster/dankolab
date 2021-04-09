import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cont: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#CF1F28',
    height: 60,
    width: '90%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    //marginBottom: -60,
    elevation: 9,
  },
  hi: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  img: {
    width: 300,
    height: 150,
  },
  imgCont: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
