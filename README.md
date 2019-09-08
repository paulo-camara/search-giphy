# Projeto Search Giphy

## Descrição

Projeto de buscas de gifs desejados. Insira seu tipo de gif desejado na caixa de texto e prescione ENTER ou click em PESQUISAR, ele irá fazer uma request para a [API](https://developers.giphy.com/), assim que o texto "Carregando..." desaparecer da tela, será exibido o gif de acordo com sua pesquisa. Você pode também trocar o gif pelo próximo da busca, copiar o link para compartilhar com um amigo ou até mesmo adicionar o gif em sua lista de favoritos. Ao adicionar, ele irá exibir na lista e gravar o gif em localstorage do seu browser, fazendo com que seus gifs fiquem salvos mesmo para uma visualização futura ao visitar o site.

## Hospedado em S3 aws

Endpoint : http://search-giphy.s3-website-us-east-1.amazonaws.com

## Criado com

* [React](https://github.com/facebook/react) - biblioteca JavaScript de manipulação de dom
* [Reflux](https://github.com/reflux/refluxjs) - biblioteca JavaScript de manipulação de objetos
* [Axios](https://github.com/axios/axios) - biblioteca JavaScript de requisições AJAX 
* [Saas](https://github.com/sass/sass) - biblioteca de auxílio em estilos.

## Dependencias

Para instalar as dependencias basta rodar o comando "yarn"

## Server

Para rodar o server basta rodar o comando "yarn start"