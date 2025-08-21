import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  const navlogin = () => {
    navigate("/login")
  };

  const navsignup = () => { 
    navigate("/signup")
  };

    return (
        <div className="popx-welcome-page popx-page-container" >
          <div className="pt-16">
            <h1 className="popx-heading" >
              Welcome to PopX
            </h1>

            <p className="popx-subtext" >
              Lorem ipsum dolor sit amet, consecutor adipiscing elit,
            </p>

            <button onClick={navsignup} className="popx-button popx-button-primary" >
              Create Account
            </button>

            <button onClick={navlogin} className='popx-button popx-button-secondary'>
              Already Registered? Login
            </button>
          </div>
        </div>
    );
}

export default Landing;