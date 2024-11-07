# Lojinha - API de Gestão de Categorias

Este projeto gerencia categorias de produtos usando uma API REST com Spring Boot. Ele permite operações CRUD (Criar, Ler, Atualizar, Deletar) para categorias em uma loja.

## Tecnologias

- **Backend**: Java, Spring Boot, Spring Data JPA
- **Banco de Dados**: MySQL (usando WAMP)
- **Frontend**: HTML, JavaScript (com AJAX)


## Como Rodar

### 1. Frontend (HTML e JavaScript)
1. Abra os arquivos `index.html`, `adicionar.html` e `editar.html` no navegador.
2. O frontend estará disponível na porta **8082** e se comunicará com o backend na porta **http://localhost:8082**.

### 2. Backend (API)
1. Instale o **WAMP** (ou **XAMPP**) e inicie o **MySQL**.
2. Crie um banco de dados chamado `lojinha` no **phpMyAdmin**.
3. Configure o arquivo `application.properties` com as informações do banco de dados:

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/lojinha
    spring.datasource.username=root
    spring.datasource.password=senha
    ```

4. Execute o backend com o comando:

    ```bash
    ./mvnw spring-boot:run
    ```

5. O backend estará disponível em **http://localhost:8081**.

### 3. Frontend e Backend
O frontend se comunica com o backend na porta **8081**.


## Endpoints

A API oferece os seguintes endpoints para interagir com as categorias:

### 1. **GET** `/categorias`
- **Descrição**: Lista todas as categorias.
- **Exemplo de URL**: `http://localhost:8081/categorias`
- **Teste**: Abra o arquivo `index.html` no seu navegador. A lista de categorias será carregada automaticamente.

### 2. **GET** `/categorias/{id}`
- **Descrição**: Busca uma categoria pelo ID.
- **Exemplo de URL**: `http://localhost:8081/categorias/1` (Substitua `1` pelo ID da categoria desejada).
- **Teste**: No `index.html`, clique no link de detalhes de uma categoria para buscar pelo ID.

### 3. **GET** `/categorias/descricao/{descricao}`
- **Descrição**: Pesquisa categorias por descrição.
- **Exemplo de URL**: `http://localhost:8081/categorias/descricao/livro` (Substitua `livro` pela descrição que deseja pesquisar).
- **Teste**: Acesse a URL diretamente ou use o campo de pesquisa no frontend.

### 4. **POST** `/categorias`
- **Descrição**: Adiciona uma nova categoria.
- **Exemplo de URL**: `http://localhost:8081/categorias`
- **Testando no Frontend**:
    - Vá para `adicionar.html`.
    - Preencha o formulário com a descrição da nova categoria e clique em **Adicionar**.
    - A categoria será salva no banco de dados e exibida na lista.

### 5. **PUT** `/categorias/{id}`
- **Descrição**: Atualiza uma categoria existente.
- **Exemplo de URL**: `http://localhost:8081/categorias/1` (Substitua `1` pelo ID da categoria que deseja atualizar).
- **Testando no Frontend**:
    - Vá para `editar.html`.
    - Preencha a descrição da categoria que deseja editar.
    - Clique em **Salvar Alterações** para atualizar a categoria.

### 6. **DELETE** `/categorias/{id}`
- **Descrição**: Deleta uma categoria pelo ID.
- **Exemplo de URL**: `http://localhost:8081/categorias/1` (Substitua `1` pelo ID da categoria que deseja deletar).
- **Testando no Frontend**:
    - Na página `index.html`, clique no link de **Deletar** ao lado da categoria que deseja excluir.
    - A categoria será removida da lista.

## Licença
Este projeto está licenciado sob a **Licença MIT**.
