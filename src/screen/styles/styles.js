import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f520',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  uAvatar: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  unameText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default styles;
