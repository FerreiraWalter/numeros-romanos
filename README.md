<h1 align="center">Números Romanos🏛️</h1>
<p align="center"><img src="https://thumbs.dreamstime.com/b/livros-antigos-com-algarismos-romanos-na-biblioteca-numerais-no-arquivo-da-202091142.jpg" width="400"></p>
<h3 align="center">🔍 Navegue por dentro do Readme </h3>
<p align="center">
  <a href="#como-iniciar-o-programa-do-jeito-certo">❓
  O que é</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#para-finalizar">🗺️ Funcionamento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#configurando-o-docker">🚘 Inicialização</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#configurando-o-docker">🐋Docker</a>
</p>


## ❓ O que é:
Sistema para localizar o maior número romano dentro de uma palavra passada pelo usuário.

```sh
{
  "text": "AIXBIVH"
}
```
Existem 2 números romano na frase, IX (9) e IV (4), seu retorno será:
```sh
{
  "number": "IX",
  "value": 9
}
```
O programa remove as letras que não fazem parte dos números romanos e compara o que sobrou!
<br></br>
## 🗺️ Funcionamento:
- **/search (POST)** -> Essa rota receberá uma requisição (em formato JSON) contendo a palavra digitada pelo usuario.
- O usuário irá receber como resposta um status http 200 (OK) contendo a resposta da requisição.
<br></br>
## 🚘 Inicialização:
Após explicar como funciona a aplicação utilize esse comando para instalar as dependências existentes no programa:

```sh
 npm install
```
e para iniciar a nossa aplicação use o seguinte comando:
```sh
 npm run dev
```
## 🐳 Docker:

O **Docker** inclui todas as dependências necessárias para executar a aplicação, cola esse comando no console para ter acesso a aplicação:
```sh
 docker container run -d --name redis-plm2 -p 6379:6379 redis
```
Obs: Verifique se o **Container** iniciou corretamente usando:
```sh
 docker ps
```
caso não seja o Container **redis-plm2**, digite no seu console:
```sh
 docker start redis-plm2
```
