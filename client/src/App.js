import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import Intro from "./components/Intro";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/neumorphism.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Intro />
            </div>
            <div className="col-md-6">
              <PostForm />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <Posts />
        </div>
      </div>
    );
  }
}

export default App;
