# To-Do List App com ReactJS

Uma aplicação simples e completa de lista de tarefas, desenvolvida com ReactJS, aplicando princípios de design de software como **Clean Architecture**, **SOLID** e **Clean Code**.

## Funcionalidades

- **Adicionar Tarefa:** Crie novas tarefas a partir de um campo de texto.
- **Editar Tarefa:** Atualize o texto de uma tarefa existente.
- **Marcar como Concluída:** Alterne o status de uma tarefa para 'concluída' ou 'pendente'.
- **Remover Tarefa:** Exclua uma tarefa da lista.
- **Persistência de Dados:** As tarefas são salvas no `localStorage` do navegador e persistem mesmo após recarregar a página.

### Visão Técnica: Design de Software

O projeto foi cuidadosamente arquitetado para ser robusto e de fácil manutenção, seguindo os seguintes princípios:

#### **1. Clean Architecture**

A aplicação é dividida em camadas lógicas para isolar as responsabilidades.

- **Camada de Apresentação (`components`):** Componentes React que se preocupam apenas com a interface (UI) e a navegação. Os componentes relacionados a uma única funcionalidade, como o formulário de tarefas, são co-localizados em suas próprias pastas (`form`).
- **Camada de Serviço (`services`):** Onde a lógica de negócio principal reside. `TaskService` encapsula todas as operações de gerenciamento de tarefas.
- **Camada de Repositório (`services`):** Uma sub-camada que lida diretamente com a fonte de dados (neste caso, `localStorageRepository`). Isso permite que a camada de serviço seja agnóstica à tecnologia de persistência.

#### **2. Princípios SOLID**

- **Single Responsibility Principle (SRP):** Cada arquivo/módulo tem uma única razão para mudar. `TaskService` lida com a lógica de negócio, `localStorageRepository` lida com o `localStorage`, e o componente `TaskForm` (com seu hook `useTaskForm`) lida com a lógica do formulário.
- **Dependency Inversion Principle (DIP):** A camada de serviço de alto nível (`TaskService`) não depende de uma implementação de baixo nível (`localStorageRepository`). Em vez disso, ambas dependem de abstrações (o "contrato" de como salvar e obter dados). Isso facilita a substituição do `localStorage` por uma API, por exemplo, sem precisar alterar a lógica de negócio.

#### **3. Clean Code**

- **Nomes Descritivos:** Variáveis, funções e arquivos têm nomes claros que expressam sua intenção (`handleAddTask`, `taskToEdit`, `localStorageRepository`).
- **Funções Pequenas:** As funções são concisas e fazem uma única coisa, melhorando a legibilidade e a testabilidade.
- **Lógica Isolada:** A lógica de negócio está completamente separada dos componentes de UI, o que torna o código mais limpo e fácil de entender.

### Como Executar o Projeto

Para rodar a aplicação em sua máquina local, siga os passos abaixo:

#### 1. Clonar o Repositório

```bash
git clone [https://github.com/xandebarbosa/todo-list-app.git](https://github.com/xandebarbosa/todo-list-app.git)
cd todo-list-app
```

#### 2. Instalar as Dependências

```bash
npm install
# ou
yarn install
```

#### 3. Iniciar a Aplicação

```bash
npm start
# ou
yarn start
```

A aplicação será iniciada em modo de desenvolvimento e estará disponível em `http://localhost:3000`. O navegador abrirá automaticamente.
