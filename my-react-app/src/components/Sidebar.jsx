import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHistory, faCalendarAlt, faClipboardList, faChartBar, faComment, faLifeRing, faCog } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (
        <div className="w-64 bg-white shadow-lg flex flex-col p-6">
            <div className="text-blue-600 font-bold text-2xl mb-10">Healthcare.</div>
            <nav className="flex-1">
                <ul className="space-y-4">
                    <li className="text-gray-500 hover:text-blue-600 cursor-pointer flex items-center p-2 rounded-lg transition-colors duration-200">
                        <FontAwesomeIcon icon={faHome} className="mr-3" />
                        General
                    </li>
                    <li className="text-blue-600 bg-blue-50 flex items-center p-2 rounded-lg">
                        <FontAwesomeIcon icon={faClipboardList} className="mr-3" />
                        Dashboard
                    </li>
                    <li className="text-gray-500 hover:text-blue-600 cursor-pointer flex items-center p-2 rounded-lg transition-colors duration-200">
                        <FontAwesomeIcon icon={faHistory} className="mr-3" />
                        History
                    </li>
                    <li className="text-gray-500 hover:text-blue-600 cursor-pointer flex items-center p-2 rounded-lg transition-colors duration-200">
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-3" />
                        Calendar
                    </li>
                    <li className="text-gray-500 hover:text-blue-600 cursor-pointer flex items-center p-2 rounded-lg transition-colors duration-200">
                        <FontAwesomeIcon icon={faClipboardList} className="mr-3" />
                        Appointments
                    </li>
                    <li className="text-gray-500 hover:text-blue-600 cursor-pointer flex items-center p-2 rounded-lg transition-colors duration-200">
                        <FontAwesomeIcon icon={faChartBar} className="mr-3" />
                        Statistics
                    </li>
                </ul>
                <div className="mt-8 pt-8 border-t border-gray-200">
                    <ul className="space-y-4">
                        <li className="text-gray-500 hover:text-blue-600 cursor-pointer flex items-center p-2 rounded-lg transition-colors duration-200">
                            <FontAwesomeIcon icon={faComment} className="mr-3" />
                            Chat
                        </li>
                        <li className="text-gray-500 hover:text-blue-600 cursor-pointer flex items-center p-2 rounded-lg transition-colors duration-200">
                            <FontAwesomeIcon icon={faLifeRing} className="mr-3" />
                            Support
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="mt-auto text-gray-500 hover:text-blue-600 cursor-pointer flex items-center p-2 rounded-lg transition-colors duration-200">
                <FontAwesomeIcon icon={faCog} className="mr-3" />
                Setting
            </div>
        </div>
    );
}

export default Sidebar;