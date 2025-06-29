import { Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useContext } from 'react';
import StylesHeader from '../Styles/StylesHeader';

import { Context } from './context';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
  const { isDark, isOpen, mostrarPesquisa, recarregar, mudarTema } =
    useContext(Context);

  return (
    <View
      style={[
        StylesHeader.container,
        { backgroundColor: isDark ? '#29a34d' : '#32a956' },
      ]}>
      <Image
        source={require('../assets/etecJobs_Png.png')}
        style={StylesHeader.imgHeader}
        resizeMode="contain"
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 10,
          width: 100,
        }}>
        <TouchableOpacity onPress={recarregar}>
          <AntDesign name="reload1" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={mudarTema}>
          {isDark === true ? (
            <MaterialIcons name="light-mode" size={29} color="#fff" />
          ) : (
            <MaterialIcons name="dark-mode" size={29} color="#fff" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={mostrarPesquisa}>
          <Ionicons name="search" size={29} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
