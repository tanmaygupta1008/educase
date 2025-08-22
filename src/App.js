import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import './App.css';

function App () {
  return (
    <div className="popx-container">
      <div className='popx-mobile-frame'>
        <Router>
          <Routes basename="/">
            <Route 
              exact
              path = "/"
              element = {<Landing />}
            />
            <Route 
              path = "/login"
              element = {<Login />}
            />
            <Route 
              path = "/signup"
              element = {<Signup />}
            />
            <Route 
              path = "/profile"
              element = {<Profile />}
            />
          </Routes>
        </Router>
      </ div>
    </div>
  );
}

export default App;
