import Loader from "react-loader-spinner";
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 100vw;
  height: 100vh;
`

const Loading = () => {

  return (
    <Container>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      <p>Loading recommendations...</p>
    </Container>
  );
};

export default Loading;