import { Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { Context } from './context';

import StylesFooter from '../Styles/StylesFooter';
import AntDesign from '@expo/vector-icons/AntDesign';

const Navigation = () => {
  const { avancarPagina, retornarPagina, isDark } = useContext(Context);

  return (
    <View style={[StylesFooter.navigation, { backgroundColor: isDark ? '#29a34d' : '#32a956' }]}>
      <TouchableOpacity style={StylesFooter.btn_Navigation} onPress={retornarPagina}>
        <AntDesign name="leftcircleo" size={29} color="#fff" />
        <Text style={StylesFooter.btn_text}>Retornar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={StylesFooter.btn_Navigation} onPress={avancarPagina}>
        <AntDesign name="rightcircleo" size={29} color="#fff" />
        <Text style={StylesFooter.btn_text}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Navigation;
