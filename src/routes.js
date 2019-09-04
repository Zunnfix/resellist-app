import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Lander from './components/Lander'
import ProductPage from './components/ProductPage'
import Profile from './components/Profile'

export default (
    <Switch>
      <Route exact path='/' component={Lander} />
      <Route path='/item' component={ProductPage} />
      <Route path='/profile' component={Profile} />
    </Switch>
  )