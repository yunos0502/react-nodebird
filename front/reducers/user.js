const dummyUser = {
  id: 1,
  nickname: 'yunos',
  posts: [],
  Followings: [],
  Followers: [],
};

const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';

export const signUpAction = (data) => {
  return {
    type: SIGN_UP,
    data,
  };
};

export const signUpSuccess = {
  type: SIGN_UP_SUCCESS,
};

export const loginAction = (data) => {
  return {
    type: LOG_IN,
    data,
  };
};

export const logoutAction = {
  type: LOG_OUT,
};

export const signUp = (data) => {
  return {
    type: SIGN_UP,
    data,
  };
};

// (이전 상태, 액션) => 다음 상태
export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        me: dummyUser,
        loginData: action.data,
      };
    }

    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    }

    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
