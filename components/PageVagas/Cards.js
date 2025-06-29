import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  ScrollView,
} from 'react-native';
import React, { useContext, useState } from 'react';
import StylesPage from '../../Styles/StylesPage';
import * as Animatable from 'react-native-animatable';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Context } from '../context';

import { SalvarFavorito, ExcluirFavorito, VagasSalvas } from '../sqlite';

const Cards = ({
  dados,
  compartilhar,
  mostrarDetalhes,
  openModal,
  setOpenModal,
  vagaSelecionada,
  setVagaSelecionada,
  formatarDataHora,
}) => {
  // INFORMACOES DO CONTEXTO
  const { isDark, isOpen, setVagasFavoritadas } = useContext(Context);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [messageModal, setMessageModal] = useState('');

  const salvarVaga = async (item) => {
    try {
      await SalvarFavorito(item);
      setVagasFavoritadas((prev) => [...prev, item]);
      setMessageModal(
        'A vaga foi favoritada!! Verifique a na página de favoritos.'
      );
    } catch (error) {
      console.error('Erro ao salvar a vaga:', error);
      setMessageModal(
        'A vaga escolhida já está favoritada. Vá para a página de favoritos.'
      );
    }
    setIsOpenModal(true);
  };

  return (
    <View>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.cdvaga.toString()}
        renderItem={({ item }) => (
          <Animatable.View
            animation="fadeInUp"
            duration={500}
            style={[
              StylesPage.card,
              {
                backgroundColor: isDark ? '#212121' : '#fff',
                borderColor: isDark ? '#999' : '#888',
                shadowColor: isDark ? '#fff' : 'black',
              },
            ]}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 7,
                borderBottomWidth: 1,
                borderBottomColor: isDark ? '#fff' : 'black',
              }}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={[
                  StylesPage.card_titulo,
                  {
                    color: isDark ? '#f1f1f1' : 'black',
                  },
                ]}>
                {item.nm_vaga}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: 10,
                }}>
                {/* ICONE PARA COMPARTILHAR VAGA NO WHATSAPP */}
                <TouchableOpacity
                  onPress={() =>
                    compartilhar(item.nm_vaga, item.nm_tipo_vaga, item.ds_vaga)
                  }>
                  <AntDesign
                    name="sharealt"
                    size={28}
                    color={isDark ? '#fff' : 'black'}
                  />
                </TouchableOpacity>
                {/* ICONE PARA FAVORITAR VAGA */}
                <TouchableOpacity onPress={() => salvarVaga(item)}>
                  <AntDesign
                    name="hearto"
                    size={28}
                    color={isDark ? '#fff' : 'black'}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* MOSTRA A FOTO DE ACORDO COM O TIPO DA VAGA */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 10,
                paddingHorizontal: 7,
              }}>
              <Image
                source={
                  item.id_tipo_vaga === '1'
                    ? { uri: 'https://etecsjcampos.com.br/vagas/1.png' }
                    : item.id_tipo_vaga === '2'
                    ? { uri: 'https://etecsjcampos.com.br/vagas/2.png' }
                    : item.id_tipo_vaga === '3'
                    ? { uri: 'https://etecsjcampos.com.br/vagas/3.png' }
                    : require('../../assets/etecJobs.png')
                }
                style={StylesPage.image}
                resizeMode="contain"
              />
              {/* TIPO E CLASSIFICACAO DA VAGA */}
              <View style={{ width: '72%', gap: 3 }}>
                <Text
                  style={[
                    StylesPage.card_subtitle,
                    { color: isDark ? '#fff' : 'black', fontSize: 17 },
                  ]}>
                  Tipo da vaga:{' '}
                  <Text>
                    {item.nm_tipo_vaga} ({item.id_tipo_vaga})
                  </Text>
                </Text>
                <Text
                  style={[
                    StylesPage.card_subtitle,
                    { color: isDark ? '#fff' : 'black' },
                  ]}>
                  {item.ds_keywords}
                </Text>
              </View>
            </View>
            {/* BOTAO PARA MOSTAR DETALHES DA VAGA */}
            <TouchableOpacity
              style={[
                StylesPage.botao,
                { backgroundColor: isDark ? '#29a34d' : '#32a956' },
              ]}
              onPress={() => mostrarDetalhes(item)}>
              <Text style={StylesPage.text_Botao}>Saber mais</Text>
            </TouchableOpacity>

            {/* COMPONENTE MODAL */}
            <Modal
              transparent={true}
              visible={openModal}
              onRequestClose={() => {
                setOpenModal(false);
                setVagaSelecionada(null);
              }}>
              {/* COMPONENTE DOS DETALHES DA VAGA */}
              <View style={StylesPage.modalContainer}>
                {vagaSelecionada && (
                  <View
                    style={[
                      StylesPage.modal,
                      {
                        backgroundColor: isDark ? '#212121' : '#fff',
                        borderColor: isDark ? '#fff' : '#212121',
                        shadowColor: isDark ? '#6f6f6f' : '#afafaf',
                      },
                    ]}>
                    <ScrollView showsVerticalScrollIndicator={true}>
                      <Text
                        style={[
                          StylesPage.card_text,
                          { color: isDark ? '#fff' : 'black' },
                        ]}>
                        {vagaSelecionada.ds_vaga}
                      </Text>
                      <Text
                        style={[
                          StylesPage.card_subtitle,
                          {
                            color: isDark ? '#fff' : 'black',
                            fontWeight: '700',
                          },
                        ]}>
                        Registrado em{' '}
                        {formatarDataHora(vagaSelecionada.dt_registro_vaga)}
                      </Text>
                    </ScrollView>
                    {/* BOTAO PARA FECHAR MODAL */}
                    <TouchableOpacity
                      style={[
                        StylesPage.btnCloseModal,
                        {
                          backgroundColor: isDark ? '#29a34d' : '#32a956',
                        },
                      ]}
                      onPress={() => setOpenModal(false)}>
                      <Text style={StylesPage.text_Botao}>
                        Fechar Informações
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </Modal>

            {/* COMPONENTE PARA FAVORITOS */}
            <Modal
              transparent={true}
              visible={isOpenModal}
              onRequestClose={() => {
                setIsOpenModal(false);
              }}>
              <View style={StylesPage.modalContainer}>
                <View
                  style={[
                    StylesPage.modal,
                    {
                      backgroundColor: isDark ? '#212121' : '#fff',
                      borderColor: isDark ? '#fff' : '#212121',
                      shadowColor: isDark ? '#6f6f6f' : '#afafaf',
                      justifyContent: 'center',
                      gap: 10,
                      height: 160,
                    },
                  ]}>
                  <Text
                    style={[
                      StylesPage.card_text,
                      { color: isDark ? '#fff' : 'black', fontWeight: 700 },
                    ]}>
                    {messageModal}
                  </Text>
                  <TouchableOpacity
                    style={[
                      StylesPage.btnCloseModal,
                      {
                        backgroundColor: isDark ? '#29a34d' : '#32a956',
                      },
                    ]}
                    onPress={() => setIsOpenModal(false)}>
                    <Text style={StylesPage.text_Botao}>
                      Fechar Informações
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </Animatable.View>
        )}
        ListFooterComponent={<View style={{ height: isOpen ? 110 : 20 }} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Cards;
