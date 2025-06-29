import {
  Text,
  View,
  TouchableOpacity,
  Share,
  FlatList,
  ScrollView,
  Modal,
  Image,
} from 'react-native';
import { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

// ------ CONTEXTO --------
import { Context } from './context';

// ESTILOS
import StylesPage from '../Styles/StylesPage';
import Styles from '../styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import { VagasSalvas, openDatabase, ExcluirFavorito, SalvarFavorito } from './sqlite';
import Cards from './PageVagas/Cards';

export default function Favoritos() {
  const [vagaSelecionada, setVagaSelecionada] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation();

  // INFORMACOES DO CONTEXTO
  const { isDark, isOpen, vagasFavoritadas, setVagasFavoritadas } =
    useContext(Context);

  const loadVagasSalvas = async () => {
    try {
      const vagas = await VagasSalvas();
      setVagasFavoritadas(vagas);
    } catch (error) {
      console.error('Erro ao carregar vagas salvas:', error);
    }
  };

  useEffect(() => {
    const initializeDB = async () => {
      await openDatabase();
      loadVagasSalvas();
    };

    initializeDB(); // Abrir o banco e carregar as vagas salvas
  }, []);

  const compartilhar = async (vaga, tipoVaga, descricao) => {
    // Função para compartilhar a mensagem
    try {
      const etecjobs = 'https://etecsjcampos.com.br/download-app.php';
      const result = await Share.share({
        message: `${vaga}\nTipo da vaga: ${tipoVaga}\n ${descricao}\nPara saber mais visite: ${etecjobs}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Compartilhado com uma atividade específica
          console.log('Compartilhado via: ', result.activityType);
        } else {
          // Compartilhado sem uma atividade específica
          console.log('Compartilhamento bem-sucedido');
        }
      }
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
    }
  };

  // FUNCAO PARA MOSTRAR AS INFORMACOES DAS VAGAS
  const mostrarDetalhes = (vaga) => {
    setVagaSelecionada(vaga);
    setOpenModal(true);
  };

  const formatarDataHora = (dataHora) => {
    const [data, hora] = dataHora.split(' '); // Divide a string em data e hora
    const [ano, mes, dia] = data.split('-'); // Divide a data em ano, mês e dia

    // Formata a data para o formato desejado
    const dataFormatada = `${dia.padStart(2, '0')}/${mes.padStart(
      2,
      '0'
    )}/${ano}`;

    // Formata a hora para o formato desejado (mantendo apenas as duas primeiras partes)
    const [horaFormatada] = hora.split(':');
    const minutos = hora.split(':')[1].padStart(2, '0'); // Pega os minutos

    return `${dataFormatada} ${horaFormatada}:${minutos}`;
  };

  const salvarVaga = async (item) => {
    try {
      await SalvarFavorito(item);
      setVagasFavoritadas((prev) => [...prev, item]);
    } catch (error) {
      console.error('Erro ao salvar a vaga:', error);
    }
  };

  const removerFavorito = async (cdvaga) => {
    try {
      await ExcluirFavorito(cdvaga);
      setVagasFavoritadas((prev) =>
        prev.filter((vaga) => vaga.cdvaga !== cdvaga)
      );
    } catch (error) {
      console.error('Erro ao remover favorito:', error);
    }
  };

  const toggleFavorito = async (item) => {
    const isFavorited = vagasFavoritadas.some(
      (vaga) => vaga.cdvaga === item.cdvaga
    );

    if (isFavorited) {
      await removerFavorito(item.cdvaga);
    } else {
      await salvarVaga(item);
    }
  };

  return (
    <View style={Styles.content}>
      <View
        style={[
          StylesPage.section,
          {
            backgroundColor: isDark ? '#202020' : '#ebebeb',
            paddingBottom: 65,
          },
        ]}>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
              marginVertical: 6,
              backgroundColor: isDark ? '#29a34d' : '#32a956',
              borderRadius: 4,
              paddingVertical: 6,
              width: 100,
            }}
            onPress={() => navigation.navigate('Pagina')}>
            <AntDesign name="arrowleft" size={22} color="#fff" />
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '700' }}>
              Voltar
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          {/* TODOS AS VAGAS EM CARDS */}
          {/* INFORMACOES DA API */}
          {vagasFavoritadas.length > 0 ? (
            <FlatList
              data={vagasFavoritadas}
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
                          compartilhar(
                            item.nm_vaga,
                            item.nm_tipo_vaga,
                            item.ds_vaga
                          )
                        }>
                        <AntDesign
                          name="sharealt"
                          size={28}
                          color={isDark ? '#fff' : 'black'}
                        />
                      </TouchableOpacity>
                      {/* ICONE PARA FAVORITAR VAGA */}
                      <TouchableOpacity onPress={() => toggleFavorito(item)}>
                        <AntDesign
                          name={
                            vagasFavoritadas.some(
                              (vaga) => vaga.cdvaga === item.cdvaga
                            )
                              ? 'heart'
                              : 'hearto'
                          }
                          size={28}
                          color={
                            vagasFavoritadas.some(
                              (vaga) => vaga.cdvaga === item.cdvaga
                            )
                              ? 'red'
                              : isDark
                              ? '#fff'
                              : 'black'
                          }
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
                              {formatarDataHora(
                                vagaSelecionada.dt_registro_vaga
                              )}
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
                </Animatable.View>
              )}
              ListFooterComponent={
                <View style={{ height: isOpen ? 110 : 20 }} />
              }
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <View style={{ alignItems: 'center', marginTop: 18 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: isDark ? '#fff' : 'black',
                }}>
                Você ainda não favoritou nenhuma vaga
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
