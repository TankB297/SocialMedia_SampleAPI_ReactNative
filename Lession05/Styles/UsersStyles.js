import {StyleSheet, Dimensions} from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const UsersStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginTop: screenWidth / 100,
        marginLeft: screenWidth / 40,
        marginBottom: screenWidth / 50
    },
    itemContainer: {
        marginRight: screenWidth / 40,
        marginLeft: screenWidth / 40,
        width: screenWidth - screenWidth / 20,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: screenWidth / 60,
        padding: screenWidth / 40,
        flexDirection: 'row',
    },
    itemContent: {
        fontSize: 16,
        fontWeight: '300',
        color: 'black',
    },
    itemContent02: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    itemImageContainer: {
        marginRight: screenWidth / 40,
    },
    itemImage: {
        width: screenWidth / 6,
        height: screenWidth / 6,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50
    },
    itemContentContainer: {
        justifyContent: 'center'
    }
})

export default UsersStyles