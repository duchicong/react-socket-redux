import { all, call, put, takeEvery } from 'redux-saga/effects';
import { usersAction } from '.';
import data from './data.json';

const getUserData: any = new Promise((resolve) => {
  return setTimeout(() => {
    resolve(data);
  }, 300);
});

function* fetchUser (): any {
  try {
    const res: any = yield call(getUserData);

    console.log('res ', res);
    if (res) {
      yield put(usersAction.getUsersDone(res.data));
    }
  } catch (err) {
    usersAction.getUsersError({
      errorCode: '400',
      message: 'Can not get users data!',
      error: JSON.stringify(err)
    })
  }
  
}

export default function* userSaga() {
  yield takeEvery(usersAction.getUsers.type, fetchUser);
}
