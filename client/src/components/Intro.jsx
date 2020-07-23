import React from "react";

const Intro = () => (
  <section className="section section bg-soft pb-5 overflow-hidden z-2">
    <div className="row justify-content-center text-center">
      <div className="col-lg-8 col-xl-8">
        <h1 className="display-2 mb-3 text-success">ParrotEcho!</h1>
        <p className="lead mb-5">
          Did you even wanted something to repeat everything you say? Maybe not,
          but its useful, for example to correct how you talk.
        </p>
        <div className="d-flex flex-column flex-wrap flex-md-row flex-sm-row justify-content-md-center justify-content-sm-center mb-5">
          <img
            src="https://img.icons8.com/color/96/000000/parrot.png"
            height="96"
            width="96"
            className="img img-fluid"
            alt="Parrot Logo"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
