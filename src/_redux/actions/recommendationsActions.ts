import { recommendationTypes } from "../Actiontypes/recommendationsTypes";
import {
  FetchRecommendationsRequest,
  FetchRecommendationsSuccess,
  FetchRecommendationsSuccessPayload,
  FetchRecommendationsFailuer,
  FetchRecommendationsFailuerPayload,
} from "../types/types";

export const fetchRecommendationsRequest = (): FetchRecommendationsRequest => ({
  type: recommendationTypes.FETCH_RECOMMENDATION_REQUEST,
});

export const fetchRecommendationsSuccess = (
  payload: FetchRecommendationsSuccessPayload
): FetchRecommendationsSuccess => ({
  type: recommendationTypes.FETCH_RECOMMENDATION_SUCCESS,
  payload,
});

export const fetchRecommendationsFailuer = (
  payload: FetchRecommendationsFailuerPayload
): FetchRecommendationsFailuer => ({
  type: recommendationTypes.FETCH_RECOMMENDATION_FAILUER,
  payload,
});
