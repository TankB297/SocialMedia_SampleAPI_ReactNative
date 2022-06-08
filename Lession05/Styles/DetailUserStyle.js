import {StyleSheet, Dimensions} from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const DetailUserStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    avatarContainer: {
        width: screenWidth,
        alignItems: 'center',
        marginBottom: 20
    },
    avatar: {
        width: screenWidth /2,
        height: screenWidth /2,
    },
    contentContainer: {
        width: screenWidth,
        alignItems: 'center',
    },
    contentSubContainer01: {
        width: screenWidth / 1.5,
        padding: screenWidth / 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20
    },
    contentSubContainer02: {
        width: screenWidth / 2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: screenWidth / 50,
        alignItems: 'center'
    },
    content01: {
        flex: 0.6/3,
    },
    content02: {
        flex: 2.4/3,
    },
    subContent01: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    subContent02: {
        fontSize: 16,
        color: 'black',
    },
    subContent03: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonContainer: {
        width: screenWidth,
        alignItems: 'center',
        marginTop: 20
    },
    button01: {
        width: screenWidth / 1.5,
        height: screenWidth / 10,
        backgroundColor: '#2BC837',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginBottom: 10
    },
    button01Content: {
        fontSize: 16,
        color: 'white'
    },
    button02: {
        width: screenWidth / 1.5,
        height: screenWidth / 10,
        backgroundColor: '#2BC837',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    button02Content: {
        fontSize: 16,
        color: 'white'
    }
})

export default DetailUserStyles