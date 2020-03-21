import React from "react";
import "./App.css";
import NavigationContainer from "./navigation/NavigationContainer";
import styled from "styled-components";

function App() {
  return (
    <AppContainer className="App">
      <NavigationContainer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
`;
