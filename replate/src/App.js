import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Replate from './components/Replate';
import Public from './components/Public';
import PrivateRoute from './components/Authentication';
import Register from './components/RegisterMain';
import styled from 'styled-components';

const Homepage = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  padding-bottom: 20px;
`;

function App() {
    return (
      <Router>
        <div className='App'>
        <Homepage>
              <Link to ='/public'>Public</Link>
              <Link to ='/'>Login</Link>
              <Link to ='/register'>Register</Link>
        </Homepage>
          <Route path='/public' component={Public} />
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <PrivateRoute exact path='/replate' component={Replate} />

        </div>
      </Router>
    );
}

export default App;
