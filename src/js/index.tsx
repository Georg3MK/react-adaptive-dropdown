import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from 'redux';
import { Provider } from 'react-redux'
import { AppContainer } from "react-hot-loader";
import App from "./components/App";
import reducer from './reducers'

const store = Redux.createStore(reducer);

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>,
    document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./components/App", () => {
        const NextApp = require("./components/App").default;
        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                  <NextApp />
                </Provider>
            </AppContainer>,
            document.getElementById('root')
        );
  });
}