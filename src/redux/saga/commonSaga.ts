import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { actionsCommon, ActionsType, actionsTypes } from '../commonReducer';
import { userApi } from '../../api/user';
import { authType, jogType } from '../../types';
import { removeAccessTokenToStorage, setAccessTokenToStorage } from '../../utils/storage';
import jogsApi from '../../api/jogs';

function* getAuthenticationTokenFromAPI(action: ActionsType): SagaIterator | string {
  if (action.type === actionsTypes.ASYNC_GET_AUTHENTICATION_TOKEN) {
    const { uuid } = action;

    const data: authType = yield call(userApi.getUserToken, uuid);
    yield setAccessTokenToStorage(data.access_token);
    yield put(actionsCommon.setUserToken(data.access_token));
    yield put(actionsCommon.setLoginFlag(true));
  }
}

function* checkOnTokenValid(action: ActionsType): SagaIterator | boolean {
  if (action.type === actionsTypes.ASYNC_CHECK_ON_TOKEN_VALID) {
    const isLogin: boolean = yield call(userApi.isTokenValid);
    if (!isLogin) {
      yield removeAccessTokenToStorage();
    }
    yield put(actionsCommon.setLoginFlag(isLogin));
  }
}

function* updateArrayJogs(action: ActionsType): SagaIterator | jogType[] {
  if (action.type === actionsTypes.ASYNC_GET_JOGS) {
    const jogs: jogType[] = yield call(jogsApi.getJogs);
    yield put(actionsCommon.setJogs(jogs));
  }
}

function* postJogToAPI(action: ActionsType): SagaIterator | boolean {
  if (action.type === actionsTypes.ASYNC_POST_JOG) {
    const { jog } = action;

    const isSuccess = yield call(jogsApi.postJog, jog);
    if (isSuccess) {
      yield put(actionsCommon.setSendJogFlag(isSuccess));
    }
  }
}

function* commonWatcher() {
  yield takeEvery(actionsTypes.ASYNC_GET_AUTHENTICATION_TOKEN, getAuthenticationTokenFromAPI);
  yield takeEvery(actionsTypes.ASYNC_CHECK_ON_TOKEN_VALID, checkOnTokenValid);
  yield takeEvery(actionsTypes.ASYNC_GET_JOGS, updateArrayJogs);
  yield takeEvery(actionsTypes.ASYNC_POST_JOG, postJogToAPI);
}

export default commonWatcher;
