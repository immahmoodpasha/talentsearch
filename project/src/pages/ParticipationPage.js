// ParticipationPage.js
import React from 'react';

function ParticipationPage() {
  // Function to handle form submission
  const handleSubmit = event => {
    event.preventDefault();
    // Handle form submission logic
    // For example, you can send the data to your server or perform any other actions
  };
  const handleImage=()=>
  {
    
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Participation Page</h1>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for posting photos and videos */}
        {/* Example: */}
        <label>
          Upload Photo:
          <input onSubmit={handleImage} type="file" accept="image/*" />
        </label>
        <br />
        <label>
          Upload Video:
          <input type="file" accept="video/*" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ParticipationPage;
