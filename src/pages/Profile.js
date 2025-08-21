
import Icon from './Icon';

function Profile({ onNavigate }) {
    return (
    <div className="popx-account-page popx-page-container">
      <div className="flex items-center justify-between mb-8">
        <h1 className="popx-heading">Account Settings</h1>
        <button onClick={() => onNavigate('welcome')} className="text-gray-500">
          <Icon name="caretLeft" size={24} />
        </button>
      </div>
      <div className="flex-grow">
        <div className="popx-profile-section">
          {/* User profile picture */}
          <div className="popx-profile-pic">
            <div className="popx-profile-pic-container">
              <img
                src="https://placehold.co/80x80/E2B8FF/7F1DDB?text=MD"
                alt="Marry Doe profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="popx-profile-pic-icon">
              <Icon name="briefcase" size={16} color="white" />
            </div>
          </div>
          {/* User name and email */}
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
        {/* Placeholder for settings list */}
        <ul className="popx-settings-list">
          <li>
            <Icon name="buildings" size={24} />
            <span>Manage Agencies</span>
          </li>
          <li>
            <Icon name="buildings" size={24} />
            <span>Manage Agencies</span>
          </li>
        </ul>
      </div>
      <button
        onClick={() => onNavigate('welcome')}
        className="popx-button popx-button-primary"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;