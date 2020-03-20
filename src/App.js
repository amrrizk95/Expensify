import React,{ Component } from 'react';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const store = configureStore();


class App extends Component {


  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <AppRouter/>
        </Provider>

  
      </div>
    )
  }
}

export default App


// ReactDOM.render(<AppRouter />, document.getElementById('app'));
