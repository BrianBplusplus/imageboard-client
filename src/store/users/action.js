import request from "superagent";
//const baseUrl = "http://localhost:4000";
const baseUrl =
  "https://brian-imageboard-server.herokuapp.com" || "http://localhost:4000";

export const LOG_IN = "LOG_IN";

function actionCreator(JWT) {
  return {
    type: "LOG_IN",
    payload: JWT
  };
}

export function login(email, password) {
  return async (dispatch, getState) => {
    request
      .post(`${baseUrl}/login`, { email, password })
      .then(response => {
        const action = actionCreator(response.body);
        dispatch(action);
      })
      .catch(console.error);
  };
}
