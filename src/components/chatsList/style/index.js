import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  flatlist: {
    paddingBottom: 20,
    width: '100%',
    flexGrow: 0,
  },
  cont: {
    width: '100%',
    height: '100%',
  },
  item: {
    height: 75,
    width: '90%',
    backgroundColor: 'black',
    borderRadius: 8,
    marginTop: 30,
    marginHorizontal: 15,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightComp: {
    borderRadius: 8,
    marginTop: 30,
    marginRight: 15,
    padding: 15,
    height: 75,
    justifyContent: 'center',
    backgroundColor: 'red',
    color: 'white',
  },
  rightCompText: {
    color: 'white',
  },
});
