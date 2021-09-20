import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IRecommendation } from "../../../models/IRecommendation";
import {
  fetchRecommendationsSuccess,
  fetchRecommendationsFailuer,
  putRecommendationAccept,
  putRecommendationReject,
} from "../../actions/recommendationsActions";
import { recommendationTypes } from "../../Actiontypes/recommendationsTypes";

const getRecommendations: any = () =>
  axios.get<IRecommendation[]>("http://localhost:3000/recommendations");

const acceptRecommendation: any = (id: string) =>
  axios.put(`http://localhost:3000/recommendations/${id}/accept`);

const rejectRecommendation: any = (id: string) =>
  axios.put(`http://localhost:3000/recommendations/${id}/reject`);

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
  } catch (e: any) {
    yield put(fetchRecommendationsFailuer({ error: e.message }));
  }
}

function* putRecommendationRejectSaga(action: any): any {
  try {
    yield rejectRecommendation(action.id);
  } catch (e: any) {
    yield put(fetchRecommendationsFailuer({ error: e.message }));
  }
}

function* recommendationsSaga(): any {
  yield all([
    takeLatest(
      recommendationTypes.FETCH_RECOMMENDATION_REQUEST,
      fetchReccomendationsSaga
    ),
    // takeLatest(
    //   recommendationTypes.PUT_RECOMMENDATION_ACCEPT,
    //   putRecommendationAcceptSaga
    // ),
    // takeLatest(
    //   recommendationTypes.PUT_RECOMMENDATION_REJECT,
    //   putRecommendationRejectSaga
    // ),
  ]);
}

export default recommendationsSaga;
