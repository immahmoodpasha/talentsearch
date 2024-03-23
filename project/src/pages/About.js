// import React from 'react'
// import { useState, useEffect } from 'react';
// function About() {
//   const [question, setQuestion] = useState('');
//   const [selectedOption, setSelectedOptions] = useState('');
//   const [options, setOptions] = useState(['', '']); // Initial state with two empty options
//   const [f, setf] = useState(0)
//   const [votes, setVotes] = useState(Array(options.length).fill(0));

//   const [voteque, setvoteque] = useState("")
//   const [optionsvotes, setOptionsvotes] = useState([]); // Initial state with two empty options


//   const handleAddOption = () => {
//     setOptions([...options, '']); // Add a new empty option
//   };

//   const handleOptionChange = (e, index) => {
//     const newOptions = [...options];
//     newOptions[index] = e.target.value; // Update the value of the option at the given index
//     setOptions(newOptions);
//   };

//   const handleSubmitSurvey = () => {
//     // Validate survey input
//     if (!question || options.some(option => !option.trim())) {
//       alert('Please enter both question and options.');
//       return;
//     }

//     // Logic to submit survey data to backend
//     const surveyData = {
//       question,
//       options: options.filter(option => option.trim()) // Remove empty options
//     };
//     //
//     //
//     //submit the que answer to  database
//     //
//     //
//     setQuestion('');
//     setOptions(['']);
//     console.log('Survey Data:', surveyData);
//     setf(1)
//     // Example: Send surveyData to backend API
//   };

//   useEffect(() => {
//     const callfun = () => {
//       //fetch survet
      
//     }

//     if (f == 1) {
//       callfun()

//     }
//   }, [f])
//   ///////////////////////////////////////////////////votings?////////////
//   const handleAddOptionVote = () => {
//     setOptionsvotes([...optionsvotes, '']); // Add a new empty option
//     setVotes([...votes, 0]); // Add a new vote count for the new option
//   };

//   const handleOptionChangeVotes = (e, index) => {
//     const newOptions = [...optionsvotes];
//     newOptions[index] = e.target.value; // Update the value of the option at the given index
//     setOptionsvotes(newOptions);
//   };

//   const handleVote = (index) => {
//     const newVotes = [...votes];
//     newVotes[index] += 1; // Increment the vote count for the option at the given index
//     setVotes(newVotes);
//   };

//   const handleSubmitVotes = () => {
//     // Logic to submit voting data to backend
//     const votingData = {
//       optionsvotes,
//       votes
//     };
//     setf(0)
//     console.log('Voting Data:', votingData);
//     // Example: Send votingData to backend API
//   };

//   return (
//     <div>
//       <div>
//         <h2>Create Survey</h2>
//         <label>Question:</label>
//         <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Enter your question" />

//         <label>Options:</label>
//         {options.map((option, index) => (
//           <div key={index}>
//             <input type="text" value={option} onChange={(e) => handleOptionChange(e, index)} placeholder={`Option ${index + 1}`} />
//           </div>
//         ))}
//         <button onClick={handleAddOption}>Add Option</button>
//         <button onClick={handleSubmitSurvey}>Submit Survey</button>
//       </div>
//       {/* ///////////// */}
//       <div>
//         {console.log(optionsvotes)}
//         {optionsvotes.length > 0 && (
//           <div>
//             <h2>Voting</h2>
//             <h2>{ }</h2>
//             {optionsvotes.map((option, index) => (
//               <div key={index}>
//                 <input type="text" value={option} onChange={(e) => handleOptionChangeVotes(e, index)} placeholder={`Option ${index + 1}`} />
//                 <button onClick={() => handleVote(index)}>Vote</button>
//                 <span>{votes[index]}</span> {/* Display the current vote count */}
//               </div>
//             ))}
//             <button onClick={handleSubmitVotes}>Submit Votes</button>
//           </div>
//         )}
//       </div>

//     </div>
//   )
// }

// export default About

import React, { useState, useEffect } from 'react';

function About() {
  const [question, setQuestion] = useState('');
  const [selectedOption, setSelectedOptions] = useState('');
  const [options, setOptions] = useState(['', '']); // Initial state with two empty options
  const [f, setf] = useState(0);
  const [votes, setVotes] = useState(Array(options.length).fill(0));

  const [voteque, setvoteque] = useState('');
  const [optionsvotes, setOptionsvotes] = useState([]); // Initial state with two empty options

  const handleAddOption = () => {
    setOptions([...options, '']); // Add a new empty option
  };

  const handleOptionChange = (e, index) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value; // Update the value of the option at the given index
    setOptions(newOptions);
  };

  const handleSubmitSurvey = () => {
    // Validate survey input
    if (!question || options.some(option => !option.trim())) {
      alert('Please enter both question and options.');
      return;
    }

    // Logic to submit survey data to backend
    const surveyData = {
      question,
      options: options.filter(option => option.trim()) // Remove empty options
    };
    setQuestion('');
    setOptions(['']);
    console.log('Survey Data:', surveyData);
    setf(1);
    // Example: Send surveyData to backend API
  };

  useEffect(() => {
    const callfun = () => {
      //fetch survet
    };

    if (f === 1) {
      callfun();
    }
  }, [f]);

  ///////////////////////////////////////////////////votings?////////////
  const handleAddOptionVote = () => {
    setOptionsvotes([...optionsvotes, '']); // Add a new empty option
    setVotes([...votes, 0]); // Add a new vote count for the new option
  };

  const handleOptionChangeVotes = (e, index) => {
    const newOptions = [...optionsvotes];
    newOptions[index] = e.target.value; // Update the value of the option at the given index
    setOptionsvotes(newOptions);
  };

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1; // Increment the vote count for the option at the given index
    setVotes(newVotes);
  };

  const handleSubmitVotes = () => {
    // Logic to submit voting data to backend
    const votingData = {
      optionsvotes,
      votes
    };
    setf(0);
    console.log('Voting Data:', votingData);
    // Example: Send votingData to backend API
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Create Survey</h2>
        <div className="mb-4">
          <label className="block mb-2">Question:</label>
          <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Enter your question" className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Options:</label>
          {options.map((option, index) => (
            <div key={index} className="mb-2">
              <input type="text" value={option} onChange={(e) => handleOptionChange(e, index)} placeholder={`Option ${index + 1}`} className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
          ))}
          <button onClick={handleAddOption} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Option</button>
          <button onClick={handleSubmitSurvey} className="bg-green-500 text-white px-4 py-2 rounded-md ml-4">Submit Survey</button>
        </div>
      </div>

      <div>
        {optionsvotes.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Voting</h2>
            {optionsvotes.map((option, index) => (
              <div key={index} className="mb-4">
                <input type="text" value={option} onChange={(e) => handleOptionChangeVotes(e, index)} placeholder={`Option ${index + 1}`} className="border border-gray-300 rounded-md p-2 mr-2" />
                <button onClick={() => handleVote(index)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Vote</button>
                <span className="ml-2">{votes[index]}</span> {/* Display the current vote count */}
              </div>
            ))}
            <button onClick={handleSubmitVotes} className="bg-green-500 text-white px-4 py-2 rounded-md">Submit Votes</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
