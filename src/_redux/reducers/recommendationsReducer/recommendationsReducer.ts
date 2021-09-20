import { recommendationTypes } from "../../Actiontypes/recommendationsTypes";
import { RecommendationsActions, RecommendationState } from "../../types/types";

const initialState: RecommendationState = {
  pending: true,
  recommendations: [],
  error: null,
  putError: null,
};

export default (state = initialState, action: RecommendationsActions) => {
  switch (action.type) {
    case recommendationTypes.FETCH_RECOMMENDATION_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case recommendationTypes.FETCH_RECOMMENDATION_SUCCESS:
      return {
        ...state,
        pending: false,
        recommendations: action.payload.recommendations,
        error: null,
      };
    case recommendationTypes.FETCH_RECOMMENDATION_FAILUER:
      return {
        ...state,
        pending: false,
        recommendations: [],
        error: action.payload.error,
      };
    case recommendationTypes.PUT_RECOMMENDATION_ACCEPT_REQUEST:
      return {
        ...state,
      };
    case recommendationTypes.PUT_RECOMMENDATION_ACCEPT_SUCCESS:
      return {
        ...state,
      };
    case recommendationTypes.PUT_RECOMMENDATION_ACCEPT_FAILUER:
      return {
        ...state,
        putError: action.payload.error,
      };
    case recommendationTypes.PUT_RECOMMENDATION_REJECT_REQUEST:
      return {
        ...state,
      };
    case recommendationTypes.PUT_RECOMMENDATION_REJECT_SUCCESS:
      return {
        ...state,
      };
    case recommendationTypes.PUT_RECOMMENDATION_REJECT_FAILUER:
      return {
        ...state,
        putError: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
