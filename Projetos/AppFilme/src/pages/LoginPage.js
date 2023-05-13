import { StyleSheet, Text, View } from "react-native";
import { Link } from '@react-navigation/native';

export default function LoginPage(){
    return (
        <View style = {styles.container}>
            <Text style = {styles.login}>Pagina de login</Text>
            <Link to= {{screen: "RegisterPage"}} style = {styles.link}>Registre-se!</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },

    login: {
        color: 'white'
    },

    link: {
        backgroundColor: 'blue',
        textAlign: 'center'
    }
})
