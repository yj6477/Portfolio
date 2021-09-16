import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <Router>
      <Route exact path="/portfolio">
        <Home/>
      </Route>
      
    </Router>
  );
}

export default App;
