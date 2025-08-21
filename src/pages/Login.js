
import Icon from './Icon';
import React, { useState } from 'react';

// function Login( { onNavigate }) {
function Login() {
    return (
        <div>
            <h1>Signin to your PopX account</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <div className='popx-input-group'> 
              <label className='popx-input-label'>Email address </label>
              <input type="email" placeholder="Emter email address" className="popx-input" />
            </div>


            <div className='popx-input-group'> 
              <label className='popx-input-label'>Password </label>
              <input type="password" placeholder="Enter password" className="popx-input"  />
            </div>
            
            
            
            <button>Login</button>
        </div>
    );

  //   const [passwordVisible, setPasswordVisible] = useState(false);




  //   return (
  //   <div className="popx-login-page popx-page-container">
  //     <div className="flex items-start">
  //       <button onClick={() => onNavigate('welcome')} className="text-gray-500">
  //         <Icon name="caretLeft" size={24} />
  //       </button>
  //     </div>
  //     <div className="flex-grow pt-8">
  //       <h1 className="popx-heading">Signin to your PopX account</h1>
  //       <p className="popx-subtext">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //       </p>
  //       <div className="popx-input-group">
  //         <label className="popx-input-label">
  //           Email Address
  //         </label>
  //         <input
  //           type="email"
  //           placeholder="Enter email address"
  //           className="popx-input"
  //         />
  //       </div>
  //       <div className="popx-input-group">
  //         <label className="popx-input-label">
  //           Password
  //         </label>
  //         <div className="relative">
  //           <input
  //             type={passwordVisible ? 'text' : 'password'}
  //             placeholder="Enter password"
  //             className="popx-input"
  //           />
  //           <span
  //             onClick={() => setPasswordVisible(!passwordVisible)}
  //             className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
  //           >
  //             {passwordVisible ? <Icon name="eye" size={20} /> : <Icon name="eyeClosed" size={20} />}
  //           </span>
  //         </div>
  //       </div>
  //       <button
  //         onClick={() => onNavigate('accountSettings')}
  //         className="popx-button popx-button-disabled"
  //       >
  //         Login
  //       </button>
  //     </div>
  //   </div>
  // );

}

export default Login;