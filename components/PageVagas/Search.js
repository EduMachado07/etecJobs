import { useState, useEffect, useContext } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import StylesPage from '../../Styles/StylesPage';

import { Context } from '../context';

const Search = ({
  search,
  filtraVaga,
  limparPesquisa,
  onGet,
  setSearch,
}) => {
  // INFORMACOES DO CONTEXTO
  const { isDark, isOpen } = useContext(Context);

  const [btnSelected, setBtnSelected] = useState('todas');

  return (
    <View>
      {/* MOSTRA BARRA DE PESQUISA DE VAGAS */}
      {isOpen === true && (
        <View
          style={{
            justifyContent: 'center',
            gap: 9,
            paddingTop: 7
          }}>
          {/* CAMPO DE PESQUISA */}
          <View style={{ position: 'relative' }}>
            <TextInput
              style={[
                StylesPage.pesquisa,
                {
                  borderColor: isDark ? '#fff' : 'black',
                  color: isDark ? '#fff' : '#212121',
                },
              ]}
              onChangeText={(text) => filtraVaga(text)}
              placeholder="pesquisar vaga"
              placeholderTextColor={isDark ? '#fff' : 'black'}
              value={search}
            />
            {search === '' ? (
              <AntDesign
                style={{ position: 'absolute', right: 10, top: 8 }}
                name="search1"
                size={24}
                color={isDark ? '#fff' : 'black'}
              />
            ) : (
              <TouchableOpacity
                onPress={limparPesquisa}
                style={{ position: 'absolute', right: 10, top: 8 }}>
                <AntDesign
                  name="close"
                  size={24}
                  color={isDark ? '#fff' : 'black'}
                />
              </TouchableOpacity>
            )}
          </View>

          {/* COMPONENTE DE BUSCA DAS VAGAS */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                gap: 12,
                marginBottom: 7,
              }}>
              <TouchableOpacity
                onPress={() => {
                  onGet(), setBtnSelected('todas');
                }}
                style={[
                  StylesPage.btnPesquisa,
                  {
                    backgroundColor:
                      btnSelected === 'todas'
                        ? '#8f8f8f'
                        : isDark
                        ? '#29a34d'
                        : '#32a956',
                  },
                ]}>
                <Text style={StylesPage.textPesquisa}>Todas</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  filtraVaga('1');
                  setSearch('');
                  setBtnSelected('emprego');
                }}
                style={[
                  StylesPage.btnPesquisa,
                  {
                    backgroundColor:
                      btnSelected === 'emprego'
                        ? '#8f8f8f'
                        : isDark
                        ? '#29a34d'
                        : '#32a956',
                  },
                ]}>
                <Text style={StylesPage.textPesquisa}>Emprego</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  filtraVaga('2');
                  setSearch('');
                  setBtnSelected('estagio');
                }}
                style={[
                  StylesPage.btnPesquisa,
                  {
                    backgroundColor:
                      btnSelected === 'estagio'
                        ? '#8f8f8f'
                        : isDark
                        ? '#29a34d'
                        : '#32a956',
                  },
                ]}>
                <Text style={StylesPage.textPesquisa}>Estágio</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  filtraVaga('3');
                  setSearch('');
                  setBtnSelected('aprendiz');
                }}
                style={[
                  StylesPage.btnPesquisa,
                  {
                    backgroundColor:
                      btnSelected === 'aprendiz'
                        ? '#8f8f8f'
                        : isDark
                        ? '#29a34d'
                        : '#32a956',
                  },
                ]}>
                <Text style={StylesPage.textPesquisa}>Jovem Aprendiz</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Search;
