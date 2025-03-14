import React from "react"
import { Link } from "react-router-dom"
import { Alert } from "reactstrap"

export class NewUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      role: "customer",
      showError: false,
      errorText: "",
    }
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value })
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  handleRoleChange = (e) => {
    this.setState({ role: e.target.value })
  }

  render() {
    const { showError, errorText, showSuccess, successText } = this.state

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-header">
                <h4>Register</h4>
              </div>
              <div className="card-body">
                {showError && (
                  <Alert
                    variant="danger"
                    onClose={() => this.setState({ showError: false })}
                  >
                    {errorText}
                  </Alert>
                )}
                {showSuccess && (
                  <Alert
                    variant="success"
                    onClose={() => this.setState({ showSuccess: false })}
                  >
                    {successText}
                  </Alert>
                )}
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your username"
                      value={this.state.username}
                      onChange={this.handleUsernameChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select
                      className="form-control"
                      id="role"
                      value={this.state.role}
                      onChange={this.handleRoleChange}
                    >
                      <option value="customer">Customer</option>
                      <option value="staff">Staff</option>
                      <option value="barista">Barista</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                    <Link to="/login" className="btn btn-secondary ml-2">
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
