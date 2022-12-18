import * as types from './types'
const userInfo = localStorage.getItem('USER_INFO');
const defaultState = {
    userInfo: userInfo ? JSON.parse(userInfo) : {
        isLoggedIn: false,
        firstname: '',
        lastname:'',
        email:'',
        username:'',
        userId:'',
        msg:'',
        allInfo:{}
    },
    error: [],
    isLoggedIn: false,
    isError: false,
    isPending: false
};



export default function userReducer(state = defaultState, action) {

    switch (action.type) {
        case types.LOGIN_LODING:
            return { ...state, isLoggedIn: false, isPending: true, isError: false }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                 userInfo: action.payload.userInfo
                , isLoggedIn: true, isPending: false, isError: false
            };
        case types.LOGIN_PENDING_ACCOUNT:
            return {
                ...state,
                error: [action.payload],
                isLoggedIn: false,
                isPending: false,
                isError: false,
                isPendingAccount:true
            };
        case types.LOGIN_RESET_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                isPending: false,
                isError: false,
                isPendingAccount:false
            };    
        case types.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,                
                isLoggedIn: false,
                isPending: false,
                isError: true,
              
            };
        case types.LOGOUT_SUCCESS:
            return {
                ...state, userInfo: {
                    isLoggedIn: false,
                    firstname: '',
                    lastname:'',
                    email:'',
                    username:'',
                    userId:'',
                    msg:'',
                    allInfo:{}
                },
                error: [],
                isLoggedIn: false,
                isError: false,
                isPending: false
            };
        default:
            return state;
    }

}