import { all, fork } from "redux-saga/effects";
import recommendationsSaga from "./recommendationsSaga/recommendationsSaga";

export function* rootSaga() {
  yield all([fork(recommendationsSaga)]);
}
