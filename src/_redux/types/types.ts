import { IRecommendation } from "../../models/IRecommendation";
import { recommendationTypes } from "../Actiontypes/recommendationsTypes";

export interface RecommendationState {
  pending: boolean;
  recommendations: IRecommendation[];
  error: string | null;
}

export interface FetchRecommendationsSuccessPayload {
  recommendations: IRecommendation[];
}

export interface FetchRecommendationsFailuerPayload {
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

export interface PutRecommendationAccept {
  id: string;
  type: typeof recommendationTypes.PUT_RECOMMENDATION_ACCEPT;
}

export interface PutRecommendationReject {
  id: string;
  type: typeof recommendationTypes.PUT_RECOMMENDATION_REJECT;
}

export type RecommendationsActions =
  | FetchRecommendationsRequest
  | FetchRecommendationsSuccess
  | FetchRecommendationsFailuer
  | PutRecommendationAccept
  | PutRecommendationReject;
