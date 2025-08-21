// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import './App.css';
import React, { useState } from 'react';

function App () {
  // const [currentPage, setCurrentPage] = useState('welcome');
  
  return (
    <div className="popx-container">
      <div className='popx-mobile-frame'>
        <Router>
          <Routes>
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




  // // Simple state for navigation
  // const [currentPage, setCurrentPage] = useState('welcome');

  // // Function to render the correct page component
  // const renderPage = () => {
  //   switch (currentPage) {
  //     case 'welcome':
  //       return <Landing onNavigate={setCurrentPage} />;
  //     case 'login':
  //       return <Login onNavigate={setCurrentPage} />;
  //     case 'createAccount':
  //       return <Signup onNavigate={setCurrentPage} />;
  //     case 'accountSettings':
  //       return <Profile onNavigate={setCurrentPage} />;
  //     default:
  //       return <Landing onNavigate={setCurrentPage} />;
  //   }
  // };

  // return (
  //   <div className="popx-container">
  //     <div className="popx-mobile-frame">
  //       {/* Render the current page */}
  //       {renderPage()}
  //     </div>
  //   </div>
  // );

}

export default App;
