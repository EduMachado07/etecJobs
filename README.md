# Etec Jobs

![Preview-Screens](https://github.com/EduMachado07/etecJobs/blob/main/assets/etecJobs.png)

Ideia do projeto:

_"app mobile para visualizar vagas de emprego."_

Aplicação mobile desenvolvida durante um evento de Hackathon organizado pelos professores da intuição de ensino ETEC. 
Para o desafio foi fornecido uma API que consulta as vagas enviadas pelas empresas, e tinha como objetivo principal, criar um aplicativo para permitir a visualização dessas vagas sejam elas emprego, estágio ou jovem aprendiz.

Faça download do app [aqui](https://drive.google.com/file/d/1b6FxTJDU-GvtZ0CRqPeFmiGuM87XTGCm/view?pli=1). **Disponível apenas para Android.**

## Motivo

Este projeto faz parte do meu portfólio.

Este projeto foi desenvolvido durante um Hackathon promovido pelos professores da ETEC.
Se você tiver qualquer feedback ficarei muito feliz em receber! Toda sugestão é muito bem-vinda para que eu continue melhorando como profissional.

Email: eduardo.silvamachado07@gmail.com

Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/eduardo-machado-dev/)

## Requisitos

- Renderizar vagas: exibir todas as informações de cada vaga e imagem conforme o tipo (emprego, estágio ou jovem aprendiz) via API.
- Paginação: organizar as vagas em páginas para facilitar a navegação do usuário.
- Busca: permitir a pesquisa de vagas pelo nome.
- Layout: seguir o design definido no protótipo/layout fornecido.
- Plataforma: desenvolvimento do aplicativo utilizando Expo (React Native).

## Funcionalidades Finais

- Paginação: navegação entre páginas de vagas.
- Busca e Filtro: busca por nome de vaga e filtro por tipo (emprego, estágio ou jovem aprendiz).
- Modo Claro e Escuro: alternância entre temas claro e noturno.
- Atualização: recurso de recarregar a lista de vagas (pull to refresh).
- Compartilhamento: permitir que o usuário compartilhe uma vaga em outras plataformas.
- Favoritos: possibilitar que o usuário marque e gerencie vagas como favoritas.

![Preview-Screens](https://github.com/EduMachado07/etecJobs/blob/main/assets/wall.png)

## APIs

### Vagas

Url base:

> https://etecsjcampos.com.br/api/api.php

Para paginação, recebe dois parâmetros na url, **_inicio_** e **_quantidade_**.

**Exemplo:**

> https://etecsjcampos.com.br/api/api.php?inicio=1&quantidade=1

**Retorno:**

```
[
  {
    "cdvaga": "305",
    "id_tipo_vaga": "2",
    "nm_vaga": "ESTÁGIO ADMINISTRATIVO",
    "ds_vaga": "ESTÁGIO - ESTÁGIO ADMINISTRATIVO\r\nEnsino médio - Período noturno ID 753 / 823\r\n\r\nLocal: Centro - São José dos Campos - SP\r\n\r\nDe segunda a sexta-feira\r\n\r\nDas 10h30 às 17h30 - Com 1 (uma) hora de intervalo\r\n\r\nR$800,00\r\nAuxílio transporte\r\nAuxílio refeição no valor de R$150,00\r\n\r\nAtividades : Auxiliar no atendimento ao cliente, auxiliar na recepção de visitantes, auxiliar no controle e direcionamento de chamadas telefônicas, auxiliar na anotação de recados e transmissão dos mesmos, auxiliar no controle de correspondência recebendo e direcionando, auxiliar nos envios de pacotes e e-mails, auxiliar na higiene e organização do ambiente de trabalho, auxiliar em tarefas administrativas, auxiliar no controle de consumo mensalmente no site da EDP/COMGÁS/SABESP.\r\n\r\nEnvie seu currículo: 12 98123-1237",
    "ds_keywords": "ESTÁGIO ADMINISTRATIVO",
    "st_vaga": "1",
    "dt_registro_vaga": "2025-08-15 18:51:03",
    "url_imagem_vaga": "0",
    "nm_tipo_vaga": "Vaga de Estágio"
  }
]
```

### Imagens

Emprego:

> https://etecsjcampos.com.br/vagas/1.png

Estágio:

> https://etecsjcampos.com.br/vagas/2.png
 
Jovem Aprendiz:

> https://etecsjcampos.com.br/vagas/3.png

## Construído com

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) 
- [React Native](https://reactnative.dev/)  
- [Expo](https://expo.dev/) 
- [Axios](https://axios-http.com/)
- [expo-sqlite](https://docs.expo.dev/versions/latest/sdk/sqlite/)  
- [React Navigation](https://reactnavigation.org/)
- [@react-navigation/stack](https://reactnavigation.org/docs/stack-navigator/)
- [@expo/vector-icons](https://icons.expo.fyi/)
- [React Native Animatable](https://github.com/oblador/react-native-animatable)




