import React from "react";
import "./App.css";
import NavigationContainer from "./navigation/NavigationContainer";
import styled from "styled-components";
import { Provider } from "react-redux";
import configureStore from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer className="App">
          <NavigationContainer />
        </AppContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
