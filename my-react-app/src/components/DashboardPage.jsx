import React, { useState, useEffect } from 'react';
// ... other imports
import Sidebar from './Sidebar';
import Header from './Header';
import HumanBodyDiagram from './HumanBodyDiagram';
import BodyPartHealthCard from './BodyPartHealthCard';
import ActivityChart from './ActivityChart';
import Calendar from './Calendar';
import AppointmentCard from './AppointmentCard';
import UpcomingEventCard from './UpcomingEventCard';

function DashboardPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);

        // Fetch data from each endpoint
        const healthStatusResponse = await fetch('http://localhost:3001/healthStatus');
        const bodyPartDetailsResponse = await fetch('http://localhost:3001/bodyPartDetails');
        const activityDataResponse = await fetch('http://localhost:3001/activityData');
        const calendarAppointmentsResponse = await fetch('http://localhost:3001/calendarAppointments');
        const currentAppointmentsResponse = await fetch('http://localhost:3001/currentAppointments');
        const upcomingScheduleResponse = await fetch('http://localhost:3001/upcomingSchedule');

        if (!healthStatusResponse.ok) {
          throw new Error(`HTTP error fetching healthStatus: ${healthStatusResponse.status}`);
        }
        if (!bodyPartDetailsResponse.ok) {
          throw new Error(`HTTP error fetching bodyPartDetails: ${bodyPartDetailsResponse.status}`);
        }
        if (!activityDataResponse.ok) {
          throw new Error(`HTTP error fetching activityData: ${activityDataResponse.status}`);
        }
        if (!calendarAppointmentsResponse.ok) {
          throw new Error(`HTTP error fetching calendarAppointments: ${calendarAppointmentsResponse.status}`);
        }
        if (!currentAppointmentsResponse.ok) {
          throw new Error(`HTTP error fetching currentAppointments: ${currentAppointmentsResponse.status}`);
        }
        if (!upcomingScheduleResponse.ok) {
          throw new Error(`HTTP error fetching upcomingSchedule: ${upcomingScheduleResponse.status}`);
        }

        const healthStatus = await healthStatusResponse.json();
        const bodyPartDetails = await bodyPartDetailsResponse.json();
        const activityData = await activityDataResponse.json();
        const calendarAppointments = await calendarAppointmentsResponse.json();
        const currentAppointments = await currentAppointmentsResponse.json();
        const upcomingSchedule = await upcomingScheduleResponse.json();

        // Combine the data into a single object
        const combinedData = {
          healthStatus,
          bodyPartDetails,
          activityData,
          calendarAppointments,
          currentAppointments,
          upcomingSchedule
        };

        setData(combinedData);

      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen text-gray-700">Loading dashboard data...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">Error: {error.message}</div>;
  if (!data) return null;

  // Now, you can access data.bodyStatus, data.bodyPartHealthMetrics, etc.
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/*  Adjust Sidebar and Header components to use the new data structure */}
      <Sidebar
        /*generalInfo={data.generalInfo}*/
        /*sidebarNav={data.sidebarNav}*/
        /*toolNav={data.toolNav}*/
        /*settingsNav={data.settingsNav}*/
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header /*generalInfo={data.generalInfo}*/ /> {/* Pass generalInfo for user initial */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 flex flex-col space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
                  <span className="text-sm text-blue-600 cursor-pointer">This Week ▼</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 relative">
                    <HumanBodyDiagram healthStatus={data.healthStatus} />
                  </div>
                  <div className="lg:col-span-1 space-y-4">
                    {data.bodyPartDetails.map((part) => (
                      <BodyPartHealthCard key={part.id} {...part} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <ActivityChart data={data.activityData} />
              </div>
            </div>

            <div className="md:col-span-1 flex flex-col space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <Calendar calendarAppointments={data.calendarAppointments} />
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Appointments</h3>
                <div className="space-y-4">
                  {data.currentAppointments.map((appt) => (
                    <AppointmentCard key={appt.id} {...appt} />
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">The Upcoming Schedule</h3>
                {data.upcomingSchedule.map((schedule, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <p className="text-sm font-medium text-gray-500 mb-2">On {schedule.day}</p>
                    <div className="space-y-3">
                      {schedule.events.map((event) => (
                        <UpcomingEventCard key={event.id} {...event} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;