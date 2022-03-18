import Router  from './Router/Router';
import  {Provider}  from 'react-redux';
import './App.css';
import genereteStore from './redux/store';


function App() {

  const store = genereteStore();

  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
        <Router />
        </header>
        </Provider>
    </div>
  );
}

export default App;