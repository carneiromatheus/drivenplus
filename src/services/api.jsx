import axios from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v4/driven-plus/"

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } }
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/auth/login`, body);

  return promise;
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);

  return promise;
}

const api = { login, signUp }

export default api;