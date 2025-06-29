import { View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Styles from '../Styles/StylesSplash';
import Flow from '../assets/flow'; // Ajuste o caminho conforme necessário

export default function Splash({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ADICIONA UM DELAY DE 8 seg PARA NAVEGAR
    const delay = setTimeout(() => {
      setIsLoading(false); // Para parar a animação
      navigation.navigate('Pagina');
    }, 8000);

    return () => clearTimeout(delay);
  }, [navigation]);

  return (
    <View style={Styles.container}>
      <Image
        source={require('../assets/todo.png')}
        style={Styles.imglogo}
      />
      {isLoading && (
        <Flow 
          size={48} 
          color="#B40404" 
          animating={isLoading} 
          hidesWhenStopped 
          style={{
            position: 'absolute', // Sobre a imagem
            top: '60%', // Centraliza verticalmente
            left: '50%', // Centraliza horizontalmente
            transform: [{ translateX: -24 }, { translateY: -24 }], // Ajusta para o centro do loading
          }}
        />
      )}
    </View>
  );
}
