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

function subscription(body, token) {
  const config = createConfig(token)
  const promise = axios.post(`${BASE_URL}/subscriptions`, body, config);

  return promise;
}

function getListPlans(token) {
  const config = createConfig(token)

  const promise = axios.get(`${BASE_URL}/subscriptions/memberships`, config)

  return promise
}

function getPlan(token, idPlan) {
  const config = createConfig(token, idPlan)

  const promise = axios.get(`${BASE_URL}/subscriptions/memberships/${idPlan}`, config)

  return promise
}

const api = { getListPlans, getPlan, login, signUp, subscription }

export default api;