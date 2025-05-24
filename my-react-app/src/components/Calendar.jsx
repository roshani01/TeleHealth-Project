import React from 'react';

function Calendar({ calendarAppointments }) {
  const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = calendarAppointments.map(day => ({ date: day.date, day: day.day, hasAppointments: day.times.length > 0 }));

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">October 2021</h3>
        <div className="flex items-center space-x-2">
          <button className="text-gray-500 hover:text-gray-700">◀</button>
          <button className="text-gray-500 hover:text-gray-700">▶</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-500 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {dates.map((item) => (
          <div
            key={item.date}
            className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer
              ${item.date === '26' && item.day === 'Tues' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
              ${item.date === '28' && item.day === 'Thurs' ? 'bg-blue-200 text-blue-800 font-semibold' : ''}
              ${(item.date === '30' || item.date === '31') ? 'bg-blue-50 text-blue-800 font-semibold' : ''}
              `}
          >
            <span className="font-semibold text-lg">{item.date}</span>
            {item.hasAppointments && (
              <div className="mt-1 space-y-1">
                {calendarAppointments.find(d => d.date === item.date)?.times.map((time, idx) => (
                  <div key={idx} className={`text-xs p-1 rounded ${item.date === '26' && item.day === 'Tues' ? 'bg-blue-700' : 'bg-white'}`}>
                    {time}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;