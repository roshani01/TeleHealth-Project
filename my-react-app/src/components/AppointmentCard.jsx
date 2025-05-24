import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faPersonWalking } from '@fortawesome/free-solid-svg-icons'; // Example icons

function AppointmentCard({ type, time, doctor }) {
  const getIcon = (appointmentType) => {
    switch (appointmentType.toLowerCase()) {
      case 'dentist':
        return <FontAwesomeIcon icon={faStethoscope} className="text-blue-500 text-xl" />; // Using stethoscope for now, find a tooth or dentist icon
      case 'physiotherapy appointment':
        return <FontAwesomeIcon icon={faPersonWalking} className="text-blue-500 text-xl" />;
      default:
        return <FontAwesomeIcon icon={faStethoscope} className="text-blue-500 text-xl" />;
    }
  };

  return (
    <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-between shadow-sm">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
          {getIcon(type)}
        </div>
        <div>
          <h4 className="text-md font-semibold text-gray-800">{type}</h4>
          <p className="text-sm text-gray-600">{doctor}</p>
        </div>
      </div>
      <span className="text-blue-600 font-medium">{time}</span>
    </div>
  );
}

export default AppointmentCard;