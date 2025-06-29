import React, { createContext, useState, } from 'react';

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [paginaInicial, setPaginaInicial] = useState(0);
  const [pagina, setPagina] = useState(1);

  // Função para avançar a página
  const avancarPagina = () => {
    if (paginaInicial < 28 && pagina < 7) {
      setPaginaInicial((prev) => prev + 7);
      setPagina((prev) => prev + 1);
    }
  };

  // Função para retornar a página
  const retornarPagina = () => {
    if (paginaInicial > 0 && pagina > 1) {
      setPaginaInicial((prev) => prev - 7);
      setPagina((prev) => prev - 1);
    }
  };

  // Função para mudar o tema
  const [isDark, setIsDark] = useState(false);
  const mudarTema = () => {
    setIsDark(!isDark);
  };

  // Função para abrir a pesquisa
  const [isOpen, setIsOpen] = useState(false);
  const mostrarPesquisa = () => {
    setIsOpen(!isOpen);
  };

  // Função para recarregar a página
  const [reload, setReload] = useState(false);
  const recarregar = () => {
    setReload(!reload);
  };

  const [vagasFavoritadas, setVagasFavoritadas] = useState([])

  return (
    <Context.Provider
      value={{
        pagina,
        paginaInicial,
        avancarPagina,
        retornarPagina,
        isDark,
        mudarTema,
        isOpen,
        mostrarPesquisa,
        reload,
        recarregar,
        vagasFavoritadas,
        setVagasFavoritadas,
      }}>
      {children}
    </Context.Provider>
  );
};
