import { InferActionsTypes } from './store';

export const initialState = {
  isFilterActive: false as boolean,
  isLogin: false as boolean,
  userToken: '' as string,
  uuid: 'hello' as string,
};

export enum actionsTypes {
  TOGGLE_FILTER_FLAG = 'COMMON/TOGGLE_FILTER_FLAG',
  ASYNC_GET_AUTHENTICATION_TOKEN = 'COMMON/ASYNC_GET_AUTHENTICATION_TOKEN',
  SET_AUTHENTICATION_TOKEN = 'COMMON/SET_AUTHENTICATION_TOKEN',
  SET_LOGIN_FLAG = 'SET_LOGIN_FLAG',
  ASYNC_CHECK_ON_TOKEN_VALID = 'COMMON/ASYNC_CHECK_ON_TOKEN_VALID',
}

export const actionsCommon = {
  toggleFilterFlag: (isFilterActive: boolean) =>
    ({ type: actionsTypes.TOGGLE_FILTER_FLAG, isFilterActive } as const),
  asyncGetAuthenticationToken: (uuid: string) =>
    ({ type: actionsTypes.ASYNC_GET_AUTHENTICATION_TOKEN, uuid } as const),
  setUserToken: (userToken: string) =>
    ({ type: actionsTypes.SET_AUTHENTICATION_TOKEN, userToken } as const),
  setLoginFlag: (isLogin: boolean) => ({ type: actionsTypes.SET_LOGIN_FLAG, isLogin } as const),
  asyncCheckOnTokenValid: () => ({ type: actionsTypes.ASYNC_CHECK_ON_TOKEN_VALID } as const),
};

export type InitialStateType = typeof initialState;
export type ActionsType = InferActionsTypes<typeof actionsCommon>;

const commonReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case actionsTypes.TOGGLE_FILTER_FLAG: {
      return {
        ...state,
        isFilterActive: action.isFilterActive,
      };
    }
    case actionsTypes.SET_LOGIN_FLAG: {
      return {
        ...state,
        isLogin: action.isLogin,
      };
    }
    case actionsTypes.SET_AUTHENTICATION_TOKEN: {
      return {
        ...state,
        userToken: action.userToken,
      };
    }
    default:
      return state;
  }
};

export default commonReducer;
