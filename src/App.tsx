import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendationsRequest } from "./_redux/actions/recommendationsActions";
import { RootState } from "./_redux/reducers/rootReducer";

const App = () => {
  const dispatch = useDispatch();
  const { pending, recommendations, error } = useSelector(
    (state: RootState) => state.recommendations
  );

  useEffect(() => {
    dispatch(fetchRecommendationsRequest());
  }, []);

  return (
    <div>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        recommendations?.map((recommendation, index) => (
          <div key={recommendation.id}>
            {++index}. {recommendation.title}
          </div>
        ))
      )}
    </div>
  );
};

export default App;
