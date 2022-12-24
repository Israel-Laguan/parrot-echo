import React from "react";
import Posts from "./components/Posts";
import Intro from "./components/Intro";
import "./assets/css/custom.scss";
import PostState from "./context/Post/State";

const App = () => {
    return (
      <PostState>
        <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Intro />
            </div>
            <div className="col-md-6">
            <Posts />
            </div>
          </div>
        </div>
        <hr />
      </div>
      </PostState>
    );
}

export default App;
