import { combineReducers } from "redux";
import recommendationsReducer from "./recommendationsReducer/recommendationsReducer";

const rootReducer = combineReducers({
  recommendations: recommendationsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
