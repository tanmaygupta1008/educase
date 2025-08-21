// Icons imported as inline SVGs.
const Icon = ({ name, size = 24, className = 'fill-current' }) => {
  const icons = {
    caretLeft: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256">
        <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
      </svg>
    ),
    eye: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256">
        <path d="M128,56c-36,0-72.77,19.82-96,48c23.23,28.18,60,48,96,48s72.77-19.82,96-48C200.77,75.82,164,56,128,56Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z"></path>
      </svg>
    ),
    eyeClosed: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256">
        <path d="M228.49,195.51,167.31,134.33A7.95,7.05,0,0,0,165.66,132a40.06,40.06,0,0,0-58.42,1.6L59.18,95.17A7.94,7.94,0,0,0,56.55,94a7.92,7.92,0,0,0-5.6,2.34L22,124.7a8,8,0,0,0,11.32,11.32L41.3,118a8,8,0,0,0,0-11.32A103.11,103.11,0,0,1,128,72c34.85,0,67.65,16.5,91.22,42.54a8,8,0,0,0,11.23,0A8.07,8.07,0,0,0,230.12,114a111.45,111.45,0,0,1-18.49,27.1L244.7,144.7a8,8,0,0,0-11.32,11.32Z"></path>
      </svg>
    ),
    briefcase: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256">
        <path d="M216,64H176V48a16,16,0,0,0-16-16H96A16,16,0,0,0,80,48V64H40A16,16,0,0,0,24,80V208a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm-56,0H96V48h64ZM216,208H40V80H216V208Z"></path>
      </svg>
    ),
    buildings: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256">
        <path d="M224,208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h80a8,8,0,0,1,0,16H48V208H208V160a8,8,0,0,1,16,0Z"></path>
      </svg>
    ),
  };
  return <span className={className}>{icons[name]}</span>;
};


export default Icon;