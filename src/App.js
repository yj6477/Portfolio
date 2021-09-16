import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/index';
import Project1Page from './pages/Project1Page';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/portfolio">
          <Home/>
        </Route>
        <Route exact path="/portfolio/project1">
          <Project1Page/>
        </Route>
      </Switch>  
    </Router>
  );
}

export default App;
