import React from "react";
import ReactDOM from "react-dom";
import logo from "../assets/images/yy.jpeg";
import "../css/index.css";

class ReactTest extends React.Component {
  render() {
    return (
      <div>
        ReactTest text hello whaot hhl
        <img className='img' src={logo} />
        <span>hello</span>
      </div>
    );
  }
}

ReactDOM.render(<ReactTest />, document.getElementById("root"));
