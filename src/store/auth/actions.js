import {
  getToken,
  setToken,
  removeToken
} from "./../../services/token.service";

const auth_login_request = ({ commit, dispatch }, payload) => {
  return new Promise((resolve, reject) => {
    commit("auth_login_request", "loading");
    if (payload.email == "admin@hotmail.com" && payload.password == "123") {
      let token = "xxxxxxxxxx.yyyyyyyyyyyy.zzzzzzzzzzzz";
      let user = {
        email: payload.email,
        name: "Administrador",
        type: "Admin"
      };
      commit("auth_login_request", "finish");
      setToken(token);
      commit("auth_success", { user, token });
      resolve("Administrador");
    }
    if (payload.email == "vendedor@hotmail.com" && payload.password == "123") {
      let token = "xxxxxxxxxx.yyyyyyyyyyyy.zzzzzzzzzzzz";
      let user = {
        email: payload.email,
        name: "Vendedor",
        type: "Vendedor"
      };
      commit("auth_login_request", "finish");
      setToken(token);
      commit("auth_success", { user, token });
      resolve("Vendedor");
    } else {
      reject("Usuário ou senha incorretos");
    }
  });
};

const auth_logout = ({ commit }) => {
  removeToken();
  commit("logout");
};

export { auth_login_request, auth_logout };
