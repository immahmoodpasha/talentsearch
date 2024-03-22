// import React from 'react'

// function Menu() {
//   return (
//     <div></div>
//   )
// }

// export default Menu
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  // Dummy data for expo events
  const expoEvents = [
    {
      id: 1,
      date: '2024-03-25',
      time: '10:00 AM - 12:00 PM',
      domain: 'Blockchain Technology',
      experts: [
        { id: 1, name: 'John Doe', googleLink: 'https://www.google.com/search?q=John+Doe' },
        { id: 2, name: 'Jane Smith', googleLink: 'https://www.google.com/search?q=Jane+Smith' }
      ]
    },
    // Add more expo events as needed
  ];

  return (
    <div>
      <h1>Expo Events</h1>
      {expoEvents.map((event) => (
        <div key={event.id} className="expo-event">
          <h2>Date: {event.date}</h2>
          <p>Time: {event.time}</p>
          <p>Domain: {event.domain}</p>
          <p>Experts:</p>
          <ul>
            {event.experts.map((expert) => (
              <li key={expert.id}>
                {/* Link to expert's Google search */}
                <Link to={expert.googleLink} target="_blank">{expert.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;