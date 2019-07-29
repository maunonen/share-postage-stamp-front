import React from 'react';
import './App.css';
import AppRouter from './routers/AppRouter'
import { Provider} from 'react-redux'
import configureStore from './store/configureStore'
import { addStamp} from './actions/stamp'

const store = configureStore()
store.dispatch(addStamp())

const App = () => (
  <div className="App">
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  </div>
)

export default App

