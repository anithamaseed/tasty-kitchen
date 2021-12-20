import {Route, Switch} from 'react-router-dom'

import {Component} from 'react'

import CartContext from './context/CartContext'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import RestaurantFoods from './components/RestaurantFoods'
import Cart from './components/Cart'

import './App.css'

class App extends Component {
  state = {cartList: []}

  addCartItem = item => {
    this.setState(prevState => ({cartList: [...prevState.cartList, item]}))
  }

  render() {
    const {cartList} = this.state
    console.log(cartList)
    return (
      <CartContext.Provider value={{cartList, addCartItem: this.addCartItem}}>
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/restaurants-list/:id"
            component={RestaurantFoods}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
