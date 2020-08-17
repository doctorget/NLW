<h1 align="center">📗 Proffy</h1>
<img alt="Proffy" src=".github/logo.svg" height="100px" />

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/doctorget/NLW?color=">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/doctorget/NLW?color=">
  <img alt="Project programing languages count" src="https://img.shields.io/github/languages/doctorget/NLW?color=">
</p> 

<p align="center">
  <a href="#bookmark-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-tecnologias-utilizadas">:gear: Construção</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#heavy_check_mark-requesitos">:heavy_check_mark: Requesitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrow_forward-executando">:arrow_forward: Executando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :bookmark: Sobre

O **Proffy** é uma aplicação Web e Mobile feita para auxiliar na conexão entre os alunos e os professores. Logo, esta aplicação oferece aos professores a possibilidade de registrar aulas, podendo adicionar informações como a disciplina, o custo e horário e aos alunos a possibilidade de buscar pelas aulas cadastradas.
  
Este projeto foi idealizado pensando no **6 de agosto**, onde se comemora o **Dia Nacional dos Profissionais da Educação**.
  
Essa aplicação foi realizada durante a Next **Level Week #2**, projeto da [Rocketseat](https://rocketseat.com.br/).


<p align="center">
  <img alt="design do projeto" width="650px" src="./.github/design.png" />
<p>


## :gear: Tecnologias utilizadas:

-  [Typescript](https://www.typescriptlang.org/)
-  [Node.js](https://nodejs.org/en/)
-  [ReactJS](https://reactjs.org/)
-  [React Native](http://facebook.github.io/react-native/)
-  [Expo](https://expo.io/)
-  [Express](https://expressjs.com/)
-  [axios](https://github.com/axios/axios)


<details>
    <summary>Web</summary>
    <ul><li>React</li></ul>
    <ul><li>TypeScript</li></ul>
    <ul><li>Axios</li></ul>
    <ul><li>React Icons</li></ul>
    <ul><li>HTML</li></ul>
    <ul><li>JSX</li></ul>
    <ul><li>CSS</li></ul>
</details>

<details>
    <summary>Mobile</summary>
    <ul><li>React</li></ul>
    <ul><li>React Native</li></ul>
    <ul><li>React Icons</li></ul>
    <ul><li>React Navigate</li></ul>
    <ul><li>Expo</li></ul>
    <ul><li>Expo Google Fonts</li></ul>
    <ul><li>TypeScript</li></ul>
    <ul><li>Axios</li></ul>
    <ul><li>CSS</li></ul>
</details>

### :heavy_check_mark: Requesitos

<ul>
    <li><a href="https://git-scm.com/downloads">Git</a></li>
    <li><a href="https://nodejs.org/en/">Node.Js</a></li>
    <li><a href="https://www.npmjs.com/get-npm">Npm</a>
    <li><a href="https://docs.expo.io/get-started/installation/" target="_blank">Expo</a></li>
</ul>

## :arrow_forward: Executando
 
 1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/HigorSnt/proffy.git
```

2. Executando a Aplicação:

```sh
  # API
  $ cd server
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Configurando o banco de dados e criando as tabelas.
  $ yarn knex:migrate # ou npm run knex:migrate

  # Inicie a API
  $ yarn start # ou npm start

  # Aplicação web
  $ cd web
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação web
  $ yarn start # ou npm start

  # Aplicação mobile
  $ cd mobile
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação mobile
  $ yarn start # ou npm start
```

<sup>Projeto desenvolvido com o tutorial de [Diego Fernandes](https://github.com/diego3g), da [Rocketseat](rocketseat.com.br).</sup>
