import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showErrorMsg: false, errorMsg: ''}

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
      this.setState({showErrorMsg: true, errorMsg: data.error_msg})
      console.log(data.error_msg)
    }
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container-with-logo">
        <div className="login-container-form">
          <div className="login-website-logo">
            <img
              alt="website logo"
              src="https://res.cloudinary.com/anitha/image/upload/v1638862270/websitelogo_uxorv5.png"
              className="website-logo"
            />
            <h1 className="login-nav-heading">Tasty Kitchens</h1>
          </div>
          <div className="login-container">
            <h1 className="login-heading">Login</h1>
            <img
              alt="website login"
              className="login-image"
              src="https://res.cloudinary.com/anitha/image/upload/v1638515643/Rectangle_1457_xl7gdq.jpg"
            />
          </div>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            {this.renderUsername()}
            {this.renderPassword()}
            {showErrorMsg && <p className="error-msg">{errorMsg}</p>}
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
        <div className="login-image-container">
          <img
            src="https://res.cloudinary.com/anitha/image/upload/v1640501237/Rectangle_1456_kplgli.png"
            alt="website log"
            className="login-image-container"
          />
        </div>
      </div>
    )
  }
}
export default LoginForm
