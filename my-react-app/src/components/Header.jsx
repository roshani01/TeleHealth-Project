import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faPlus } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-100 rounded-lg py-2 pl-10 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 w-64"
                />
                <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faBell} className="text-gray-400 text-xl cursor-pointer hover:text-gray-600" />
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg cursor-pointer hover:bg-blue-600">
                    J
                </div>
                <button className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </header>
    );
}

export default Header;