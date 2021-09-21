import { all, call, put, takeLatest, takeEvery } from "redux-saga/effects";
import {
  fetchRecommendationsSuccess,
  fetchRecommendationsFailuer,
  putRecommendationAcceptSuccess,
  putRecommendationAcceptFailure,
  putRecommendationRejectSuccess,
  putRecommendationRejectFailure,
} from "../../actions/recommendationsActions";
import { recommendationTypes } from "../../Actiontypes/recommendationsTypes";
import {
  getRecommendations,
  acceptRecommendation,
  rejectRecommendation,
} from "./../../../api/recommendatiosApi";

export function* fetchReccomendationsSaga(): any {
  try {
    const data = yield call(getRecommendations);
    yield put(fetchRecommendationsSuccess({ recommendations: data }));
  } catch (e: any) {
    yield put(fetchRecommendationsFailuer({ error: e.message }));
  }
}

export function* putRecommendationAcceptSaga(action: any): any {
  try {
    yield call(acceptRecommendation, action.id);
    yield put(putRecommendationAcceptSuccess());
  } catch (e: any) {
    yield put(putRecommendationAcceptFailure({ error: e.message }));
  }
}

export function* putRecommendationRejectSaga(action: any): any {
  try {
    yield call(rejectRecommendation, action.id);
    yield put(putRecommendationRejectSuccess());
  } catch (e: any) {
    yield put(putRecommendationRejectFailure({ error: e.message }));
  }
}

function* recommendationsSaga(): any {
  yield all([
    takeLatest(
      recommendationTypes.FETCH_RECOMMENDATION_REQUEST,
      fetchReccomendationsSaga
    ),
    takeEvery(
      recommendationTypes.PUT_RECOMMENDATION_ACCEPT_REQUEST,
      putRecommendationAcceptSaga
    ),
    takeEvery(
      recommendationTypes.PUT_RECOMMENDATION_REJECT_REQUEST,
      putRecommendationRejectSaga
    ),
  ]);
}

export default recommendationsSaga;
