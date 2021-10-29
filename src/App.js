
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/'>
          <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
