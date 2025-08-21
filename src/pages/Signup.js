
import Icon from './Icon';

// function Signup({ onNavigate }) {
function Signup() {
    return (
        <div>
            <h1>Create your PopX account</h1>
            <div className='popx-input-group'>
              <label className='popx-input-label'>Full Name*</label>
              <input type="text" placeholder="Marry Doe" required className="popx-input" />
            </div>

            <div className='popx-input-group'>
              <label className='popx-input-label'>Phone Number*</label>
              <input type="tel" placeholder="Marry Doe" required className="popx-input" />
            </div>

            <div className='popx-input-group'>
              <label className='popx-input-label'>Email Address*</label>
              <input type="email" placeholder="Marry Doe" required className="popx-input" />
            </div>

            <div className='popx-input-group'>
              <label className='popx-input-label'>Password*</label>
              <input type="password" placeholder="Marry Doe" required className="popx-input" />
            </div>

            <div className='popx-input-group'>
              <label className='popx-input-label'>Company Name*</label>
              <input type="text" placeholder="Marry Doe" required className="popx-input" />
            </div>
            
        </div>
        
    );



  //   return (
  //   <div className="popx-create-account-page popx-page-container">
  //     <div className="flex items-start">
  //       <button onClick={() => onNavigate('welcome')} className="text-gray-500">
  //         <Icon name="caretLeft" size={24} />
  //       </button>
  //     </div>
  //     <div className="flex-grow pt-8">
  //       <h1 className="popx-heading">Create your PopX account</h1>
  //       <div className="space-y-6 mt-8">
  //         {['Full Name', 'Phone number', 'Email address', 'Password', 'Company name'].map((label, index) => (
  //           <div className="popx-input-group" key={index}>
  //             <label className="popx-input-label">
  //               {label}*
  //             </label>
  //             <input
  //               type={label.includes('Password') ? 'password' : 'text'}
  //               placeholder="Marry Doe"
  //               className="popx-input"
  //             />
  //           </div>
  //         ))}
  //         <div className="popx-radio-group">
  //           <span className="block text-gray-500 mb-2">Are you an Agency?*</span>
  //           <div className="flex items-center space-x-4">
  //             <label className="popx-radio-label">
  //               <input type="radio" name="agency" className="popx-radio-input" defaultChecked />
  //               <span className="ml-2 text-gray-700">Yes</span>
  //             </label>
  //             <label className="popx-radio-label">
  //               <input type="radio" name="agency" className="popx-radio-input" />
  //               <span className="ml-2 text-gray-700">No</span>
  //             </label>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <button
  //       onClick={() => onNavigate('accountSettings')}
  //       className="popx-button popx-button-primary"
  //     >
  //       Create Account
  //     </button>
  //   </div>
  // );
}

export default Signup;