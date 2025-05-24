import React from 'react';
import bodyImage from './assets/human-body.jpg'; // You'll need to add this image

function HumanBodyDiagram({ healthStatus }) {
    return (
        <div className="relative w-full h-96 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${bodyImage})` }}>
            {healthStatus.map((part) => (
                <div
                    key={part.id}
                    className={`absolute p-2 rounded-full text-white text-xs whitespace-nowrap ${part.status === 'Healthy' ? 'bg-blue-500' : 'bg-red-500'
                        } flex items-center justify-center shadow-md cursor-pointer transform -translate-x-1/2 -translate-y-1/2`}
                    style={{ top: part.indicatorPosition.top, left: part.indicatorPosition.left }}
                >
                    {part.status === 'Healthy' && (
                        <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    )}
                    {part.name} {part.status}
                </div>
            ))}
        </div>
    );
}

export default HumanBodyDiagram;