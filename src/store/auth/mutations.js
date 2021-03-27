export function auth_success(state, payload) {
  console.log("mutations auth_success", payload);
  state.status = "success";
  state.token = payload.token;
  state.user = payload.user;
}
export function auth_login_request(state, payload) {
  console.log("mutations auth_login_request", payload);
  state.loginStatus = payload;
}
export function logout(state) {
  state.status = "";
  state.user = "";
  state.token = "";
}
