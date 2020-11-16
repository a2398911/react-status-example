import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import Component from './Component'

const store = createStore(reducer)

export default function index() {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  )
}
