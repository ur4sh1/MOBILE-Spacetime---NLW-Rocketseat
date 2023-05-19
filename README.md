#Exercício de React-Native
<h1 align="center">:file_cabinet: Mobile - Spacetime</h1>

## :memo: Descrição
Projeto criado no evento da Rocketseat NLW-Spacetime

## :books: Funcionalidades
* 

## :wrench: Tecnologias utilizadas
* Expo

## :rocket: Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo, dar o seguinte comando para iniciar o projeto:
```
git clone 
```
Instalar o npm
```
npm i
```
Executar
```
npx expo start --clear
```

## :wrench: Histórico de comandos
Criando o projeto web com o Expo - com o template typescript
```
npx create-expo-app mobile --template
```
Instalando a biblioteca NativeWind
```
npm i nativewind
```
Instalando a biblioteca tailwindcss como dependência de desenvolvimento
```
npm i tailwindcss --save -D
```
Iniciando o arquivo de configuração do tailwind
```
npx tailwindcss init
```
Modificar a linha "content" do arquivo tailwind.config.js por
```
content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
```
Adicionar esta linha dentro do arquivo "babel.config.js" no "return"
```
plugins: ["nativewind/babel"],
```
Adicionar esta linha dentro do arquivo "tsconfig.json" no "compileroptions":
```
"types": [
      "nativewind/types"
    ]
```
Instalando a fonte roboto / bai-jamjuree do google
```
npx expo install expo-font @expo-google-fonts/roboto @expo-google-fonts/bai-jamjuree expo-font
```
Intalando a biblioteca Svg do Expo
```
npx expo install react-native-svg
```
Instalando a biblioteca react-native-svg-transformer como dependência de desenvolvimento
```
npm i react-native-svg-transformer --save-dev
```



-----old project

Criar a pasta @types, criar um arquivo com o nome "app.d.ts"
```
/// <reference types="nativewind/types" />
```
Criar um arquivo de configuração na raiz com o nome "metro.config.js"
```
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
```
Criar um arquivo na pasta @types com o nome "svg.d.ts"
```
declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```
Instalando a biblioteca dayjs
```
npm i dayjs
```
Criar a pasta 'lib', criar o arquivo dayjs.ts, definindo o local pt-br
```
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');
```
Instalando a bíblioteca react-navigation
```
npm install @react-navigation/native
```
Instalando as dependências da bíblioteca react-navigation
```
npx expo install react-native-screens react-native-safe-area-context
```
Instalando o native stack da bíblioteca react-navigation
```
npm install @react-navigation/native-stack
```
Instalando o axios para requisições http
```
npm i axios
```
Instalando a bíbioteca clsx
```
npm i --save clsx
```