
import Icon from './Icon';
import { useNavigate } from 'react-router-dom';

function Profile({ onNavigate }) {
  const navigate = useNavigate();

  const navwelcome = () => {
    navigate("/");
  }

  return (
    <div className="popx-account-page popx-page-container">
      <div className="flex items-center justify-between mb-8">
        <h1 className="popx-heading">Account Settings</h1>
      </div>
      <div className="flex-grow">
        <div className="popx-profile-section">
          <div className="popx-profile-pic">
            <div className="popx-profile-pic-container">
              <img
                src="https://i.pinimg.com/736x/9f/9b/d0/9f9bd0ac4d3375c6c26452d8feaeba29.jpg"
                alt="Marry Doe profile"
                className="popx-profile-image"
              />
            </div>
            <div className="popx-profile-pic-icon">
              <Icon name="camera" size={16} color="white" />
            </div>
          </div>
          <div>
            <h2 className="popx-profile-name">Marry Doe</h2>
            <p className="popx-profile-email">Marry@Gmail.com</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, Sed diam.
        </p>
        <div className="popx-divider"></div>
      </div>
      <button
        onClick={navwelcome}
        className="popx-button popx-button-primary"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;