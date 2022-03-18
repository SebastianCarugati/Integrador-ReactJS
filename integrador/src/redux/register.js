import axios from "axios";

const defaultValue = {
  userInfo: {},
  token: null,
  error: false,
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const ERROR = "ERROR";

export default function RegisterReducer(
  state = defaultValue,
  { type, payload }
) {
  switch (type) {
    case LOGIN:
      return { ...state, token: payload, error: false };
    case LOGOUT:
      return defaultValue;
    case ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
}


export const registerAction =
  ({ name, lastName, email, password }) =>
  async (dispatch) => {
    try {
  
      const response = await axios.post(
        "https://back-sandbox.herokuapp.com/api/auth/register",
        {
          name,
          lastName,
          email,
          password,
        }
      );
      
      dispatch({
        payload: response.data.token,
        type: LOGIN,
        token: localStorage.setItem("token", response.data.token),
        
      }, alert ("Te registraste con exito!"),
  
      );
    } catch (error) {
      dispatch({
        type: ERROR,
      });}
    };