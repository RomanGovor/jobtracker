import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { actionsCommon, ActionsType, actionsTypes } from '../commonReducer';
import { jogtrackerApi } from '../../api/user';
import { authType } from '../../types';
import { removeAccessTokenToStorage, setAccessTokenToStorage } from '../../utils/storage';

function* getAuthenticationTokenFromAPI(action: ActionsType): SagaIterator | string {
  if (action.type === actionsTypes.ASYNC_GET_AUTHENTICATION_TOKEN) {
    const { uuid } = action;

    const data: authType = yield call(jogtrackerApi.getUserToken, uuid);
    yield setAccessTokenToStorage(data.access_token);
    yield put(actionsCommon.setUserToken(data.access_token));
    yield put(actionsCommon.setLoginFlag(true));
  }
}

function* checkOnTokenValid(action: ActionsType): SagaIterator | boolean {
  if (action.type === actionsTypes.ASYNC_CHECK_ON_TOKEN_VALID) {
    const isLogin: boolean = yield call(jogtrackerApi.isTokenValid);
    if (!isLogin) {
      yield removeAccessTokenToStorage();
    }
    yield put(actionsCommon.setLoginFlag(isLogin));
  }
}

function* commonWatcher() {
  yield takeEvery(actionsTypes.ASYNC_GET_AUTHENTICATION_TOKEN, getAuthenticationTokenFromAPI);
  yield takeEvery(actionsTypes.ASYNC_CHECK_ON_TOKEN_VALID, checkOnTokenValid);
}

export default commonWatcher;
