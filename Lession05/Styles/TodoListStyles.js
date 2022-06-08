import {StyleSheet, Dimensions} from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const TodoListStyles = StyleSheet.create({
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
    },
    itemContainer02: {
        marginRight: screenWidth / 40,
        marginLeft: screenWidth / 40,
        width: screenWidth - screenWidth / 20,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: screenWidth / 60,
        padding: screenWidth / 40,
        opacity: 0.5
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
        justifyContent: 'space-between',
    },
    itemSubContainer01: {
        flex: 2.9/3
    },
    itemImage: {
        width: screenWidth / 12,
        height: screenWidth / 12,
    },
    itemImageContainer: {
        justifyContent: 'center'
    }
})

export default TodoListStyles