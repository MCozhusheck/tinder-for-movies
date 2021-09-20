import { recommendationTypes } from "../Actiontypes/recommendationsTypes";
import {
  FetchRecommendationsRequest,
  FetchRecommendationsSuccess,
  FetchRecommendationsSuccessPayload,
  FetchRecommendationsFailuer,
  FetchRecommendationsFailuerPayload,
  PutRecommendationAccept,
  PutRecommendationReject,
} from "../types/types";

export const fetchRecommendationsRequest = (): FetchRecommendationsRequest => ({
  type: recommendationTypes.FETCH_RECOMMENDATION_REQUEST,
});

export const putRecommendationReject = (
  id: string
): PutRecommendationReject => ({
  type: recommendationTypes.PUT_RECOMMENDATION_REJECT,
  id,
});

export const putRecommendationAccept = (
  id: string
): PutRecommendationAccept => ({
  type: recommendationTypes.PUT_RECOMMENDATION_ACCEPT,
  id,
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
