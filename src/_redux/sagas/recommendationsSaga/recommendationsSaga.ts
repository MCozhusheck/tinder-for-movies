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

function* fetchReccomendationsSaga(): any {
  try {
    const response = yield call(getRecommendations);
    yield put(fetchRecommendationsSuccess({ recommendations: response.data }));
  } catch (e: any) {
    yield put(fetchRecommendationsFailuer({ error: e.message }));
  }
}

function* putRecommendationAcceptSaga(action: any): any {
  try {
    yield acceptRecommendation(action.id);
    yield put(putRecommendationAcceptSuccess());
  } catch (e: any) {
    yield put(putRecommendationAcceptFailure({ error: e.message }));
  }
}

function* putRecommendationRejectSaga(action: any): any {
  try {
    yield rejectRecommendation(action.id);
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
