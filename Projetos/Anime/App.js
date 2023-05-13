import { Image, StyleSheet, View, Text } from 'react-native';
import Anime from './src/components/Anime';


const listaAnimes = [
  {
    titulo: "HunterxHunter", 
    sinopse: "Monstros amedrontadores, criaturas exóticas, riquezas vastas, tesouros misteriosos, terras vis e terras inexploradas... Gon parte em uma aventura para se tornar um caçador profissional que arrisca a própria vida em busca do desconhecido.",
    urlPoster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/obCPZOFe9IoBwZW8NbnRhFAhQxU.jpg"
  },
  {
    titulo: "Demon Slayer",
    sinopse: "Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida vendendo carvão, descobre que sua família foi massacrada por um demônio. E pra piorar, Nezuko, sua irmã mais nova e única sobrevivente, também foi transformada num demônio.",
    urlPoster: "https://br.web.img3.acsta.net/pictures/19/09/18/13/46/0198270.jpg"
  },
  {
    titulo: "Your lie in April",
    sinopse: "Um pianista prodígio se torna incapaz de ouvir sua própria música após o trauma de perder sua amada mãe e professora. Com isso arrancado dele, a vida de Kousei Arima se torna monótona e sem brilho.",
    urlPoster: "https://cdn.myanimelist.net/images/anime/3/67177.jpg"
  },
  {
    titulo: "Naruto Shippuden",
    sinopse: "Uzumaki Naruto quer ser o melhor ninja de todos. Ele está indo muito bem, mas com o perigo iminente imposto pela misteriosa Akatsuki, Naruto percebe que ele deve treinar mais que nunca e deixa sua Vila para um intenso treinamento que o pressiona contra seus limites.",
    urlPoster: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/01ec367b44f0a568430a957e042639af.jpe"
  }
]

export default function App() {
  return (
    <View style={styles.container}>
      {listaAnimes.map(anime => <Anime anime = {anime}/>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
