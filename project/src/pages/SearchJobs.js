import React, { useState, useEffect } from 'react';

function SearchJobs() {
    // Define state to store the fetched jobs
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = () => {
            fetch(`${process.env.REACT_APP_SERVER_DOMIN}/jobss`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`Failed to fetch jobs: ${res.status}`);
                    }
                    return res.json();
                })
                .then(data => {
                    // Update the jobs state with the fetched data
                    setJobs(data);
                })
                .catch(error => {
                    // If an error occurs during the fetch request, log the error
                    console.error('Error fetching jobs:', error);
                });
        };
    
        // Call the fetchJobs function when the component mounts
        fetchJobs();
    }, []);
    
    useEffect(()=>{
        console.log(jobs)
    },[jobs])

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Search Jobs</h2>
            {/* Render the fetched jobs */}
            <div className="grid grid-cols-1 gap-4">
                {jobs.map((job, index) => (
                    <div key={index} className="bg-gray-200 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">{job.Role}</h3>
                        <p className="text-gray-600 mb-2">Salary: {job.Salary}</p>
                        <p className="text-gray-600 mb-2">Location: {job.Location}</p>
                        <p className="text-gray-600 mb-4">Description: {job.Description}</p>
                        <a href={`mailto:${job.Email}`} className="text-blue-500 hover:underline">Contact: {job.Email}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchJobs;
