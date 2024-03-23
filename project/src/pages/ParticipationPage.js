// // ParticipationPage.js
// import React from 'react';

// function ParticipationPage() {
//   // Function to handle form submission
//   const handleSubmit = event => {
//     event.preventDefault();
//     // Handle form submission logic
//     // For example, you can send the data to your server or perform any other actions
//   };
//   const handleImage=()=>
//   {
    
//   }

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">Participation Page</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Add form fields for posting photos and videos */}
//         {/* Example: */}
//         <label>
//           Upload Photo:
//           <input onSubmit={handleImage} type="file" accept="image/*" />
//         </label>
//         <br />
//         <label>
//           Upload Video:
//           <input type="file" accept="video/*" />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ParticipationPage;
// ParticipationPage.js
import React from 'react';
import './ParticipationPage.css'; // Import CSS file for styling

function ParticipationPage() {
  // Function to handle form submission
  const handleSubmit = event => {
    event.preventDefault();
    // Handle form submission logic
    // For example, you can send the data to your server or perform any other actions
  };

  return (
    <div className="participation-page-container">
      <h1 className="page-title">Participate Here</h1>
      <form onSubmit={handleSubmit} className="form-container">
        {/* Add form fields for posting photos and videos */}
        {/* Example: */}
        <div className="form-group">
          <label htmlFor="photo">Upload Photo:</label>
          <input id="photo" type="file" accept="image/*" />
        </div>
        <div className="form-group">
          <label htmlFor="video">Upload Video:</label>
          <input id="video" type="file" accept="video/*" />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default ParticipationPage;