import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import Splash from './components/Splash';
import Vagas from './components/PageVagas/Vagas';
import Favoritos from './components/Favoritos';
import About from './components/About';
import Layout from './components/Layout';
import { ContextProvider } from './components/context';

const Stack = createStackNavigator();

// Componente Pagina que envolve as rotas no Layout
function Pagina() {
  return (
    <Layout>
      <Vagas />
    </Layout>
  );
}

// Componente StackNavigator para definir as telas
function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 300,
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 300,
            },
          },
        },
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Pagina" component={Pagina} />
      <Stack.Screen name="Favoritos" component={Favoritos} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

// Componente principal da aplicação
export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ContextProvider>
  );
}
