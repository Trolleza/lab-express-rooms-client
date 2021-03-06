import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

// Interceptors são funções que interceptam uma requisição ou uma resposta antes do método ser executado, e transforma essa requisição ou resposta de alguma maneira. No nosso caso, vamos injetar os cabeçalhos de Authorization antes de cada requisição
api.interceptors.request.use((config) => {
  // busque as informações do usuário logado no localStorage
  const storedUser = localStorage.getItem("loggedInUser");

  // Transforma a string JSON em objeto literal
  const parsedStoredUser = JSON.parse(storedUser || '""');

  if (parsedStoredUser.token) {
    config.headers = {
      Authorization: `Bearer ${parsedStoredUser.token}`,
    };
  }

  return config;
});

export default api;
