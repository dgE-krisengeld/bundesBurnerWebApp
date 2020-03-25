import React from "react";
import "./App.css";
import NavigationContainer from "./customer/navigation/NavigationContainer";
import styled from "styled-components";
import { Provider } from "react-redux";
import configureStore from "./customer/redux/store/store";
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
  display: flex;
  flex-direction: column;
`;
