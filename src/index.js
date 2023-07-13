import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ContactManager from "./features/contact-manager/ContactManager";
import Counter from "./features/counter/Counter";
import AddForm from "./features/sum-form/SumForm";
import CounterWithRedux from "./features/counter-with-redux/CounterWithRedux";
import {Provider} from "react-redux";
import store from "./app/store";
import ContactManagerWithRedux from "./features/contact-manager-with-redux/ContactManagerWithRedux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <h1>Hello React</h1>
      <ContactManager />
      <Counter />
      <AddForm />
      <Provider store={store}>
          <CounterWithRedux/>
      </Provider>
      <Provider store={store}>
          <ContactManagerWithRedux/>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
