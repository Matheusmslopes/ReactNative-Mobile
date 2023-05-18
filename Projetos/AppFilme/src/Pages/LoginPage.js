import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from '@react-navigation/native';
import Login from "../Components/Login";




export default function LoginPage(){

    return (
        <View style = {styles.container}>
            <Image style = {styles.img} source = {{uri: 'https://i.pinimg.com/736x/fa/b0/f4/fab0f4c853e2305018eb07e5e3034341.jpg'}}/>
            <Text style = {styles.txt}>Alguma coisa Aqui?</Text>
            <Login/>
            <Link to= {{screen: "Página de registro"}} style = {styles.link}>Entrar</Link>
            <Link to= {{screen: "Página de registro"}} style = {styles.link}>Registre-se!</Link>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D0D0D",
        justifyContent: 'center',
        alignItems: 'center'
    },

    img: {
        height: 200,
        width: 200,
        borderRadius: 20,
    },

    txt: {
        color:"#088C7F",
        fontSize: 40,
        marginTop: 15
    },

    link: {
        backgroundColor: "#088C7F",
        color: '#F2CB05',
        width: 160,
        height: 40,
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
})
