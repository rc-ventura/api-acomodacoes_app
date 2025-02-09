# Real State app - Python & React

<img> ![DALL·E 2025-02-09 20 22 23 - A professional and stylish real estate banner in a horizontal format  The design features a luxurious home silhouette with a sleek house key, symboliz](https://github.com/user-attachments/assets/9062928c-d19f-4a4b-9421-aadde04aceac)
</img>

Este projeto tem como objetivo criar uma aplicação para gerenciamento de acomodações, com um backend em Python utilizando Flask e um frontend em React. A aplicação tem como foco fornecer uma interface para os usuários visualizarem, interagirem e, em breve, gerenciar acomodações de forma simples.

## Tecnologias Usadas

### Backend:

- **Flask**: Framework Python para desenvolvimento de APIs.
- **Docker**: Utilizado para containerizar a aplicação backend.
- **Gunicorn**: Servidor WSGI para rodar a aplicação Flask.

### Frontend:

- **React.js**: Biblioteca JavaScript para a construção da interface do usuário.
- **Material UI**: Framework de componentes para criar a interface.
- **Docker**: Utilizado para containerizar a aplicação backend.
- **Axios**: Biblioteca para requisições HTTP entre frontend e backend.

## Ambiente de Desenvolvimento:

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js** (para executar o frontend)

      Download: https://nodejs.org/

- **Docker** (para rodar os contêineres do projeto)

      Download: https://www.docker.com/get-started

- **Python 3.x** (para rodar o backend)

      Download: https://www.python.org/downloads/

- **Docker Compose** (para facilitar o gerenciamento dos contêineres)

Já incluído no Docker Desktop ou pode ser instalado separadamente: https://docs.docker.com/compose/install/

## Estrutura do Projeto

```

.
├── backend/
│ ├── app/
│ │ ├── main.py # Arquivo principal da API (Flask)
│ ├── Dockerfile # Arquivo Docker para o backend
│ └── requirements.txt # Dependências do backend
│
├── frontend/
│ ├── src/
│ │ ├── components/ # Componentes do React
│ │ ├── App.js # Componente principal do React
│ │ └── index.js # Arquivo de entrada do frontend
│ ├── public/
│ └── package.json # Dependências do frontend
│
├── docker-compose.yml # Arquivo para orquestrar o Docker
└── .gitignore # Arquivo para ignorar arquivos desnecessários

```

## Como Rodar o Projeto

### Para rodar o projeto com Docker Compose:

1. Clone o repositório:

   ```
   git clone https://github.com/rc-ventura/api-acomodacoes_app.git
   cd api-acomodacoes_app
   ```

2. Rode o comando abaixo para iniciar os containers backend e frontend:

   ```
   docker-compose up --build
   ```

3. Acesse a aplicação:
   - Frontend: [http://localhost:3000/acomodacoes](http://localhost:3000/acomodacoes)
   - Backend: [http://localhost:5001/api/v1/acomodacoes](http://localhost:5001/api/v1/acomodacoes)

### Para rodar o Backend separadamente:

1. Instale as dependências:

   ```
   cd backend
   pip install -r requirements.txt
   ```

2. Inicie o servidor:
   ```
   python3 -m app.main
   ```

### Para rodar o Frontend separadamente:

1. Instale as dependências:

   ```
   cd frontend
   npm install
   ```

2. Inicie o servidor:
   ```
   npm start
   ```

## Rotas Backend

### A API foi desenvolvida utilizando Flask e oferece as seguintes rotas:

- **GET /api/v1/acomodacoes**: Retorna todas as acomodações.
- **GET /api/v1/acomodacoes/:id**: Retorna os detalhes de uma acomodação específica.

**Observação**: A API ainda não está conectada a um banco de dados. As informações estão armazenadas de forma estática por enquanto.

## Rotas Frontend

### As telas foram desenvolvidas utilizando JS com React e oferece as seguintes rotas:

- **/acomodacoes**: Lista as acomodações
- **/acomodacoes/:id**: Retorna os detalhes de uma acomodação específica.
- **/acomodacoes/home**:  Tela principal da page.


**Observação**: Os dados provenientes da página Home são estáticos. Ainda não está conectada a chamada da API (Backend).


## Funcionalidades Implementadas no Frontend

- **Tela de Início**: Tela de Home responsiva e finalizada.
- **Footer**: Footer da page responsivo e finalizado.
- **Barra de Navegação**: Barra de navegação responsivo e finalizado.
- **Banner**: Banner da página principal finalizado.
- **Slider de Imagens**: Um slider de imagens responsivo e dinâmico finalizado.
- **Cards**: Cards que apresentam as acomodações de forma sucinta e responsivos finalizados
- **Exibição das Acomodações**: O frontend consegue consumir a API para exibir uma lista de acomodações.
- **Detalhes da Acomodação**: Ao clicar em uma acomodação, o usuário é direcionado para a página de detalhes da acomodação.
- **Filtro por localização**: Ao buscar uma acomodação por localização, o usuário filtra por localização.
- **Sistema de Favoritos**: Adicionar e remover acomodações favoritas.

  

## Funcionalidades Faltando

- **Filtros**: Filtros para busca de acomodações por preço, etc.
- **Formulário de Contato**: Implementar o formulário de contato na página "Contato".
- **Integração com Banco de Dados**: Adicionar suporte a um banco de dados (por exemplo, PostgreSQL ou MySQL) para armazenar as acomodações.
- **Gestão do projeto**: Ajustar as pastas e organização do projeto.
- **Melhorar o layout**: Fazer ajustes no layout.
- **Conteúdo das novas páginas**: criar conteúdos das novas páginas.
- **Sincronizar as imagens**: As imagens da aplicação são provenientes de uma API de imagens.



## O Que Falta no Backend

- **Integração com Banco de Dados**: Implementar um banco de dados para armazenar e recuperar as acomodações dinamicamente.
- **Autenticação e Autorização**: Implementar login de usuários e controle de permissões.
- **Funções de CRUD**: Implementar as funcionalidades de criação, edição e exclusão de acomodações.

## Como Contribuir

1. Faça um fork do repositório.
2. Crie uma branch para sua funcionalidade:
   ```
   git checkout -b feature/nome-da-funcionalidade
   ```
3. Adicione suas alterações e faça commit:
   ```
   git add .
   git commit -m "Descrição da funcionalidade"
   ```
4. Envie a branch para o repositório remoto:
   ```
   git push origin feature/nome-da-funcionalidade
   ```
5. Abra um Pull Request para a branch `main`.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
