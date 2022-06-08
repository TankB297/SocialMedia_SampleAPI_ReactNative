import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const UserAlbumsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: screenWidth / 80,
    paddingRight: screenWidth / 80,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: screenWidth / 100,
    marginLeft: screenWidth / 40,
    marginBottom: screenWidth / 50,
  },
  itemContainer: {
    marginRight: screenWidth / 60,
    marginLeft: screenWidth / 50,
    width: screenWidth / 2 - screenWidth / 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: screenWidth / 30,
    padding: screenWidth / 40,
    alignItems: 'center',
  },
  itemContent: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemImage: {
    width: screenWidth / 2 - screenWidth / 10,
    height: screenWidth / 2 - screenWidth / 10,
    borderRadius: 10,
  },
  itemContentContainer: {
    width: screenWidth / 2 - screenWidth / 20 - (screenWidth / 40) * 2,
    marginTop: 5,
  },
  mainAlbumTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: screenWidth / 100,
    marginLeft: screenWidth / 40,
    marginBottom: screenWidth / 50,
  },
});

export default UserAlbumsStyles;
