import React, { Component } from "react";
import Joi from "joi-browser";
import auth from "../common/services/authService";

export class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        jobRole: "",
        department: "",
        address: "",
        password: "",
        passwordConfirm: ""
      },
      errors: {}
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    const account = { ...this.state.account };
    account[name] = value;
    const errors = { ...this.state.errors };
    errors[name] = "";
    this.setState({ account, errors });
  };

  schema = {
    firstName: Joi.string()
      .min(3)
      .required()
      .label("First Name"),
    lastName: Joi.string()
      .min(3)
      .required()
      .label("Last Name"),
    gender: Joi.string()
      .required()
      .label("Gender"),
    jobRole: Joi.string()
      .required()
      .label("Job Role"),
    department: Joi.string()
      .required()
      .label("Department"),
    address: Joi.string()
      .required()
      .label("Address"),
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .min(6)
      .required()
      .label("Password"),
    passwordConfirm: Joi.string()
      .min(6)
      .required()
      .label("Password Confirmation")
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

  onSubmit = async e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    if (this.state.password !== this.state.passwordConfirm) return;

    const result = await auth.createUser({ ...this.state.account });

    if (result) {
      this.props.history.replace("/");
    }
  };

  render() {
    const state = this.state;
    return (
      <div className="p-3">
        <div>
          <div className="text-center mb-5">
            <h3 className="text-primary">Create a new employee account</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-7">
              <form
                onSubmit={this.onSubmit}
                method="POST"
                className="bg-white shadow p-5 rounded small"
                noValidate
              >
                <div className="form-row">
                  <div className="form-group col-md-6 px-md-4">
                    <label htmlFor="firstname">First Name</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstName"
                      onChange={this.onChange}
                      value={state.account.firstName}
                      className={
                        this.state.errors["firstName"]
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    <div className="invalid-feedback">
                      {this.state.errors["firstName"]}
                    </div>
                  </div>
                  <div className="form-group col-md-6 px-md-4">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastName"
                      onChange={this.onChange}
                      value={state.account.lastName}
                      className={
                        this.state.errors["lastName"]
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    <div className="invalid-feedback">
                      {this.state.errors["lastName"]}
                    </div>
                  </div>
                  <div className="form-group col-md-6 px-md-4">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={this.onChange}
                      value={state.account.email}
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

                  <div className="form-group col-md-6 px-md-4">
                    <label htmlFor="gender">Gender</label>
                    <input
                      type="text"
                      id="gender"
                      name="gender"
                      onChange={this.onChange}
                      value={state.account.gender}
                      className={
                        this.state.errors["gender"]
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    <div className="invalid-feedback">
                      {this.state.errors["gender"]}
                    </div>
                  </div>

                  <div className="form-group col-md-6 px-md-4">
                    <label htmlFor="jobRole">Job Role</label>
                    <input
                      type="text"
                      id="jobRole"
                      name="jobRole"
                      onChange={this.onChange}
                      value={state.account.jobRole}
                      className={
                        this.state.errors["jobRole"]
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    <div className="invalid-feedback">
                      {this.state.errors["jobRole"]}
                    </div>
                  </div>

                  <div className="form-group col-md-6 px-md-4">
                    <label htmlFor="department">Department</label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      onChange={this.onChange}
                      value={state.account.department}
                      className={
                        this.state.errors["department"]
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    <div className="invalid-feedback">
                      {this.state.errors["department"]}
                    </div>
                  </div>

                  <div className="form-group col-md-6 px-md-4">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      onChange={this.onChange}
                      value={state.account.address}
                      className={
                        this.state.errors["address"]
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    <div className="invalid-feedback">
                      {this.state.errors["address"]}
                    </div>
                  </div>

                  <div className="form-group col-md-6 px-md-4">
                    <label htmlFor="lastname">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={this.onChange}
                      value={state.account.password}
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
                  <div className="form-group col-md-6 px-md-4">
                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <input
                      type="password"
                      id="passwordConfirm"
                      name="passwordConfirm"
                      onChange={this.onChange}
                      value={state.account.passwordConfirm}
                      className={
                        this.state.errors["passwordConfirm"]
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    <div className="invalid-feedback">
                      {this.state.errors["passwordConfirm"]}
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center py-5">
                  <div className="col-md-3">
                    <button type="submit" className="btn btn-primary btn-block">
                      Create Account
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

export default CreateUser;
