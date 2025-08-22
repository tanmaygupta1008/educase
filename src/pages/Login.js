import { useNavigate } from 'react-router-dom';

// function Login( { onNavigate }) {
function Login() {
  const navigate = useNavigate();

  const navprofile = () => {
    navigate("/profile");
  };

    return (
        <div className="popx-login-page popx-page-container">
            <h1 className="popx-heading">Signin to your PopX account</h1>
            <p className="popx-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <div className='popx-input-group'> 
              <label className='popx-input-label'>Email address <span className='required'>*</span></label>
              <input type="email" placeholder="Emter email address" className="popx-input" />
            </div>
            
            <div className='popx-input-group'> 
              <label className='popx-input-label'>Password <span className='required'>*</span></label>
              <input type="password" placeholder="Enter password" className="popx-input"  />
            </div>
            
            <button className="popx-button popx-button-disabled" onClick={navprofile}>Login</button>
        </div>
    );
}

export default Login;