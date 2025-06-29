import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const StylesPage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    minWidth: windowWidth,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: windowWidth,
  },
  botao: {
    backgroundColor: '#3AC162',
    textAlign: 'center',
    alignItems: 'center',
    paddingVertical: 9,
    borderRadius: 5,
    marginBottom: 6,

    // Estilos para a sombra
    shadowOffset: { width: 0, height: 3 }, // Offset da sombra
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 6, // Raio da sombra
    elevation: 3,
  },
  text_Botao: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 17,
  },
  section: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 36,
    paddingHorizontal: 20,
    minWidth: '100%',
  },
  pesquisa: {
    minWidth: '100%',
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#212121',
    paddingLeft: 8,
    paddingVertical: 6,
    position: 'relative',
  },
  btnPesquisa: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 5,
    elevation: 3,
  },
  textPesquisa: {
    fontSize: 19,
    fontWeight: '800',
    color: '#fff',
  },
  erro: {
    color: 'red',
    marginTop: -14,
  },
  card: {
    display: 'flex',
    minWidth: '100%',
    gap: 5,
    borderRadius: 9,
    borderWidth: 1,
    padding: 5,
    paddingVertical: 9,
    paddingHorizontal: 20,
    marginVertical: 10,
    elevation: 5, // Sombra para Android
  },
  card_titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '79%',
  },
  card_text: {
    fontSize: 18,
    marginVertical: 2,
  },
  card_subtitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 3
  },
  page: {
    position: 'absolute',
    top: -13,
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    marginBottom: 50,
  },
  textPage: {
    backgroundColor: '#ebebeb',
    paddingHorizontal: 22,
    paddingVertical: 6,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',

    shadowOffset: { width: 10, height: 3 }, // Offset da sombra
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 6, // Raio da sombra
    elevation: 5,
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '80%',
    height: '55%',
    borderWidth: 1,
    borderRadius: 9,
    paddingHorizontal: 14,
    paddingVertical: 12,
    elevation: 5,
  },
  btnCloseModal: {
    paddingVertical: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 8,
  },
  btnOptions: {
    position: 'absolute',
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 14,
    right: 14,
    borderRadius: 40,

    elevation: 8,
  },
  barOptions: {
    gap: 15,
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 21,
    right: 14,
    paddingBottom: 70,
  },
  barSections: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 11,
    paddingHorizontal: 10,
  },
  optionsIcons: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    borderRadius: 30,
    elevation: 5,
  },
  optionsText: {
    color: '#fff',
    paddingHorizontal: 13,
    paddingVertical: 5,
    elevation: 5,
    borderRadius: 4,
    fontSize: 20,
    fontWeight: '800',
  },
});

export default StylesPage;
