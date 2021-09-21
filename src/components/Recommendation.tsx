import styled from 'styled-components'
import { IRecommendation } from "../models/IRecommendation";

const ReccomendationContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 10%;
  padding-right: 10%;
  background-color: #F5F5F5;
`

const Header = styled.h1`
  text-align: center;
  width: 100%;
  height: 30px;

  @media only screen and (max-width: 450px) {
    font-size: 24px;
  }
`

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  width: 100%;

  @media only screen and (max-width: 450px) {
    gap: 30px;
  }
`
const AcceptButton = styled.button`
  width: 150px;
  height: 50px;
  background: green;
  border-radius: 3px;
  border: 2px solid green;
  color: white;
  font-size: 16px;
  margin: 0 1em;
  padding: 0.25em 1em;

  @media only screen and (max-width: 450px) {
    width: 100px;
    height: 50px;
  }
`

const RejectButton = styled.button`
  width: 150px;
  height: 50px;
  background: red;
  border-radius: 3px;
  border: 2px solid red;
  color: white;
  font-size: 16px;
  margin: 0 1em;
  padding: 0.25em 1em;

  @media only screen and (max-width: 450px) {
    width: 100px;
    height: 50px;
  }
`

const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
  height: auto;
  float: left;
  margin: 3px;
  padding: 3px;
  display: flex;

  @media only screen and (max-width: 450px) {
    width: 300px;
    height: 500px;
  }
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`

type Props = {
  recommendation: IRecommendation,
  onAcceptButtonClick: (id: string) => void,
  onRejectButtonClick: (id: string) => void
}

const Reccomendation: React.FC<Props> = ({ recommendation, onAcceptButtonClick, onRejectButtonClick }) => {
  const {id, title, rating, imageURL} = recommendation
  return (
    <ReccomendationContainer>
      <Header>
        {`${title} (${rating}/10)`}
      </Header>
      <ImageContainer>
        <Image src={imageURL} alt="movie poster"/>
      </ImageContainer>
      <FooterContainer>
        <AcceptButton onClick={() => onAcceptButtonClick(id)}> accept </AcceptButton>
        <RejectButton onClick={() => onRejectButtonClick(id)}> reject </RejectButton>
      </FooterContainer>
    </ReccomendationContainer>
  )
}

export default Reccomendation