import {StyleSheet, Dimensions} from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const DetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    itemContainer: {
        marginRight: screenWidth / 40,
        marginLeft: screenWidth / 40,
        width: screenWidth - screenWidth / 20,
        marginBottom: screenWidth / 60,
        padding: screenWidth / 40,
    },
    itemPostImage: {
        width: screenWidth / 1.11,
        height: screenWidth / 1.1,
        borderRadius: 10,
    },
    itemContent: {
        fontSize: 16,
        fontWeight: '300',
        color: 'black',
        marginLeft: screenWidth / 160,
    },
    itemContent02: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        flex: 3.99/4
    },
    itemContent03: {
        fontSize: 14,
        color: 'gray',
        marginLeft: screenWidth / 160,
    },
    titleContent: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
    itemComment: {
        width: screenWidth - screenWidth / 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: screenWidth / 60,
        padding: screenWidth / 40
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarComment: {
        width: screenWidth / 8,
        height: screenWidth / 8,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: screenWidth / 55
    },
    itemContentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemCommentReaction: {
        marginRight: screenWidth / 60
    },
    itemContentSubContainer: {
        flex: 2.8/3,
    },
    itemReply: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: screenWidth / 2.7,
    }
})

export default DetailStyles