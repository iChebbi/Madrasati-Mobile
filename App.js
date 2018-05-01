import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RootStack from './app/router/router'

import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import reducer from './app/reducers'

import { baseURL } from './app/utils/env'

const client = axios.create({
  baseURL: baseURL + '/api',
  responseType: 'json'
})

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)))
console.disableYellowBox = true
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}
