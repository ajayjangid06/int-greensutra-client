import { all } from 'redux-saga/effects';
import userSagas from './userSagas';
import blogSagas from './blogSagas';

// Combine all sagas into one root saga
export default function* rootSaga() {
  yield all([
    userSagas(),
    blogSagas(),
    // Add more sagas here if needed
  ]);
}
