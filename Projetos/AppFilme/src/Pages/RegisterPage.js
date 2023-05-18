import { StyleSheet, Text, View } from "react-native";
import Registro from "../Components/Registro";

export default function RegisterPage(){
    return (
        <View style = {styles.container}>
            
            <Registro/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D0D0D",
        alignItems: 'center'
    },
})
