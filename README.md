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
Intalando o axio
```
npm i axios
```
Instalando o expo secure-store
```
npx expo install expo-secure-store
```