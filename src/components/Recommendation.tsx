import { useDispatch } from "react-redux";
import styled from 'styled-components'
import { putRecommendationAccept, putRecommendationReject } from "../_redux/actions/recommendationsActions";
import { IRecommendation } from "../models/IRecommendation";

const Header = styled.h1`
  text-align: center;
  width: 100%;
`

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`
const AcceptButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid green;
  color: green;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const RejectButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid red;
  color: red;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const ReccomendationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
  background-color: smokegrey;
`

const ImageContainer = styled.div`
  width: 600px;
  height: 600px;
  height: auto;
  float: left;
  margin: 3px;
  padding: 3px;
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
`

const Reccomendation = ({ recommendation, onButtonClick }: {recommendation: IRecommendation, onButtonClick: () => void }) => {
  const dispatch = useDispatch();
  const {id, title, rating, imageURL} = recommendation
  const accept = () => {dispatch(putRecommendationAccept(id)); onButtonClick();}
  const reject = () => {dispatch(putRecommendationReject(id)); onButtonClick();}
  return (
    <ReccomendationContainer>
      <Header>
        {`${title} (${rating}/10)`}
      </Header>
      <ImageContainer>
        <Image src={imageURL} alt="movie poster"/>
      </ImageContainer>
      <FooterContainer>
        <AcceptButton onClick={accept}> accept </AcceptButton>
        <RejectButton onClick={reject}> reject </RejectButton>
      </FooterContainer>
    </ReccomendationContainer>
  )
}

export default Reccomendation