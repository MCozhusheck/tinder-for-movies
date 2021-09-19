import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IRecommendation } from "../../../models/IRecommendation";
import {
  fetchRecommendationsSuccess,
  fetchRecommendationsFailuer,
} from "../../actions/recommendationsActions";
import { recommendationTypes } from "../../Actiontypes/recommendationsTypes";

const getRecommendations: any = () =>
  axios.get<IRecommendation[]>("http://localhost:3000/recommendations");

function* fetchReccomendationsSaga(): any {
  try {
    const response = yield call(getRecommendations);
    yield put(fetchRecommendationsSuccess({ recommendations: response.data }));
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
  ]);
}

export default recommendationsSaga;
