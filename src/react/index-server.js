// import React from "react";
// import ReactDOM from "react-dom";
// import logo from "../assets/images/yy.jpeg";
// import "./index.scss";
// import "../js/common.js";

const React =  require("react");
const logo = require('../assets/images/yy.jpeg').default
console.log(require('./index.scss'));


class ReactTest extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      Text: null
    };
  }
  loadComponent() {
    import("./text.js").then(Text => this.setState({ Text: Text.default }));
  }
  render() {
    const { Text } = this.state;
    return (
      <div>
        {Text ? <Text /> : null}
        ReactTest text hello whaot hhl
        <img
          onClick={this.loadComponent.bind(this)}
          className="img"
          src={logo}
        />
        <span>hello</span>
      </div>
    );
  }
}

module.exports = <ReactTest/>;
