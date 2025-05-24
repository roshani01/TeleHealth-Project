import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTooth, faBone } from '@fortawesome/free-solid-svg-icons'; // Example icons

function BodyPartHealthCard({ name, date, progress, detailsLink }) {
  const getIcon = (partName) => {
    switch (partName.toLowerCase()) {
      case 'lungs':
        return <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.25a2.25 2.25 0 00-2.25 2.25V19a2.25 2.25 0 002.25 2.25H10m0-7.5h.75a2.25 2.25 0 002.25-2.25v-3.375c0-1.036-.84-1.875-1.875-1.875h-1.002c-.636 0-1.205-.31-1.562-.805L8.25 5.75m4.5 4.5h.75A2.25 2.25 0 0015.75 8v-3.375c0-1.036-.84-1.875-1.875-1.875h-1.002c-.636 0-1.205-.31-1.562-.805L12.75 5.75M7.5 12h.008v.008H7.5V12zm4.5 0h.008v.008H12V12z"></path></svg>; // Placeholder for lungs
      case 'teeth':
        return <FontAwesomeIcon icon={faTooth} className="text-blue-500 text-2xl" />;
      case 'bone':
        return <FontAwesomeIcon icon={faBone} className="text-blue-500 text-2xl" />;
      default:
        return <FontAwesomeIcon icon={faHeart} className="text-blue-500 text-2xl" />; // Default or a generic icon
    }
  };

  return (
    <div className="flex items-center bg-gray-50 rounded-lg p-4 shadow-sm">
      <div className="flex-shrink-0 mr-4">
        {getIcon(name)}
      </div>
      <div className="flex-grow">
        <h4 className="text-md font-semibold text-gray-800">{name}</h4>
        <p className="text-gray-500 text-sm">Date: {date}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div
            className="bg-blue-500 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <a href={detailsLink} className="text-blue-600 text-sm ml-4 flex-shrink-0">
        Details
      </a>
    </div>
  );
}

export default BodyPartHealthCard;