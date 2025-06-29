import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import { useContext } from 'react';

import Styles from '../styles';
import StylesPage from '../Styles/StylesPage';
import StylesAbout from '../Styles/StylesAbout';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import etec from '../assets/etecJobs_Png.png';
import eduardo from '../assets/eduardo.jpg';
import joao from '../assets/joao.jpeg';
import carol from '../assets/carol.jpeg';

// ------ CONTEXTO --------
import { Context } from './context';

const Alunos = ({ image, nome, linkedin, redes }) => {
  // INFORMACOES DO CONTEXTO
  const { isDark } = useContext(Context);

  const openRedes = (link) => {
    const url = link;
    Linking.openURL(url).catch((err) =>
      console.error('Não foi possível abrir o LinkedIn', err)
    );
  };

  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
      }}>
      <View>
        <Image
          source={image}
          style={{ height: 140, width: 125, borderRadius: 6 }}
          resizeMode="cover"
        />
      </View>
      {/* CARDS ALUNO INTEGRANTE */}
      <View style={{ height: '100%', paddingVertical: 6 }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 21,
            color: isDark ? '#fff' : 'black',
          }}>
          {nome}
        </Text>
        <TouchableOpacity
          onPress={() => openRedes(linkedin)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 7,
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 19,
              color: isDark ? '#fff' : 'black',
            }}>
            Linkedin
          </Text>
          <Feather
            name="arrow-up-right"
            size={20}
            color={isDark ? '#fff' : 'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openRedes(redes)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 7,
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 19,
              color: isDark ? '#fff' : 'black',
            }}>
            Redes Sociais
          </Text>
          <Feather
            name="arrow-up-right"
            size={20}
            color={isDark ? '#fff' : 'black'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const About = () => {
  const navigation = useNavigation();

  // INFORMACOES DO CONTEXTO
  const { isDark } = useContext(Context);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: isDark ? '#202020' : '#ebebeb',
            flexDirection: 'column',
            paddingVertical: 38,
            paddingHorizontal: 20,
            gap: 16,
          }}>
          {/* COMPONENTE PARA VOLTAR */}
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
          {/* IMAGEM APP */}
          <View
            style={{
              backgroundColor: '#32a956',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Image source={etec} style={{ height: 125 }} resizeMode="contain" />
          </View>

          {/* VISAO GERAL */}
          <Text
            style={{
              fontSize: 23,
              fontWeight: '800',
              marginTop: 7,
              color: isDark ? '#fff' : 'black',
            }}>
            Visão Geral
          </Text>
          <Text
            style={{
              fontSize: 19,
              paddingHorizontal: 7,
              marginTop: -4,
              color: isDark ? '#fff' : 'black',
            }}>
            Aplicação mobile desenvolvida durante um evento de Hackathon
            organizado pelos professores da instituição de ensino ETEC. {'\n'}
            Para o desafio foi fornecido uma API que consulta as vagas enviadas
            a escola pelas empresas, e tinha como objetivo principal, criar um
            aplicativo para permitir a visualização dessas vagas sejam elas
            emprego, estágio ou jovem aprendiz.
          </Text>

          {/* IDEIAS INICIAIS */}
          <Text
            style={{
              fontSize: 23,
              fontWeight: '800',
              marginTop: 7,
              color: isDark ? '#fff' : 'black',
            }}>
            Funcionalidades Iniciais
          </Text>
          <View style={{ marginTop: -7 }}>
            <Text
              style={{
                fontSize: 18,
                paddingHorizontal: 7,
                color: isDark ? '#fff' : 'black',
              }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>.</Text>{' '}
              Paginação
            </Text>
            <Text
              style={{
                fontSize: 18,
                paddingHorizontal: 7,
                marginTop: -2,
                color: isDark ? '#fff' : 'black',
              }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>.</Text> Busca
              por filtragem
            </Text>
            <Text
              style={{
                fontSize: 18,
                paddingHorizontal: 7,
                marginTop: -2,
                color: isDark ? '#fff' : 'black',
              }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>.</Text>{' '}
              Compartilhar e favoritar
            </Text>
            <Text
              style={{
                fontSize: 18,
                paddingHorizontal: 7,
                marginTop: -2,
                color: isDark ? '#fff' : 'black',
              }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>.</Text> Design
              intuitivo e moderno
            </Text>
          </View>

          {/* ALUNOS */}
          <Text
            style={{
              fontSize: 23,
              fontWeight: '800',
              marginTop: 7,
              color: isDark ? '#fff' : 'black',
            }}>
            Desenvolvedores
          </Text>
          <Text style={{ fontWeight: '600', fontSize: 20, color: isDark ? '#fff' : 'black', }}>
            Eduardo da Silva Machado
          </Text>
          <Text style={{ fontWeight: '600', fontSize: 20, color: isDark ? '#fff' : 'black', }}>
            João Victor Ribeiro de Almeida Oliveira
          </Text>
          <Text style={{ fontWeight: '600', fontSize: 20, color: isDark ? '#fff' : 'black', }}>
            Ana Carolina Cambraia Pelosi
          </Text>

          {/* PROFESSORES */}
          <Text
            style={{
              fontSize: 23,
              fontWeight: '800',
              marginTop: 7,
              color: isDark ? '#fff' : 'black',
            }}>
            Orientadores
          </Text>
          <Text style={{ fontWeight: '600', fontSize: 20, color: isDark ? '#fff' : 'black', }}>
            Rogério B. de Andrade
          </Text>
          <Text style={{ fontWeight: '600', fontSize: 20, color: isDark ? '#fff' : 'black', }}>
            Claúdio Lopes Ferrini Garcia
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;
