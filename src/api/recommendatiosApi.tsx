import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { recommendations } from "./../db/db.json";
import { IRecommendation } from "./../models/IRecommendation";

const mock = new MockAdapter(axios);
mock.onGet("/recommendations").reply(200, recommendations);
mock.onPut(/\/recommendations\/[A-Za-z0-9]*\/accept/).reply(200);
mock.onPut(/\/recommendations\/[A-Za-z0-9]*\/reject/).reply(200);

export const getRecommendations: any = () =>
  axios.get<IRecommendation[]>("/recommendations");

export const acceptRecommendation: any = (id: string) =>
  axios.put(`/recommendations/${id}/accept`);

export const rejectRecommendation: any = (id: string) =>
  axios.put(`/recommendations/${id}/reject`);