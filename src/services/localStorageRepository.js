// Esta é a camada de "Repositório" ou "Dados", que lida diretamente com o localStorage.
const localStorageKey = "tasks";

const getTasks = () => {
  try {
    const storedTasks = window.localStorage.getItem(localStorageKey);
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    console.error("Falha ao ler do localStorage:", error);
    return [];
  }
};

const saveTasks = (tasks) => {
  try {
    window.localStorage.setItem(localStorageKey, JSON.stringify(tasks));
  } catch (error) {
    console.error("Falha ao salvar no localStorage:", error);
  }
};

export const localStorageRepository = {
  getTasks,
  saveTasks,
};
