import React from 'react';
import './App.css';
import Chat from './Chat/Chat';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch] = useStateValue()
  return (
    <div className='App'>
      <Router>
        {!user ? (
          <Login />
        )
          :
          (<>
            <Header />
        <div className='app__body'>
          <Sidebar />
          <Switch>
            <Route path='/rooms/:roomId'>
              <Chat />
            </Route>
            <Route path='/'>
              <h2>Welcome</h2>
            </Route>
          </Switch>
        </div>
        </>)}
      </Router>
    </div>
  );
}

export default App;
