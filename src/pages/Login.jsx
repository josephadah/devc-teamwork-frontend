import React, { Component } from "react";
import Joi from "joi-browser";
import { connect } from "react-redux";
import auth from "../common/services/authService";
import {
  hideNavbar,
  hideFooter,
  showNavbar,
  showFooter
} from "./../state/actions/layout";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        email: "",
        password: ""
      },
      errors: {}
    };
  }

  componentDidMount() {
    this.props.hideNavbar();
    this.props.hideFooter();
  }

  componentWillUnmount() {
    this.props.showNavbar();
    this.props.showFooter();
  }

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .min(6)
      .required()
      .label("Password")
  };

  validate() {
    const { error } = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  }

  onChange = e => {
    const { name, value } = e.target;
    const account = { ...this.state.account };
    account[name] = value;
    const errors = { ...this.state.errors };
    errors[name] = "";
    this.setState({ account, errors });
  };

  onSubmit = async e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    const result = await auth.login({ ...this.state.account });
    if (result) {
      const { state } = this.props.location;
      const redirectPath = state ? state.from.pathname : "/";
      window.location = redirectPath;
    }
  };

  render() {
    return (
      <div className="p-3">
        <div>
          <div className="text-center mb-5">
            <h3 className="text-primary">Welcome back!</h3>
            <small>Please sign in</small>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <form
                onSubmit={this.onSubmit}
                method="POST"
                className="bg-white shadow p-5 rounded font-weight-bold small"
                noValidate
              >
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={this.state.account.email}
                      onChange={this.onChange}
                      className={
                        this.state.errors["email"]
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    <div className="invalid-feedback">
                      {this.state.errors["email"]}
                    </div>
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="lastname">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={this.state.account.password}
                      onChange={this.onChange}
                      className={
                        this.state.errors["password"]
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    <div className="invalid-feedback">
                      {this.state.errors["password"]}
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center py-3">
                  <div className="col-md-6">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign in
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  hideNavbar,
  hideFooter,
  showFooter,
  showNavbar
})(Login);
