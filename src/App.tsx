import React from 'react';
import Navbar from './components/Navbar/Navbar';
import TodoPage from './Pages/TodoPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AboutPage from './Pages/AboutPage';

const App: React.FC = () => {
  return (
    <Router>

    <div className="App">
      <Navbar />
        <div className="container">
          <Switch>
            <Route component={AboutPage} path='/About' />
            <Route component={TodoPage} path='/' />           
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
