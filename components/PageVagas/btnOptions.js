import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import StylesPage from '../../Styles/StylesPage';
import { useNavigation } from '@react-navigation/native';

import { Context } from '../context';

const BtnOptions = () => {
  // INFORMACOES DO CONTEXTO
  const { isDark } = useContext(Context);

  const navigation = useNavigation();

  const [openOptions, setOpenOptions] = useState(false);
  const abrirOpcoes = () => {
    setOpenOptions(!openOptions);
  };

  return (
    <View>
      {/* BOTAO ABRIR OPCOES */}
      <TouchableOpacity
        onPress={abrirOpcoes}
        activeOpacity={1}
        style={[
          StylesPage.btnOptions,
          {
            backgroundColor: isDark ? '#32a956' : '#29a34d',
            shadowColor: isDark ? '#fff' : 'black',
          },
        ]}>
        <AntDesign name={openOptions ? 'down' : 'up'} size={37} color="#fff" />
      </TouchableOpacity>
      {/* TODAS AS OPCOES */}
      {openOptions && (
        <View style={StylesPage.barOptions}>
          {/* BOTAO INFORMACOES */}
          {/* BOTAO FAVORITOS */}
          <TouchableOpacity
            onPress={() => navigation.navigate('About')}
            activeOpacity={1}
            style={StylesPage.barSections}>
            <Text
              style={[
                StylesPage.optionsText,
                { backgroundColor: isDark ? '#32a956' : '#29a34d' },
              ]}>
              Sobre
            </Text>
            <View
              style={[
                StylesPage.optionsIcons,
                { backgroundColor: isDark ? '#32a956' : '#29a34d' },
              ]}>
              <FontAwesome6 name="info" size={23} color="#fff" />
            </View>
          </TouchableOpacity>
          {/* BOTAO FAVORITOS */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Favoritos')}
            activeOpacity={1}
            style={StylesPage.barSections}>
            <Text
              style={[
                StylesPage.optionsText,
                { backgroundColor: isDark ? '#32a956' : '#29a34d' },
              ]}>
              Favoritos
            </Text>
            <View
              style={[
                StylesPage.optionsIcons,
                { backgroundColor: isDark ? '#32a956' : '#29a34d' },
              ]}>
              <AntDesign name="heart" size={27} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default BtnOptions;
