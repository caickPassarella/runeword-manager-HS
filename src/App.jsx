import "./App.css";
import { useState } from "react";
import { RuneList } from "./components/RuneList/RuneList";
import { RunewordDisplay } from "./components/RunewordDisplay/RunewordDisplay";
import styled from "styled-components";

const RuneListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px;
  justify-content: flex-start;
`;

function App() {
  const [availableRunewords, setAvailableRunewords] = useState({});

  return (
    <Container>
      <RuneListContainer>
        <RuneList setAvailableRunewords={setAvailableRunewords} />
      </RuneListContainer>
      <RunewordDisplay availableRunewords={availableRunewords} />
    </Container>
  );
}

export default App;
