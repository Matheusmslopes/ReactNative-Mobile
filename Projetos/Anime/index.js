import React from 'react';
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function Anime(props){
    return(
        <View style = {styles.container}>
            <View style = {styles.viewImg}>
                <Image style = {styles.poster} source={{
                    uri: props.anime.urlPoster
                }}/>
            </View>
            <View style = {styles.viewDados}>
                <Text style = {styles.titulo}>{props.anime.titulo}</Text>
                <Text style = {styles.sinopse}>{props.anime.sinopse}</Text>
                <Button title = "Visualizar"
                 color="#444444"/>       
            </View>
        </View>
    );
}
