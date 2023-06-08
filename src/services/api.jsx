import axios from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v4/driven-plus/"

function signUp(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
  
    return promise;
  }

  const api = { signUp }
  
  export default api;