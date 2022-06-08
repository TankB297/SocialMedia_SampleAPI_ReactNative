import {StyleSheet, Dimensions} from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerContainer: {
        flexDirection: 'row',
        paddingLeft: screenWidth * 0.03,
        paddingRight: screenWidth * 0.03,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
    itemContainer: {
        marginRight: screenWidth / 40,
        marginLeft: screenWidth / 40,
        width: screenWidth - screenWidth / 20,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: screenWidth / 60,
        padding: screenWidth / 40
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
    itemSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: screenWidth / 40
    },
    itemAvatar: {
        width: screenWidth / 8,
        height: screenWidth / 8,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: screenWidth / 40,
    },
    itemPostImage: {
        width: screenWidth - screenWidth / 9.5,
        height: screenWidth - screenWidth / 9.5,
        borderRadius: 10,
    },
    itemIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: screenWidth / 3.5,
        marginTop: 5
    }   
})

export default HomeStyles