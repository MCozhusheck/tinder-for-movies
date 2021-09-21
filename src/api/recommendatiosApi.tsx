import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { recommendations } from "./../db/db.json";
import { IRecommendation } from "./../models/IRecommendation";

const mock = new MockAdapter(axios);
mock.onGet("/recommendations").reply(200, recommendations);
mock.onPut(/\/recommendations\/[A-Za-z0-9]*\/accept/).reply(200);
mock.onPut(/\/recommendations\/[A-Za-z0-9]*\/reject/).reply(200);

export const getRecommendations: any = async () => {
  const response = await axios.get<IRecommendation[]>("/recommendations");
  const data = await response.data;
  return data;
}

export const acceptRecommendation: any = async (id: string) => {
  const response = await axios.put(`/recommendations/${id}/accept`);
  return response;
}

export const rejectRecommendation: any = async (id: string) => {
  const response = await axios.put(`/recommendations/${id}/reject`);
  return response;
}