import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer.js";
import AppView from "./appview.jsx";

var store = createStore(reducer);

store.dispatch({
    type: "SET_STATE",
    state: {
        phones: ["iPhone 7 Plus", "Samsung Galaxy A5"]
    }
});


render(
    <Provider store={store}>
        <AppView />
    </Provider>,
    document.getElementById("container")
);