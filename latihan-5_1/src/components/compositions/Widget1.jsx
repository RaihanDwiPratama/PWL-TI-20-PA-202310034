import React, { Component } from "react";
import Layout from "./Layout";

export default class Widget1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "My Apps",
    };
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    return (
      <Layout title={this.state.title}>
        <form
          method="post"
          autoComplete="off"
          className="form w-100 p-5 rounded"
        >
          <div className="text-center mb-10 ">
            <h1 className="text-dark mb-3">Widget One</h1>
            <div className="text-secondary fw-bold fs-5">
              Please fill up this form with correctly
            </div>
          </div>

          <div className="fv-row mb-10 mt-4 fv-plugins-icon-container">
            <label className="form-label fs-6 fw-bolder text-dark">
              Type the title of this web
            </label>
            <input
              type="text"
              name="title"
              className="form-control form-control-lg form-control-solid"
              defaultValue={this.state.title}
              onChange={this.handleChangeText}
            />
          </div>

          <div className="text-center mt-3">
            <button
              type="button"
              className="btn btn-lg btn-primary w-100 mb-5"
            >
              Submit
            </button>
          </div>
        </form>
      </Layout>
    );
  }
}
