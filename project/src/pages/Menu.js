import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParticipationPage from './ParticipationPage';

function Menu() {
  const [events, setEvents] = useState([]);
  const [todaysEvents, setTodaysEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    // Fetch events from your Express API
    fetch(`${process.env.REACT_APP_SERVER_DOMIN}/Exposevent`)
      .then(response => response.json())
      .then(data => {
        // Sort events by date
        const sortedEvents = data.sort((a, b) => new Date(a.Date) - new Date(b.Date));
        setEvents(sortedEvents);
        separateEvents(sortedEvents);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  // Function to separate today's events and upcoming events
  const separateEvents = sortedEvents => {
    const today = new Date().toLocaleDateString();
    const todayEvents = sortedEvents.filter(event => event.Date ==="23-03-2024");
    const upcomingEvents = sortedEvents.filter(event => event.Date !== "23-03-2024");
    setTodaysEvents(todayEvents);
    setUpcomingEvents(upcomingEvents);
  };

  return (
    <div>
      {/* <h1 className=" font-bold m-7 bg-secondary">Event List</h1> */}
      {todaysEvents.length > 0 && (
        <div className='m-10'>
          <h2 className=" font-bold m-8 text-center display-4 "><b style={{fontSize:70}}>Today's Events</b></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {todaysEvents.map(event => (
              <div key={event._id} className="border rounded p-4">
                <h3 className="text-lg font-semibold mb-2">EventName: {event.EventName}</h3>
                <p className="mb-2">Date: {event.Date}</p>
                <p className="mb-2">Time: {event.Time}</p>
                <p className="mb-2">Contractors: {event.Contractors}</p>
                <p className="mb-2">Domain: {event.Domain}</p>
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg upload-button" > <Link to="/participate"><h2>Participate</h2></Link></button>
                
              </div>
            ))}
          </div>
        </div>
      )}
      {upcomingEvents.length > 0 && (
        <div className='m-10'>
          <h2 className="font-bold m-8 text-center display-4 "><b style={{fontSize:70}}>Upcoming Events</b></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingEvents.map(event => (
              <div key={event._id} className="border rounded p-4">
                <h3 className="text-lg font-semibold mb-2">EventName: {event.EventName}</h3>
                <p className="mb-2">Date: {event.Date}</p>
                <p className="mb-2">Time: {event.Time}</p>
                <p className="mb-2">Contractors: {event.Contractors}</p>
                <p className="mb-2">Domain: {event.Domain}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {(todaysEvents.length === 0 && upcomingEvents.length === 0) && (
        <p className="text-lg font-bold mb-4">No events today</p>
      )}
    </div>
  );
}

export default Menu;