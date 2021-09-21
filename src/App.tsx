import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendationsRequest } from "./_redux/actions/recommendationsActions";
import { RootState } from "./_redux/reducers/rootReducer";
import Global from './styles/global';
import RecommendationsCarousel from './components/RecommendationsCarousel';
import Loading from "./components/Loading";
import Error from "./components/Error";

const App = () => {
  const dispatch = useDispatch();
  const { pending, recommendations, error } = useSelector(
    (state: RootState) => state.recommendations
  );

  useEffect(() => {
    dispatch(fetchRecommendationsRequest());
  }, []);

  return (
    <>
      <Global/>
      {pending ? (
        <Loading/>
      ) : error ? (
        <Error errorMessage={error}/>
      ) : (
        <RecommendationsCarousel recommendations={recommendations} />
      )}
    </>
  );
};

export default App;
