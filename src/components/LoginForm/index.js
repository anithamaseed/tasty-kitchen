import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showErrorMsg: false}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <div className="input-container">
        <label className="login-input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          className="login-input"
          type="text"
          id="username"
          onChange={this.onChangeUsername}
          value={username}
        />
      </div>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <div className="input-container">
        <label className="login-input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="login-input"
          type="password"
          id="password"
          onChange={this.onChangePassword}
          value={password}
        />
      </div>
    )
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const {history} = this.props
      console.log(data)
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
    } else {
      this.setState({showErrorMsg: true})
    }
  }

  render() {
    const {showErrorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/l" />
    }
    return (
      <>
        <div className="login-container">
          <h1 className="login-heading">Login</h1>
          <img
            alt="login"
            className="login-image"
            src="https://res.cloudinary.com/anitha/image/upload/v1638515643/Rectangle_1457_xl7gdq.jpg"
          />
        </div>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          {this.renderUsername()}
          {this.renderPassword()}
          {showErrorMsg && (
            <p className="error-msg">
              Please enter a valid Username and Password
            </p>
          )}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </>
    )
  }
}
export default LoginForm
