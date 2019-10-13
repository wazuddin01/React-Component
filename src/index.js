import React from "react";
import ReactDom from "react-dom";
import faker from "faker";

const App = () => {
  return (
    <div className="container">
      <div className="card" style={{ width: "18em" }}>
        <div className="card-body">
          <div className="row">
            <h5>
              <img className="col-6" src={faker.image.avatar()} alt="avatar" />
            </h5>
            <h6 className="col-6">Timing</h6>
          </div>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
