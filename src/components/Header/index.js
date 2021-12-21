import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {Component} from 'react'

import './index.css'

class Header extends Component {
  state = {showOptions: false}

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  onClickOptionsHide = () => {
    this.setState({showOptions: false})
  }

  onClickOptionsButton = () => {
    this.setState({showOptions: true})
  }

  renderDisplayOptions = () => (
    <div className="nav-menu-options">
      <ul className="nav-menu">
        <li className="nav-option">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-option">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="nav-option">
          <button
            type="button"
            className="logout-button"
            onClick={this.onClickLogout}
          >
            Logout
          </button>
        </li>
      </ul>
      <button
        type="button"
        className="wrong-button"
        onClick={this.onClickOptionsHide}
      >
        x
      </button>
    </div>
  )

  render() {
    const {showOptions} = this.state
    return (
      <nav className="navbar">
        <div className="navbar-content">
          <Link to="/">
            <div className="navbar-header">
              <img
                src="https://res.cloudinary.com/anitha/image/upload/v1638862270/websitelogo_uxorv5.png"
                alt="website logo"
                className="website-logo"
              />
              <h1 className="nav-heading">Tasty Kitchens</h1>
            </div>
          </Link>

          <button
            type="button"
            className="options-button"
            onClick={this.onClickOptionsButton}
          >
            <img
              src="https://res.cloudinary.com/anitha/image/upload/v1638867649/Icon_sexlul.png"
              alt="bars"
            />
          </button>
        </div>
        {showOptions && this.renderDisplayOptions()}
      </nav>
    )
  }
}
export default withRouter(Header)
