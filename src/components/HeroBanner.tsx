import React, { useEffect } from 'react';

interface HeroBannerProps {
  className?: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ className }) => {
  // Base wave path
  const wavePath = "M228.37,280.43c8.41.4,16.65.64,24.54.5,10.98.09,20.87-1.2,30.04-6.97,13.06-8.29,25.98-17.57,39.35-25.24,8.83-5.01,17.21-10.57,24.64-17.48,13.06-11.63,24.69-26.21,30.55-42.81,2.46-6.86,4.63-13.8,8.09-20.24,5.57-10.85,14.2-19.86,20.52-30.27,6.14-9.75,10.01-21.19,15.47-31.78,3.74-7.53,8.57-14.37,13.74-20.95,15.41-20.27,23.01-15.62,45.78-15.51,9.51-.34,18.82-3.53,28.23-4.2,7.51-.7,15.02.55,22.51.82,13.13.96,23.97-5.69,36.67-8.89,22.75-5.55,37.61,2.28,47.43,23.24,3.75,7.45,6.8,14.95,9.23,23.46,4.79,16.77,3.81,35.67,11.56,51.52,10.16,24.84,23.45,52.06,32.13,78.07,2.31,7.73,4.19,16.61,6.04,24.23,2.14,8.84,4.08,15.95,4.83,24.46,1.12,14.24-1.01,28.63.13,42.85.56,8.61,1.26,17.75,3.32,25.58,2.47,9.9,8.58,19.39,13.85,28.62,6.52,11.26,13.59,23.11,19.14,33.56,10.81,19.19,12.93,41.44,18.26,62.59,2.17,8.99,5.5,17.46,9.93,25.52,8.06,14.91,17.8,29.46,24.6,45.05,4.23,9.57,6.76,19.75,3.19,29.65-11.82,28.95-46.54,41.57-31.48,78.67,6.77,18.35,16.67,35.5,21.93,54.41,3.62,13.5,5.31,27.12,11.66,39.69,5.86,11.88,13.26,23.39,14.07,36.99.96,12.36,0,23.65-1.67,36.2-2.5,17.11-5.19,35.38-10.56,52.02-9.43,29.17-18.93,60.12-43.22,80.02-13.04,10.04-30.16,14.77-45.61,21.43-18.71,7.9-38.15,12.65-58.16,15.26-12.34,1.86-24.98,2.3-37.07,4.79-20.73,5.22-42.71,11.4-61.49,21.99-20.56,12.09-44.33,20.03-68.24,20.32-11.56.06-23.12-1.53-34.61-2.72-10.66-1.12-21.86-2.68-32.59-3.06-13.86-.11-27.82-1.6-40.41-7.87-27.05-11.65-45.73-29.89-64-52.42-5.79-6.87-11.72-12.9-18.66-18.17-34.08-25.39-82.94-59.12-110.2-81.17-6.94-6.26-12.85-14.74-19.07-22.42-9.25-10.95-15.91-19.09-12.36-34.43,3.43-14.37,6.84-29.74,13.51-42.71,6.31-12.85,15.82-26.04,24.07-38.03,6.78-10.81,13.41-22.07,17.99-34.35,2.79-7.63,4.38-15.68,6.01-23.63,2.25-11.46,5.16-21.82,9.26-32.54,3.92-10.67,9.03-21.13,10.87-32.35,2.52-17.07-1.3-36.28.77-53.73.84-9.6,2.52-19.16,3.29-28.75,1.22-13.28-2.88-25.06-6.89-37.78-3.05-10.61-6.64-20.97-11.01-31.08-7.61-18.45-14.68-38.2-18.6-57.96-1.67-9.67-.35-18.87-2.21-28.36-1.51-8.61-6.52-16.81-8.67-24.91-4.06-13.52,3.03-26.64,8.46-38.73,11.75-27.71,22.15-31.67,50.92-30h.22Z";

  // Start the animation after component mounts
  useEffect(() => {
    // Periodically restart the animation to keep it synced
    const intervalId = setInterval(() => {
      const filters = document.querySelectorAll('.pulse-turbulence');
      filters.forEach(filter => {
        // Reset the animation by forcing a DOM reflow
        filter.setAttribute('baseFrequency', filter.getAttribute('baseFrequency') || '0.01 0.01');
      });
    }, 15000); // Reset every 15 seconds
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`bg-background w-full flex justify-center items-center ${className || ''} pt-16 sm:pt-20 md:pt-8 pb-4 sm:pb-8 px-2 sm:px-4 md:px-8`}>
      <svg
        viewBox="0 0 1200 300"
        className="w-full max-w-full md:max-w-[1200px] h-auto block"
        role="img"
        aria-label="Beltlane: the pulse of ATL"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5D63A" />
            <stop offset="40%" stopColor="#F7941D" />
            <stop offset="65%" stopColor="#EB5F1E" />
            <stop offset="100%" stopColor="#F5D63A" />
          </linearGradient>
          
          <linearGradient id="spikeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFE066" />
            <stop offset="100%" stopColor="#F7941D" />
          </linearGradient>
          
          <filter id="mainTextShadow">
            <feDropShadow dx="4" dy="6" stdDeviation="4" floodColor="#000" floodOpacity="0.3" />
          </filter>
          
          {/* Dilate filters (positive offset - expanding outward) */}
          <filter id="offset1" x="-20%" y="-20%" width="140%" height="140%">
            <feMorphology operator="dilate" radius="4" in="SourceGraphic" result="thicken" />
          </filter>
          
          <filter id="offset2" x="-20%" y="-20%" width="140%" height="140%">
            <feMorphology operator="dilate" radius="8" in="SourceGraphic" result="thicken" />
          </filter>
          
          <filter id="offset3" x="-20%" y="-20%" width="140%" height="140%">
            <feMorphology operator="dilate" radius="16" in="SourceGraphic" result="thicken" />
          </filter>
          
          <filter id="offset4" x="-20%" y="-20%" width="140%" height="140%">
            <feMorphology operator="dilate" radius="32" in="SourceGraphic" result="thicken" />
          </filter>
          
          {/* Erode filters (negative offset - contracting inward) */}
          <filter id="offsetNeg1" x="-20%" y="-20%" width="140%" height="140%">
            <feMorphology operator="erode" radius="4" in="SourceGraphic" result="thin" />
          </filter>
          
          <filter id="offsetNeg2" x="-20%" y="-20%" width="140%" height="140%">
            <feMorphology operator="erode" radius="16" in="SourceGraphic" result="thin" />
          </filter>
          
          <filter id="offsetNeg3" x="-20%" y="-20%" width="140%" height="140%">
            <feMorphology operator="erode" radius="24" in="SourceGraphic" result="thin" />
          </filter>
          
          <filter id="offsetNeg4" x="-20%" y="-20%" width="140%" height="140%">
            <feMorphology operator="erode" radius="32" in="SourceGraphic" result="thin" />
          </filter>
          
          {/* Vertical spike filter with targeted points */}
          <filter id="verticalSpikes" x="-30%" y="-30%" width="160%" height="160%">
            {/* Create a high-contrast noise pattern for spikes */}
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.05 0.015" 
              numOctaves="1" 
              seed="13" 
              stitchTiles="stitch"
              result="noise"
              className="pulse-turbulence">
              <animate 
                attributeName="baseFrequency" 
                from="0.05 0.015" 
                to="0.05 0.005" 
                dur="10s" 
                repeatCount="indefinite" 
              />
            </feTurbulence>
            
            {/* Threshold the noise to create distinct points */}
            <feComponentTransfer in="noise" result="threshold">
              <feFuncR type="linear" slope="5" intercept="-2"/>
              <feFuncG type="linear" slope="5" intercept="-2"/>
              <feFuncB type="linear" slope="5" intercept="-2"/>
              <feFuncA type="linear" slope="0" intercept="1"/>
            </feComponentTransfer>
            
            {/* Create large vertical displacement only at spike points */}
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="threshold" 
              scale="80" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
          
          {/* Wave pulse displacement filters - AMPLIFIED */}
          {/* Strong inner pulse with dramatic vertical displacement */}
          <filter id="pulseDisplacement1" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.008 0.005" 
              numOctaves="2" 
              seed="3" 
              stitchTiles="stitch"
              result="turbulence"
              className="pulse-turbulence">
              <animate 
                attributeName="baseFrequency" 
                from="0.008 0.005" 
                to="0.008 0.08" 
                dur="6s" 
                repeatCount="indefinite" 
              />
            </feTurbulence>
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="turbulence" 
              scale="40" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
          
          {/* Medium pulse with focus on vertical movement */}
          <filter id="pulseDisplacement2" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.01 0.003" 
              numOctaves="3" 
              seed="5" 
              stitchTiles="stitch"
              result="turbulence"
              className="pulse-turbulence">
              <animate 
                attributeName="baseFrequency" 
                from="0.01 0.003" 
                to="0.01 0.06" 
                dur="8s" 
                repeatCount="indefinite" 
              />
            </feTurbulence>
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="turbulence" 
              scale="30" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
          
          {/* Create glowing spikes effect */}
          <filter id="glowSpikes" x="-30%" y="-30%" width="160%" height="160%">
            {/* Create a glow effect */}
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
          
          {/* Shadow for vertical spikes */}
          <filter id="spikeShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#000" flood-opacity="0.5"/>
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
              
              .wave-pulse-1 {
                filter: url(#pulseDisplacement1);
              }
              
              .wave-pulse-2 {
                filter: url(#pulseDisplacement2);
              }
              
              .spike-layer {
                filter: url(#verticalSpikes);
              }
              
              .vertical-spike {
                stroke: url(#spikeGradient);
                stroke-width: 2;
                fill: none;
                filter: url(#glowSpikes);
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
          {/* Inner rings with pulse effect */}
          <g className="wave-pulse-1">
            <path 
              className="wave-path"
              d={wavePath}
              style={{ opacity: 0.3, strokeWidth: 1.0 }}
              filter="url(#offsetNeg4)"
            />
          </g>
          
          <g className="wave-pulse-2">
            <path 
              className="wave-path"
              d={wavePath}
              style={{ opacity: 0.4, strokeWidth: 1.5 }}
              filter="url(#offsetNeg3)"
            />
          </g>
          
          <g className="wave-pulse-3">
            <path 
              className="wave-path"
              d={wavePath}
              style={{ opacity: 0.6, strokeWidth: 2.0 }}
              filter="url(#offsetNeg2)"
            />
          </g>
          
          <g className="wave-pulse-1">
            <path 
              className="wave-path"
              d={wavePath}
              style={{ opacity: 0.8, strokeWidth: 2.5 }}
              filter="url(#offsetNeg1)"
            />
          </g>
          
          {/* Center path with pulse effect */}
          <g className="wave-pulse-4">
            <path 
              className="wave-path"
              d={wavePath}
              style={{ opacity: 1.0, strokeWidth: 3.5 }}
            />
          </g>
          
          {/* Outer rings with pulse effect */}
          <g className="wave-pulse-1">
            <path 
              className="wave-path"
              d={wavePath}
              style={{ opacity: 0.8, strokeWidth: 2.5 }}
              filter="url(#offset1)"
            />
          </g>
          
          <g className="wave-pulse-3">
            <path 
              className="wave-path"
              d={wavePath}
              style={{ opacity: 0.6, strokeWidth: 2.0 }}
              filter="url(#offset2)"
            />
          </g>
          
          <g className="wave-pulse-2">
            <path 
              className="wave-path"
              d={wavePath}
              style={{ opacity: 0.4, strokeWidth: 1.5 }}
              filter="url(#offset3)"
            />
          </g>
          
          <g className="wave-pulse-4">
            <path 
              className="wave-path"
              d={wavePath}
              style={{ opacity: 0.3, strokeWidth: 1.0 }}
              filter="url(#offset4)"
            />
          </g>
          
          {/* Add vertical spike layer */}
          <g className="spike-layer">
            <path 
              className="wave-path vertical-spike"
              d={wavePath}
              style={{ opacity: 0.6, strokeWidth: 1.5 }}
              filter="url(#spikeShadow)"
            />
          </g>
          
          {/* Individual vertical spikes with staggered animations */}
          <g>
            {/* Spike 1 */}
            <path 
              d="M300,280 L300,130" 
              className="vertical-spike vertical-spike-animate"
              style={{ opacity: 0.7, strokeWidth: 3, animationDelay: "0s" }}
            />
            
            {/* Spike 2 */}
            <path 
              d="M450,230 L450,80" 
              className="vertical-spike vertical-spike-animate"
              style={{ opacity: 0.8, strokeWidth: 4, animationDelay: "0.5s" }}
            />
            
            {/* Spike 3 */}
            <path 
              d="M600,260 L600,110" 
              className="vertical-spike vertical-spike-animate"
              style={{ opacity: 0.7, strokeWidth: 3, animationDelay: "1.2s" }}
            />
            
            {/* Spike 4 */}
            <path 
              d="M750,240 L750,90" 
              className="vertical-spike vertical-spike-animate"
              style={{ opacity: 0.9, strokeWidth: 4, animationDelay: "1.8s" }}
            />
            
            {/* Spike 5 */}
            <path 
              d="M900,270 L900,120" 
              className="vertical-spike vertical-spike-animate"
              style={{ opacity: 0.8, strokeWidth: 3, animationDelay: "0.8s" }}
            />
          </g>
        </g>
        
        {/* Main text - un-rotated */}
        <g>
          <text className="main-text" x="50%" y="55%" textAnchor="middle" fontSize="85" fill="#1d2f35" letterSpacing="3">
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
              x="-101"
              y="-9"
              textAnchor="middle"
              fontSize="34"
            >
              the pulse of ATL
            </text>
            
            {/* Main text with yellow outline */}
            <text 
              className="pulse-text pulse-text-outline"
              x="-100"
              y="-7" 
              textAnchor="middle"
              fontSize="34"
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