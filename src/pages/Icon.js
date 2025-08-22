// Icons imported as inline SVGs.
const Icon = ({ name, size = 24, className = 'fill-current', color = 'currentColor' }) => {
  const icons = {
    camera: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256">
        <path d="M208,80H176l-18.34-36.68A8,8,0,0,0,150.7,40H105.3a8,8,0,0,0-6.96,3.32L80,80H48A16,16,0,0,0,32,96V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,96a40,40,0,1,1,40-40A40,40,0,0,1,128,176Z" fill={color}></path>
      </svg>
    ),
  };
  return <span className={className}>{icons[name]}</span>;
};


export default Icon;