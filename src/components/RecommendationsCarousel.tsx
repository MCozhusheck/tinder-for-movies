import { useState } from "react";
import Recommendation from './Recommendation';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IRecommendation } from '../models/IRecommendation';

const RecommendationsCarousel = ({ recommendations} : {recommendations: IRecommendation[]}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Carousel autoPlay={false} showIndicators={false} showThumbs={false} showStatus={false} showArrows={false} selectedItem={currentSlide}>
      {recommendations.map((recommendation => <Recommendation recommendation={recommendation} onButtonClick={() => setCurrentSlide(currentSlide + 1)}/>))}
    </Carousel>
  );
};

export default RecommendationsCarousel;