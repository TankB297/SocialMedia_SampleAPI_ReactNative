import {StyleSheet, Dimensions} from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const DetailAlbumsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    itemContainer: {
        marginRight: screenWidth / 40,
        marginLeft: screenWidth / 40,
        width: screenWidth - screenWidth / 20,
        marginBottom: screenWidth / 60,
        padding: screenWidth / 40
    },
    itemImage: {
        width: 100,
        height: 100,
        margin: 11
    }
})

export default DetailAlbumsStyles