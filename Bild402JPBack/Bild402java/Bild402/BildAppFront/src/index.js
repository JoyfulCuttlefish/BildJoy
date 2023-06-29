import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom";
import "./styles.css";
import ColoredRect from "./App.js";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


class FadeInAndOut extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { show: false };

    setInterval(() => {
      this.setState({ show: !this.state.show });
    }, 2000);
  }

  render() {
    return (
      <div>
        <a
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
          style={{ cursor: "pointer", padding: "20px" }}
        >
          Woah
        </a>
        
          <div>Hello World</div>
      </div>
    );
  }
}

ReactDOM.render(<ColoredRect />, document.getElementById("root"));