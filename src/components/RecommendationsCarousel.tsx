import { useState, useRef } from "react";
import Recommendation from './Recommendation';
import { IRecommendation } from '../models/IRecommendation';
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { putRecommendationAcceptRequest, putRecommendationRejectRequest } from "../_redux/actions/recommendationsActions";

type Props = {
  recommendations: IRecommendation[]
}

const RecommendationsCarousel: React.FC<Props> = ({ recommendations }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slider = useRef<Slider>(null);
  const dispatch = useDispatch();

  const nextSlide = () => {
    if (slider.current !== null) {
      slider.current.slickNext()
    }
  }
  const onSwipe = (direction: string) => {
    if(direction === "left") dispatch(putRecommendationRejectRequest(recommendations[currentSlide].id));
  }
  
  const accept = (id: string) => {
    dispatch(putRecommendationAcceptRequest(id));
    nextSlide();
  }
  const reject = (id: string) => {
    dispatch(putRecommendationRejectRequest(id));
    nextSlide();
  }

  const settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: false,
    onSwipe: onSwipe,
    afterChange: (current: number) => setCurrentSlide(current)
  }

  return (
    <div data-testid="recommendations">
      <Slider ref={slider} {...settings}>
        {recommendations.map((recommendation => <Recommendation recommendation={recommendation} onAcceptButtonClick={accept} onRejectButtonClick={reject} key={recommendation.id}/>))}
      </Slider>
    </div>
  );
};

export default RecommendationsCarousel;