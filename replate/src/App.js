import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Replate from './components/Replate';
import Public from './components/Public';
import PrivateRoute from './components/Authentication';

function App() {
    return (
      <Router>
        <div className='App'>
          <ul>
            <li>
              <Link to ='/public'>Public Page</Link>
            </li>
            <li>
              <Link to ='/protected'>Secure Page</Link>
            </li>
          </ul>
          <Route path='/public' component={Public} />
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/protected' component={Replate} />
        </div>
      </Router>
    );
}

export default App;
