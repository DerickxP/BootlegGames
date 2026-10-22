# BootlegGames: loja de jogos fictícia

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green)

Front-end de uma loja de jogos online fictícia e satírica, com catálogo, busca,
filtro por gênero, página de detalhes e um painel de administração, tudo em HTML,
CSS e JavaScript puro, sem back-end.

> Projeto acadêmico da disciplina de Web Coding, feito em dupla. A "loja pirata" é só
> o tom humorístico do trabalho: o projeto é fictício, educacional e **não incentiva a
> pirataria**.

## Funcionalidades

- **Catálogo** com 30 jogos, busca por nome e filtro por gênero (RPG, ação, indie,
  terror, sobrevivência).
- **Detalhes do jogo** com gênero, preço e descrição.
- **Dois perfis**, escolhidos na tela de login e guardados no `localStorage`:
  - **Admin:** adiciona e remove jogos pelo painel administrativo;
  - **Player:** navega pelo catálogo e faz compras simuladas.
- **Páginas** de início, sobre, contato (envio simulado) e login.

## Como rodar

Não há build nem dependências: abra `login.html` no navegador, ou sirva a pasta:

```bash
python3 -m http.server 8000   # http://localhost:8000/login.html
```

## Estado atual

- Só o front-end. Login, compras e envio de contato são simulados.
- Jogos adicionados ou removidos pelo admin ficam só na memória da página e voltam
  ao catálogo original ao recarregar.
- A integração com um banco de dados relacional, desenvolvido em outra disciplina,
  está planejada para persistir usuários, catálogo e compras.

## Autores

- **Derick Portela**: [GitHub](https://github.com/DerickxP) · [LinkedIn](https://www.linkedin.com/in/derickportela/)
- **Anderson Ruan**: [GitHub](https://github.com/andersnruann) · [LinkedIn](http://www.linkedin.com/in/ruan-anderson-b4957a330)

## Licença

[MIT](LICENSE)
