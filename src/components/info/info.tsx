import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import './info.css'; // Import the CSS file

interface InfoComponentProps {
  information: string; // Prop for tooltip text
}

const InfoComponent: React.FC<InfoComponentProps> = ({ information }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="info-container">
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaInfoCircle className="info-icon" />
        {isHovered && (
          <div className="tooltip">
            <span className="tooltip-text">{information}</span> {/* Tooltip text */}
            {/* Tooltip Arrow */}
            <div className="tooltip-arrow" />
          </div>
        )}
      </span>
    </div>
  );
};

export default InfoComponent;
