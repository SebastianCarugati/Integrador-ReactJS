import axios from "axios";
// Valor inicial
const defaultValue = {
    token: null,
    error: false, 
    userInfo: {} //lo obtenemos del postman del backen de Juli, del Get user
}

// Action Types  (son los que comparamos en el switch)
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ERROR = 'ERROR';
const GET_USER_INFO = 'GET_USER_INFO'


//REDUCER que se exporta por default

export default function AuthReducer(state = defaultValue, { type, payload }){  
        switch(type) {
            case LOGIN: return {...state, token: payload, error: false, }
            case LOGOUT: return defaultValue
            case ERROR: return {...state, error: true}
            case GET_USER_INFO: return {...state, userInfo: payload }
            default: return state   
        }
    }
    

//Actions

export const LoginAction = ({ email, password, navigate }) => async (dispatch) => {

    try {
        const response = await axios.post ('https://back-sandbox.herokuapp.com/api/auth/login',{email, password})
        const token = response.data.token;
        console.log (token);
       dispatch ({ type: LOGIN, payload: token});

    }
     catch (error) {
      dispatch ({type: Error})
    }
}
