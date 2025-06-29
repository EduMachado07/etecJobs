import { View } from 'react-native';

import Styles from '../styles';
import StylesFooter from '../Styles/StylesFooter';
import StylesHeader from '../Styles/StylesHeader';

import Navigation from './Navigation';
import Header from './header';

function Layout({ children }) {
  return (
    <View style={Styles.container}>
     {/*COMPONENTE HEADER*/}
      <View style={StylesHeader.header}>
        <Header />
      </View>
    {/* PAGINA COM A CHAMADA API */}
      <View style={Styles.content}>{children}</View>

    {/* NAVEGACAO */}
    {/* COMPONENTE FOOTER */}
      <View style={StylesFooter.footer}>
        <Navigation />
      </View>
    </View>
  );
}
export default Layout;
