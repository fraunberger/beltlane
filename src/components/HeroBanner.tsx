import React from 'react';

interface HeroBannerProps {
  className?: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ className }) => {
  // Base wave path
  const wavePath = "M228.37,280.43c8.41.4,16.65.64,24.54.5,10.98.09,20.87-1.2,30.04-6.97,13.06-8.29,25.98-17.57,39.35-25.24,8.83-5.01,17.21-10.57,24.64-17.48,13.06-11.63,24.69-26.21,30.55-42.81,2.46-6.86,4.63-13.8,8.09-20.24,5.57-10.85,14.2-19.86,20.52-30.27,6.14-9.75,10.01-21.19,15.47-31.78,3.74-7.53,8.57-14.37,13.74-20.95,15.41-20.27,23.01-15.62,45.78-15.51,9.51-.34,18.82-3.53,28.23-4.2,7.51-.7,15.02.55,22.51.82,13.13.96,23.97-5.69,36.67-8.89,22.75-5.55,37.61,2.28,47.43,23.24,3.75,7.45,6.8,14.95,9.23,23.46,4.79,16.77,3.81,35.67,11.56,51.52,10.16,24.84,23.45,52.06,32.13,78.07,2.31,7.73,4.19,16.61,6.04,24.23,2.14,8.84,4.08,15.95,4.83,24.46,1.12,14.24-1.01,28.63.13,42.85.56,8.61,1.26,17.75,3.32,25.58,2.47,9.9,8.58,19.39,13.85,28.62,6.52,11.26,13.59,23.11,19.14,33.56,10.81,19.19,12.93,41.44,18.26,62.59,2.17,8.99,5.5,17.46,9.93,25.52,8.06,14.91,17.8,29.46,24.6,45.05,4.23,9.57,6.76,19.75,3.19,29.65-11.82,28.95-46.54,41.57-31.48,78.67,6.77,18.35,16.67,35.5,21.93,54.41,3.62,13.5,5.31,27.12,11.66,39.69,5.86,11.88,13.26,23.39,14.07,36.99.96,12.36,0,23.65-1.67,36.2-2.5,17.11-5.19,35.38-10.56,52.02-9.43,29.17-18.93,60.12-43.22,80.02-13.04,10.04-30.16,14.77-45.61,21.43-18.71,7.9-38.15,12.65-58.16,15.26-12.34,1.86-24.98,2.3-37.07,4.79-20.73,5.22-42.71,11.4-61.49,21.99-20.56,12.09-44.33,20.03-68.24,20.32-11.56.06-23.12-1.53-34.61-2.72-10.66-1.12-21.86-2.68-32.59-3.06-13.86-.11-27.82-1.6-40.41-7.87-27.05-11.65-45.73-29.89-64-52.42-5.79-6.87-11.72-12.9-18.66-18.17-34.08-25.39-82.94-59.12-110.2-81.17-6.94-6.26-12.85-14.74-19.07-22.42-9.25-10.95-15.91-19.09-12.36-34.43,3.43-14.37,6.84-29.74,13.51-42.71,6.31-12.85,15.82-26.04,24.07-38.03,6.78-10.81,13.41-22.07,17.99-34.35,2.79-7.63,4.38-15.68,6.01-23.63,2.25-11.46,5.16-21.82,9.26-32.54,3.92-10.67,9.03-21.13,10.87-32.35,2.52-17.07-1.3-36.28.77-53.73.84-9.6,2.52-19.16,3.29-28.75,1.22-13.28-2.88-25.06-6.89-37.78-3.05-10.61-6.64-20.97-11.01-31.08-7.61-18.45-14.68-38.2-18.6-57.96-1.67-9.67-.35-18.87-2.21-28.36-1.51-8.61-6.52-16.81-8.67-24.91-4.06-13.52,3.03-26.64,8.46-38.73,11.75-27.71,22.15-31.67,50.92-30h.22Z";

  return (
    <div className={`bg-background p-8 flex justify-center ${className || ''}`}>
      <svg
        viewBox="0 0 1200 300"
        className="w-full max-w-[800px] h-auto block"
        role="img"
        aria-label="Beltlane: the pulse of ATL"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5D63A" />
            <stop offset="40%" stopColor="#F7941D" />
            <stop offset="65%" stopColor="#EB5F1E" />
            <stop offset="100%" stopColor="#F5D63A" />
          </linearGradient>
          
          <filter id="mainTextShadow">
            <feDropShadow dx="4" dy="6" stdDeviation="4" floodColor="#000" floodOpacity="0.3" />
          </filter>
          
          <style type="text/css">
            {`
              .wave-path {
                stroke: url(#waveGradient);
                stroke-width: 3;
                stroke-linecap: round;
                stroke-linejoin: round;
                fill: none;
              }
              
              .main-text {
                font-family: "fp-head-pro", sans-serif;
                font-weight: 900;
                font-style: normal;
                filter: url(#mainTextShadow);
              }
              
              .pulse-text {
                font-family: "fp-head-pro", sans-serif;
                font-weight: 900;
                fill: #371c5a
                font-style: normal;
              }
              
              .pulse-background {
                fill: #371c5a;
                opacity: 0.9;
              }
              
              .pulse-text-outline {
                stroke: #cbdb2a;
                stroke-width: .75px;
                fill: #371c5a;;
              }
              
              .pulse-text-shadow {
                fill: #4f4968;
                stroke-width: .75px;
                stroke: #371c5a;;
              }
              
              .ring-group {
                transform-origin: 50% 35%;
                transform: perspective(1300px) rotateX(60deg) rotateY(0deg) rotateZ(0deg) scaleY(0.35) translate(220px, 0px);
              }
            `}
          </style>
        </defs>
        
        {/* SVG path with 3D transformation using the ring-group class */}
        <g id="ringGroup" className="ring-group">
          {/* Negative offset paths (inner) */}
          <path 
            className="wave-path"
            d={wavePath}
            style={{ 
              transform: 'scale(0.85)', 
              opacity: 0.7,
              strokeWidth: 2.0
            }}
          />
          
          <path 
            className="wave-path"
            d={wavePath}
            style={{ 
              transform: 'scale(0.9)', 
              opacity: 0.8,
              strokeWidth: 2.5 
            }}
          />
          
          <path 
            className="wave-path"
            d={wavePath}
            style={{ 
              transform: 'scale(0.95)', 
              opacity: 0.9,
              strokeWidth: 2.8
            }}
          />
          
          <path 
            className="wave-path"
            d={wavePath}
            style={{ 
              transform: 'scale(0.975)', 
              opacity: 0.95,
              strokeWidth: 3.0
            }}
          />
          
          {/* Original path */}
          <path 
            className="wave-path"
            d={wavePath}
            style={{ 
              strokeWidth: 3.5
            }}
          />
          
          {/* Positive offset paths (outer) */}
          <path 
            className="wave-path"
            d={wavePath}
            style={{ 
              transform: 'scale(1.025)', 
              opacity: 0.95,
              strokeWidth: 3.0
            }}
          />
          
          <path 
            className="wave-path"
            d={wavePath}
            style={{ 
              transform: 'scale(1.05)', 
              opacity: 0.9,
              strokeWidth: 2.8
            }}
          />
          
          <path 
            className="wave-path"
            d={wavePath}
            style={{ 
              transform: 'scale(1.1)', 
              opacity: 0.7,
              strokeWidth: 2.0
            }}
          />
        </g>
        
        {/* Main text - un-rotated */}
        <g>
          <text className="main-text" x="50%" y="55%" textAnchor="middle" fontSize="85" fill="#1d2f35" letterSpacing="5">
            BELTLANE
          </text>
        </g>
        
        {/* "the pulse of ATL" with styling */}
        <g transform="translate(800, 200)">
          {/* Text with outline effect */}
          <g transform="skew(-15)">
            {/* Shadow/offset text for 3D effect */}
            <text 
              className="pulse-text pulse-text-shadow"
              x="-153"
              y="13"
              textAnchor="middle"
              fontSize="30"
            >
              the pulse of ATL
            </text>
            
            {/* Main text with yellow outline */}
            <text 
              className="pulse-text pulse-text-outline"
              x="-150"
              y="15" 
              textAnchor="middle"
              fontSize="30"
            >
              the pulse of ATL
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default HeroBanner;