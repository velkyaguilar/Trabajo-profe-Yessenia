import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import Testimonio from './Componentes/Testimonio';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contenedorLogo}>
        <Image style={styles.logo} source={require('./assets/IMAGENES/1.png')}></Image>
      </View>
      <Text style={styles.titulo}>Esto es lo que dicen nuestros alumnos:</Text>
      <ScrollView style={styles.scroll}>
        <Testimonio
          nombre=" Shawn Wang "
          pais=" Singapur"
          cargo=" Ingeniero de Software  "
          empresa=" Amazon"
          imagen={require('./assets/IMAGENES/2.png')}
          testimonio=" Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp."
        ></Testimonio>
        <Testimonio
          nombre=" Sarah Chima "
          pais=" Nigeria"
          cargo=" Ingeniero de Software "
          empresa=" ChatDesk"
          imagen={require('./assets/IMAGENES/3.png')}
          testimonio=" FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software."
        ></Testimonio>
        <Testimonio 
          nombre=" Emma Bostian " 
          pais=" Suecia" 
          cargo=" Ingeniera de Software "
          empresa=" Spotify"
          imagen={require('./assets/IMAGENES/4.png')} 
          testimonio=" Siempre he tenido dificultades para aprender JavaScript."
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  logo: {
    height: 45,
    width: '100%',
    marginTop:20,
    
  },

  contenedorLogo: {
    backgroundColor: '#1b1b32',
    height: 90,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:15
  },
  scroll: {
    width: '100%',
  }
});