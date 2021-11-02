import { StatusBar } from "expo-status-bar";
import React from "react";

import { NativeBaseProvider } from "native-base";
import { ThemeProvider } from "styled-components/native";
import promise from "redux-promise-middleware";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import axios from "axios";
import { multiClientMiddleware } from "redux-axios-middleware";
import reducers from "./business/reducers";
import Navigator from "./navigation/navigator";

const client = {
  ["default"]: {
    client: axios.create({
      baseURL: "https://rickandmortyapi.com/api",
      responseType: "json",
    }),
  },
};

const store = createStore(
  reducers,
  {},
  applyMiddleware(promise, thunk, multiClientMiddleware(client))
);

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <StatusBar hidden={true} />
        <Navigator />
      </Provider>
    </NativeBaseProvider>
  );
}
