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
type Props = {
  errorMessage: string,
}

const Error: React.FC<Props> = ({ errorMessage }) => {

  return (
    <Container data-testid="error">
      <p>Failed to load recommendations. Error message: {errorMessage}</p>
    </Container>
  );
};

export default Error;