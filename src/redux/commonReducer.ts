import { InferActionsTypes } from './store';
import { jogType } from '../types';

export const initialState = {
  isFilterActive: false as boolean,
  isLogin: false as boolean,
  userToken: '' as string,
  uuid: 'hello' as string,
  jogs: [{ id: 1, user_id: 'test', distance: 1, time: 2, date: '1' }] as jogType[],
  isAwait: true as boolean,
  isSuccessSendJog: false as boolean,
};

export enum actionsTypes {
  TOGGLE_FILTER_FLAG = 'COMMON/TOGGLE_FILTER_FLAG',
  ASYNC_GET_AUTHENTICATION_TOKEN = 'COMMON/ASYNC_GET_AUTHENTICATION_TOKEN',
  SET_AUTHENTICATION_TOKEN = 'COMMON/SET_AUTHENTICATION_TOKEN',
  SET_LOGIN_FLAG = 'COMMON/SET_LOGIN_FLAG',
  ASYNC_CHECK_ON_TOKEN_VALID = 'COMMON/ASYNC_CHECK_ON_TOKEN_VALID',
  ASYNC_GET_JOGS = 'COMMON/ASYNC_GET_JOGS',
  SET_JOGS = 'COMMON/SET_JOGS',
  SET_AWAIT_FLAG = 'COMMON/SET_AWAIT_FLAG',
  ASYNC_POST_JOG = 'COMMON/ASYNC_POST_JOG',
  SET_SUCCESS_SEND_JOG_FLAG = 'COMMON/SET_SUCCESS_SEND_JOG_FLAG',
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
  asyncGetJogs: () => ({ type: actionsTypes.ASYNC_GET_JOGS } as const),
  setJogs: (jogs: jogType[]) => ({ type: actionsTypes.SET_JOGS, jogs } as const),
  setAwaitFlag: (isAwait: boolean) => ({ type: actionsTypes.SET_AWAIT_FLAG, isAwait } as const),
  asyncPostJog: (jog: jogType) => ({ type: actionsTypes.ASYNC_POST_JOG, jog } as const),
  setSendJogFlag: (isSuccessSendJog: boolean) =>
    ({ type: actionsTypes.SET_SUCCESS_SEND_JOG_FLAG, isSuccessSendJog } as const),
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
    case actionsTypes.SET_JOGS: {
      return {
        ...state,
        jogs: [...action.jogs],
      };
    }
    case actionsTypes.SET_AWAIT_FLAG: {
      return {
        ...state,
        isAwait: action.isAwait,
      };
    }
    case actionsTypes.SET_SUCCESS_SEND_JOG_FLAG: {
      return {
        ...state,
        isSuccessSendJog: action.isSuccessSendJog,
      };
    }
    default:
      return state;
  }
};

export default commonReducer;
