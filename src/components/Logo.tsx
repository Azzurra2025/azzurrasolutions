import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-8' }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 1000 1000" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0" width="1000" height="550" fill="#0e2f5a" />
      <rect y="550" width="1000" height="450" fill="#aa1e2c" />
      <path 
        d="M352.5 193.5L130.5 350L352.5 506.5V730L500 638.5V415L722 258.5L500 102V325.5L352.5 416.5V193.5Z" 
        fill="white" 
      />
      <path 
        d="M500 300L722 143.5V595L870 503.5V250L647.5 93.5L500 185V300Z" 
        fill="white" 
      />
    </svg>
  );
};

export default Logo;