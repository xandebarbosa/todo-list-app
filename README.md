# 📝 To-Do List App (Lista de Tarefas)

Este é um projeto de uma aplicação de lista de tarefas (`To-Do List`) desenvolvido em **React**.  
O objetivo é demonstrar a aplicação de princípios de arquitetura de software limpa e padrões de projeto modernos, como **Clean Architecture** e **SOLID**, em um ambiente de front-end.

A aplicação permite que o usuário adicione, visualize, atualize, marque como concluída e exclua tarefas, com os dados persistindo no `localStorage` do navegador.

---

## ⚙️ Visão Técnica e Padrões de Projeto

O projeto foi estruturado para ser **escalável, manutenível e testável**, seguindo uma arquitetura de camadas bem definida.

### 🔹 Clean Architecture

A aplicação é dividida em camadas de responsabilidade, com uma regra clara de dependência: as camadas externas dependem das internas, mas nunca o contrário.

- **`src/pages` (Apresentação):** Representa as telas da aplicação (ex: `HomePage`). É responsável por compor os componentes de UI.
- **`src/components` (Apresentação):** Contém os componentes de UI reutilizáveis, como `TaskForm`, `TaskList` e `TaskItem`. Não possuem lógica de negócio.
- **`src/contexts` (Gerenciamento de Estado):** Centraliza o estado e a lógica de negócio. O `TaskContext.js` gerencia a lista de tarefas, orquestrando chamadas aos serviços.
- **`src/hooks` (Acesso ao Estado):** Hooks customizados (`useTasks`) que servem como ponte entre os componentes de UI e o `TaskContext`.
- **`src/services` (Dados):** Abstrai as fontes de dados. `TaskService.js` define operações de negócio, enquanto `localStorageRepository.js` lida com persistência no `localStorage`.

---

### 🔹 SOLID

1. **S - Responsabilidade Única:** Cada módulo tem um propósito único.

   - Exemplo: `TaskItem` apenas exibe uma tarefa; `TaskContext` gerencia o estado.

2. **O - Aberto/Fechado:** Aberto a extensões, fechado para modificações.

   - Exemplo: trocar `localStorage` por API exigiria apenas criar `apiRepository.js` e injetá-lo no `TaskService`.

3. **D - Inversão de Dependência:** A UI não depende de implementações concretas.
   - Exemplo: `TaskItem` usa o hook `useTasks` para interagir com o contexto, sem chamar o `TaskService` diretamente.

---

### 🔹 Clean Code

- **Nomes claros:** Funções e variáveis como `toggleTask`, `addTask`.
- **Componentes pequenos:** Cada um com uma única responsabilidade.
- **Caminhos absolutos:** Configurados via `jsconfig.json` para simplificar imports.

---

## 🚀 Como Executar o Projeto

### ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)
- `npm` ou `yarn`

### 🔹 1. Clonar o Repositório

```bash
git clone https://github.com/xandebarbosa/todo-list-app.git
cd todo-list-app
```

### 🔹 2. Instalar as Dependências

```bash
npm install
```

### 🔹 3. Executar a Aplicação

```bash
npm start
```

A aplicação será aberta automaticamente em:  
👉 [http://localhost:3000](http://localhost:3000)
