import {StyleSheet, Dimensions} from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const DetailPhotosStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    itemContainer: {
        width: screenWidth - 50,
        marginTop: 10 ,
    },
    itemImage: {
        width: screenWidth - 50,
        height: screenHeight / 2.5,
        marginTop: 10,
        borderRadius: 20,
    },
    itemImageContainer: {
        width: screenWidth - 50,
        alignItems: 'center'
    },
    itemContentTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
    itemContent: {
        fontSize: 16,
        fontWeight: '300',
        color: 'black',
    }
})

export default DetailPhotosStyles