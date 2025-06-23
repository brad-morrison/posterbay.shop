import HomePage from "./pages/HomePage";
import styled from "styled-components";

export default function App() {

  return (
    <Wrapper>
      <HomePage />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;