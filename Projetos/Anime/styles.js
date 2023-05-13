import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 150,
        backgroundColor: 'yellow',
        borderRadius: 15,
        margin: 10
        
    },

    viewImg: {
        width: '30%',
        padding: 5
    },

    viewDados: {
        width: '70%',
        padding: 10
    },
    
    poster: {
        width: '100%',
        height: '100%',
        borderRadius: 15
    },

    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'

    },

    sinopse: {
        fontSize: 10,
        marginBottom: 10,
        color: 'black'
    },

    comprar: {
        borderRadius: 15,
        position: 'absolute',
        color: 'red'
    }
})

export default styles;
