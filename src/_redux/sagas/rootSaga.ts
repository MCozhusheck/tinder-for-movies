import { all, fork } from "redux-saga/effects";
import recommendationsSaga from "./recommendationsSaga/recommendationsSaga";

export function* rootSaga(): Generator {
  yield all([fork(recommendationsSaga)]);
}
