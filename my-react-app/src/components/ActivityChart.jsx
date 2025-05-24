import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'; // Example if using Recharts

function ActivityChart({ data }) {
  // Mock rendering for the chart without a library
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Activity</h3>
        <span className="text-gray-500 text-sm">3 appointment on this week</span>
      </div>
      <div className="flex justify-around items-end h-32">
        {data.map((item) => (
          <div key={item.day} className="flex flex-col items-center">
            <div
              className="bg-blue-400 rounded-t-sm w-4"
              style={{ height: `${item.value * 2}px` }} // Scale value for visual height
            ></div>
            <span className="text-xs text-gray-600 mt-1">{item.day}</span>
          </div>
        ))}
      </div>
      {/*
        If using Recharts:
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#60A5FA" />
          </BarChart>
        </ResponsiveContainer>
      */}
    </div>
  );
}

export default ActivityChart;