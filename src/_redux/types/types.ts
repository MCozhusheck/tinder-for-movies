import { IRecommendation } from "../../models/IRecommendation";
import { recommendationTypes } from "../Actiontypes/recommendationsTypes";

export interface RecommendationState {
  pending: boolean;
  recommendations: IRecommendation[];
  error: string | null;
  putError: string | null;
}

export interface FetchRecommendationsSuccessPayload {
  recommendations: IRecommendation[];
}

export interface FetchRecommendationsFailuerPayload {
  error: string;
}

export interface PutRecommendationsFailuerPayload {
  error: string;
}

export interface FetchRecommendationsRequest {
  type: typeof recommendationTypes.FETCH_RECOMMENDATION_REQUEST;
}

export type FetchRecommendationsSuccess = {
  type: typeof recommendationTypes.FETCH_RECOMMENDATION_SUCCESS;
  payload: FetchRecommendationsSuccessPayload;
};

export type FetchRecommendationsFailuer = {
  type: typeof recommendationTypes.FETCH_RECOMMENDATION_FAILUER;
  payload: FetchRecommendationsFailuerPayload;
};

export interface PutRecommendationAcceptRequest {
  id: string;
  type: typeof recommendationTypes.PUT_RECOMMENDATION_ACCEPT_REQUEST;
}

export interface PutRecommendationAcceptSuccess {
  type: typeof recommendationTypes.PUT_RECOMMENDATION_ACCEPT_SUCCESS;
}

export interface PutRecommendationAcceptFailure {
  type: typeof recommendationTypes.PUT_RECOMMENDATION_ACCEPT_FAILUER;
  payload: PutRecommendationsFailuerPayload;
}

export interface PutRecommendationRejectRequest {
  id: string;
  type: typeof recommendationTypes.PUT_RECOMMENDATION_REJECT_REQUEST;
}

export interface PutRecommendationRejectSuccess {
  type: typeof recommendationTypes.PUT_RECOMMENDATION_REJECT_SUCCESS;
}

export interface PutRecommendationRejectFailure {
  type: typeof recommendationTypes.PUT_RECOMMENDATION_REJECT_FAILUER;
  payload: PutRecommendationsFailuerPayload;
}

export type RecommendationsActions =
  | FetchRecommendationsRequest
  | FetchRecommendationsSuccess
  | FetchRecommendationsFailuer
  | PutRecommendationAcceptRequest
  | PutRecommendationAcceptSuccess
  | PutRecommendationAcceptFailure
  | PutRecommendationRejectRequest
  | PutRecommendationRejectSuccess
  | PutRecommendationRejectFailure;
