import { recommendationTypes } from "../Actiontypes/recommendationsTypes";
import {
  FetchRecommendationsRequest,
  FetchRecommendationsSuccess,
  FetchRecommendationsSuccessPayload,
  FetchRecommendationsFailuer,
  FetchRecommendationsFailuerPayload,
  PutRecommendationAcceptRequest,
  PutRecommendationAcceptSuccess,
  PutRecommendationAcceptFailure,
  PutRecommendationRejectRequest,
  PutRecommendationRejectSuccess,
  PutRecommendationRejectFailure,
  PutRecommendationsFailuerPayload,
} from "../types/types";

export const fetchRecommendationsRequest = (): FetchRecommendationsRequest => ({
  type: recommendationTypes.FETCH_RECOMMENDATION_REQUEST,
});

export const putRecommendationAcceptRequest = (
  id: string
): PutRecommendationAcceptRequest => ({
  type: recommendationTypes.PUT_RECOMMENDATION_ACCEPT_REQUEST,
  id,
});

export const putRecommendationAcceptSuccess =
  (): PutRecommendationAcceptSuccess => ({
    type: recommendationTypes.PUT_RECOMMENDATION_ACCEPT_SUCCESS,
  });

export const putRecommendationAcceptFailure = (
  payload: PutRecommendationsFailuerPayload
): PutRecommendationAcceptFailure => ({
  type: recommendationTypes.PUT_RECOMMENDATION_ACCEPT_FAILUER,
  payload,
});

export const putRecommendationRejectRequest = (
  id: string
): PutRecommendationRejectRequest => ({
  type: recommendationTypes.PUT_RECOMMENDATION_REJECT_REQUEST,
  id,
});

export const putRecommendationRejectSuccess =
  (): PutRecommendationRejectSuccess => ({
    type: recommendationTypes.PUT_RECOMMENDATION_REJECT_SUCCESS,
  });

export const putRecommendationRejectFailure = (
  payload: PutRecommendationsFailuerPayload
): PutRecommendationRejectFailure => ({
  type: recommendationTypes.PUT_RECOMMENDATION_REJECT_FAILUER,
  payload,
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
