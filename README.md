# Etec Jobs

![Preview-Screens](https://github.com/EduMachado07/etecJobs/blob/main/assets/etecJobs.png)

Ideia do projeto:

_"app mobile para visualizar vagas de emprego."_

Aplicação mobile desenvolvida durante um evento de Hackathon organizado pelos professores da intuição de ensino ETEC. 
Para o desafio foi fornecido uma API que consulta as vagas enviadas pelas empresas, e tinha como objetivo principal, criar um aplicativo para permitir a visualização dessas vagas sejam elas emprego, estágio ou jovem aprendiz.

## Motivo

Este projeto faz parte do meu portfólio.

Este projeto foi desenvolvido durante um Hackathon promovido pelos professores da ETEC.
Se você tiver qualquer feedback ficarei muito feliz em receber! Toda sugestão é muito bem-vinda para que eu continue melhorando como profissional.

Email: eduardo.silvamachado07@gmail.com

Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/eduardo-machado-dev/)

## Requisitos

- Renderizar todas as informações das vagas com as suas devidas imagens (emprego, estágio ou jovem aprendiz)
- Paginação - organizar as vagas em páginas
- Busca de vaga pelo nome
- Construir o design sob o layout fornecido
- Utilizar a plataforma [Expo](https://expo.dev/) para desenvolvimento do app

## Funcionalidades Finais

- Paginação
- Busca de vaga pelo nome e filtro por tipo (emprego, estágio e jovem aprendiz)
- Modo claro e noturno
- Recarregar página
- Compartilharmento de vaga
- Favoritar vaga

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

- [JavaScript](https://www.linkedin.com/in/eduardo-machado-dev/)
- [React Native](https://www.linkedin.com/in/eduardo-machado-dev/)
- [Axios](https://expo.dev/)
- [Expo](https://expo.dev/)
- [expo-sqlite](https://expo.dev/)
- [@react-navigation/stack](https://expo.dev/)


