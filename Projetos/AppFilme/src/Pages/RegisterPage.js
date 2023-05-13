import { StyleSheet, Text, View } from "react-native";

export default function RegisterPage(){
    return (
        <View style = {styles.container}>
            <Text style = {styles.txt} >Pagina de regitro</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    }
})
