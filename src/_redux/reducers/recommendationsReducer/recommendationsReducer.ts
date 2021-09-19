import { recommendationTypes } from "../../Actiontypes/recommendationsTypes";
import { RecommendationsActions, RecommendationState } from "../../types/types";

const initialState: RecommendationState = {
  pending: false,
  recommendations: [],
  error: null,
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
    default:
      return {
        ...state,
      };
  }
};
