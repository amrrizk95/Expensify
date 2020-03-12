import React,{ Component } from 'react';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill',amount:4500 }));
store.dispatch(addExpense({ description: 'Gas bill' }));
//store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

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
