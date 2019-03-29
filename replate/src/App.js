import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Replate from './components/Replate';
import Public from './components/Public';
import PrivateRoute from './components/Authentication';
import Register from './components/RegisterMain';

function App() {
    return (
      <Router>
        <div className='App'>
        <div>
          <ul>
              <Link to ='/public'>Public</Link>
            <br/>
              <Link to ='/'>Login</Link>
            <br/>
              <Link to ='/register'>Register</Link>
          </ul>
        </div>
          <Route path='/public' component={Public} />
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <PrivateRoute exact path='/replate' component={Replate} />

        </div>
      </Router>
    );
}

export default App;
