import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faBrain } from '@fortawesome/free-solid-svg-icons'; // Example icons

function UpcomingEventCard({ name, time, icon }) {
  const getIcon = (iconName) => {
    switch (iconName.toLowerCase()) {
      case 'heart':
        return <FontAwesomeIcon icon={faHeart} className="text-blue-500" />;
      case 'eye':
        return <FontAwesomeIcon icon={faEye} className="text-blue-500" />;
      case 'brain':
        return <FontAwesomeIcon icon={faBrain} className="text-blue-500" />;
      default:
        return <FontAwesomeIcon icon={faHeart} className="text-blue-500" />;
    }
  };

  return (
    <div className="bg-white p-3 rounded-lg flex items-center justify-between shadow-sm border border-gray-200">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
          {getIcon(icon)}
        </div>
        <span className="text-gray-800 font-medium">{name}</span>
      </div>
      <span className="text-gray-500 text-sm">{time}</span>
    </div>
  );
}

export default UpcomingEventCard;