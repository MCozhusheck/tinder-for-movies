import { put, call } from "redux-saga/effects";
import {
  getRecommendations,
  acceptRecommendation,
  rejectRecommendation,
} from "./../../../api/recommendatiosApi";
import { fetchReccomendationsSaga } from "./recommendationsSaga";
import { recommendationTypes } from "../../Actiontypes/recommendationsTypes";

describe("recommendations fetching flow", () => {
  it("Fetches the recommendations successfully", () => {
    const generator = fetchReccomendationsSaga();
    expect(generator.next().value).toEqual(
      call({ context: null, fn: getRecommendations })
    );
    expect(generator.next().value).toEqual(
      put({
        type: recommendationTypes.FETCH_RECOMMENDATION_SUCCESS,
        payload: { recommendations: undefined },
      })
    );
  });

  it("Handling error fetching recommendations", () => {
    const generator = fetchReccomendationsSaga();
    expect(generator.next().value).toEqual(
      call({ context: null, fn: getRecommendations })
    );
    expect(generator.throw("error").value).toEqual(
      put({
        type: recommendationTypes.FETCH_RECOMMENDATION_FAILUER,
        payload: { recommendations: undefined },
      })
    );
  });
});
