import * as Effects from "redux-saga/effects";
import {
  getRecommendations,
  acceptRecommendation,
  rejectRecommendation,
} from "./../../../api/recommendatiosApi";
import {
  fetchReccomendationsSaga,
  putRecommendationAcceptSaga,
  putRecommendationRejectSaga,
} from "./recommendationsSaga";
import { recommendationTypes } from "../../Actiontypes/recommendationsTypes";

const call: any = Effects.call;
const put: any = Effects.put;

describe("Recommendations fetching flow", () => {
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

describe("Accepting recommendation", () => {
  it("Successfully accepts recommendations", () => {
    const generator = putRecommendationAcceptSaga({ id: "1and3011" });
    expect(generator.next().value).toEqual(
      call(
        {
          context: null,
          fn: acceptRecommendation,
        },
        "1and3011"
      )
    );
    expect(generator.next().value).toEqual(
      put({
        type: recommendationTypes.PUT_RECOMMENDATION_ACCEPT_SUCCESS,
      })
    );
  });

  it("Handling error accepting recommendation", () => {
    const generator = putRecommendationAcceptSaga({ id: "1and3011" });
    expect(generator.next().value).toEqual(
      call({ context: null, fn: acceptRecommendation }, "1and3011")
    );
    expect(generator.throw("error").value).toEqual(
      put({
        type: recommendationTypes.PUT_RECOMMENDATION_ACCEPT_FAILUER,
        payload: { recommendations: undefined },
      })
    );
  });
});

describe("Rejecting recommendation", () => {
  it("Successfully rejects recommendations", () => {
    const generator = putRecommendationRejectSaga({ id: "1and3011" });
    expect(generator.next().value).toEqual(
      call(
        {
          context: null,
          fn: rejectRecommendation,
        },
        "1and3011"
      )
    );
    expect(generator.next().value).toEqual(
      put({
        type: recommendationTypes.PUT_RECOMMENDATION_REJECT_SUCCESS,
      })
    );
  });

  it("Handling error rejecting recommendation", () => {
    const generator = putRecommendationRejectSaga({ id: "1and3011" });
    expect(generator.next().value).toEqual(
      call({ context: null, fn: rejectRecommendation }, "1and3011")
    );
    expect(generator.throw("error").value).toEqual(
      put({
        type: recommendationTypes.PUT_RECOMMENDATION_REJECT_FAILUER,
        payload: { recommendations: undefined },
      })
    );
  });
});
