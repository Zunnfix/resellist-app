import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Lander from './components/Lander'
import Product from './components/Product'
import Profile from './components/Profile'

export default (
    <Switch>
      <Route exact path='/' component={Lander} />
      <Route path='/item' component={Product} />
      <Route path='/profile' component={Profile} />
    </Switch>
  )