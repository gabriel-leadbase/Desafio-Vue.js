import { getToken, setToken } from "./../../services/token.service";

const auth_login_request = ({ commit }, payload) => {
  console.log("action auth_login_request", payload);
  return new Promise((resolve, reject) => {
    commit("auth_login_request", "loading");
    if (payload.email == "admin@hotmail.com" && payload.password == "123") {
      let token = "XXX.YYYY.ZZZZ";
      let user = {
        email: payload.email,
        name: "Administrador"
      };
      commit("auth_login_request", "finish");
      setToken(token);
      commit("auth_success", { user, token });
      resolve("Administrador");
    }
    if (payload.email == "vendedor@hotmail.com" && payload.password == "123") {
      let token = "XXX.YYYY.ZZZZ";
      let user = {
        email: payload.email,
        name: "Vendedor"
      };
      commit("auth_login_request", "finish");
      commit("auth_success", { user, token });
      resolve("Vendedor");
    } else {
      reject("Usuário ou senha incorretos");
    }
  });
};

const auth_success = ({ commit }, payload) => {
  console.log("action auth_success", payload);
  context.commit("auth_success", payload.token, payload.user);
};

const logout = () => {
  context.commit("logout");
};

export { auth_login_request, auth_success, logout };
