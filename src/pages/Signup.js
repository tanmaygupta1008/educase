

import { useNavigate } from 'react-router-dom';


function Signup() {
  const navigate = useNavigate();

  const navprofile = () => {
    navigate("/profile")
  }

    return (
        <div className="popx-create-account-page popx-page-container">
            <h1>Create your PopX account</h1>
            <div className='popx-input-group'>
              <label className='popx-input-label'>Full Name <span className='required'>*</span></label>
              <input type="text" placeholder="Marry Doe" className="popx-input" required/>
            </div>

            <div className='popx-input-group'>
              <label className='popx-input-label'>Phone Number <span className='required'>*</span></label>
              <input type="tel" placeholder="Marry Doe" className="popx-input" required/>
            </div>

            <div className='popx-input-group'>
              <label className='popx-input-label'>Email Address <span className='required'>*</span></label>
              <input type="email" placeholder="Marry Doe" className="popx-input" required/>
            </div>

            <div className='popx-input-group'>
              <label className='popx-input-label'>Password <span className='required'>*</span>
              </label>
              <input type="password" placeholder="Marry Doe" className="popx-input" required/>
            </div>

            <div className='popx-input-group'>
              <label className='popx-input-label'>Company Name <span className='required'>*</span></label>
              <input type="text" placeholder="Marry Doe" className="popx-input" required/>
            </div>

            <div className="popx-radio-group">
              <span className="block text-gray-500 mb-2">Are you an Agency? <span className='required'>*</span></span>
              <div className="flex items-center space-x-4 options ">
                <label className="popx-radio-label">
                  <input type="radio" name="agency" className="popx-radio-input" defaultChecked />
                  <span className="ml-2 text-gray-700">Yes</span>
                </label>
                <label className="popx-radio-label">
                  <input type="radio" name="agency" className="popx-radio-input" />
                  <span className="ml-2 text-gray-700">No</span>
                </label>
              </div>
            </div>

            <button
              onClick={navprofile}
              className="popx-button popx-button-primary"
            >
              Create Account
            </button>            
        </div>
    );
}

export default Signup;