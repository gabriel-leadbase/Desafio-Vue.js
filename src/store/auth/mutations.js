export function auth_success(state, payload) {
  state.status = "success";
  state.token = payload.token;
  state.user = payload.user;
}
export function auth_login_request(state, payload) {
  state.loginStatus = payload;
}
export function logout(state) {
  state.status = "";
  state.user = "";
  state.token = "";
}
