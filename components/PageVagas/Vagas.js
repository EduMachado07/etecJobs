import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
  Image,
  Modal,
  ScrollView,
  Share,
} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
// ------- BIBLIOTECA AXIOS
import Axios from 'axios';
// ------ CONTEXTO --------
import { Context } from '../context';
// ESTILOS
import StylesPage from '../../Styles/StylesPage';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import BtnOptions from './btnOptions';
import Search from './Search';
import Cards from './Cards';

import {
  ExcluirFavorito,
  SalvarFavorito,
  VagasSalvas,
  openDatabase,
} from '../sqlite';

export default function Vagas() {
  // DEFINE BASE DA API
  const Api = Axios.create({
    baseURL: 'https://etecsjcampos.com.br/api/api.php',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [vagaSelecionada, setVagaSelecionada] = useState(null);
  const [search, setSearch] = useState('');
  const [vaga, setVaga] = useState([]);
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [erro, setErro] = useState('');
  const itensPagina = 7;

  // INFORMACOES DO CONTEXTO
  const {
    pagina,
    paginaInicial,
    isDark,
    reload,
    vagasFavoritadas,
    setVagasFavoritadas,
  } = useContext(Context);

  const loadVagasSalvas = async () => {
    try {
      const vagas = await VagasSalvas();
      setVagasFavoritadas(vagas);
    } catch (error) {
      console.error('Erro ao carregar vagas salvas:', error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    onGet();
  }, [reload, pagina]);

  useEffect(() => {
    const initializeDB = async () => {
      await openDatabase();
      loadVagasSalvas();
    };

    initializeDB(); // Abrir o banco e carregar as vagas salvas
  }, [reload, pagina]);

  // FUNCAO PARA BUSCAR OS DADOS DA API
  const onGet = async () => {
    setIsLoading(true);
    try {
      // CHAMA API BASE COM AS VARIAVEIS paginaInicial E itensPagina
      const res = await Api.get(
        `?inicio=${paginaInicial}&quantidade=${itensPagina}`, // ADD INICIO E LIMITE DE BUSCA DA API
        {
          timeout: 15000, // ADICIONA UM TEMPO LIMITE
        }
      );
      // SALVA AS INFORMACOES
      setVaga(res.data);
      setDadosFiltrados(res.data);
      setErro('');
    } catch (error) {
      setErro(`Ops! Ocorreu um problema, recarregue a pagina`);
      setVaga([]);
      setDadosFiltrados([]);
    } finally {
      setIsLoading(false);
    }
  };

  const filtraVaga = async (text) => {
    setErro('');
    setSearch(text);
    setIsLoading(true);
    try {
      // CHAMA API BASE COM AS VARIAVEIS paginaInicial E itensPagina
      const res = await Api.get(`?inicio=0&quantidade=35`, {
        timeout: 15000, // ADICIONA UM TEMPO LIMITE
      });

      if (text) {
        // CRIA LISTA E VERIFICA CADA VAGA DELA
        const filtro = res.data.filter((item) => {
          // VERIFICA O ID DO TIPO DA VAGA E CONVERTE
          const tipoVaga = item.id_tipo_vaga
            ? item.id_tipo_vaga.toLowerCase()
            : '';
          // VERIFICA O NOME DA VAGA E CONVERTE
          const nomeVaga = item.nm_vaga ? item.nm_vaga.toLowerCase() : '';
          // RETORNA VAGAS ->
          //  COM O ID DA VAGA DIGITADO
          //  COM O NOME DA VAGA DIGITADO
          return (
            tipoVaga.includes(text.toLowerCase()) ||
            nomeVaga.startsWith(text.toLowerCase())
          );
        });

        // VERIFICA SE EXISTE VAGA COM A
        if (filtro.length === 0) {
          setErro('No momento não há vagas com esse nome ou classificação');
          setDadosFiltrados([]);
        } else {
          // ATUALIZA O FLATLIST COM O FILTRO
          setDadosFiltrados(filtro);
        }
      } else {
        setDadosFiltrados(vaga);
      }
    } catch (error) {
      setErro(`Ops! Ocorreu um problema, recarregue a pagina`);
      setDadosFiltrados([]);
      setVaga([]);
    } finally {
      setIsLoading(false);
    }
  };

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

  const limparPesquisa = () => {
    setSearch('');
    setDadosFiltrados(vaga);
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

  return (
    <View>
      <View
        style={[
          StylesPage.section,
          {
            backgroundColor: isDark ? '#202020' : '#ebebeb',
            position: 'relative',
          },
        ]}>
        {/* INDICA A PAGINA ATUAL */}
        <View style={StylesPage.page}>
          <Text
            style={[
              StylesPage.textPage,
              {
                backgroundColor: '#248f43',
                shadowColor: isDark ? '#fff' : 'black',
              },
            ]}>
            Vagas: <Text>Página {pagina}</Text>
          </Text>
        </View>

        {/* FAZ UMA VERIFICACAO DO LOADING */}
        <View>
          {/* COMPONENTE PARA BUSCAR VAGAS */}
          <Search
            search={search}
            StylesPage={StylesPage}
            filtraVaga={filtraVaga}
            limparPesquisa={limparPesquisa}
            onGet={onGet}
            setSearch={setSearch}
          />

          {/* -------- SE ATIVO ------ */}
          {/* MOSTRA O COMPONENTE DE CARREGAMENTO */}
          {isLoading ? (
            <ActivityIndicator
              style={{ alignSelf: 'center', marginTop: 12 }}
              size="large"
              color="#86DB9F"
            />
          ) : (
            <>
              {/* -------- SE DESATIVADO ------ */}
              {/* INFORMACOES DA API */}
              {erro && (
                <View style={{ alignItems: 'center', marginTop: 12 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '700',
                      color: isDark ? '#fff' : 'black',
                    }}>
                    {erro}
                  </Text>
                </View>
              )}
              {/* TODOS AS VAGAS EM CARDS */}
              <Cards
                dados={dadosFiltrados}
                compartilhar={compartilhar}
                mostrarDetalhes={mostrarDetalhes}
                openModal={openModal}
                setOpenModal={setOpenModal}
                vagaSelecionada={vagaSelecionada}
                setVagaSelecionada={setVagaSelecionada}
                formatarDataHora={formatarDataHora}
              />
            </>
          )}
        </View>
      </View>
      <BtnOptions />
    </View>
  );
}
