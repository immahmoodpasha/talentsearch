// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
// import PostCard from '../components/PostCard.jsx'

// function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetchPosts();
//   }, []);
//   const fetchPosts = async () => {
//     const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`);
//     const data = await res.json();
//     setPosts(data);
//   };
//   return (
//     <div className="container mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Posts</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {posts.map((post) => (
//           <PostCard key={post._id} post={post} />
//         ))}
//       </div>
//     </div>

//   );
// }

// export default Home
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../components/PostCard.jsx';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`);
    const data = await res.json();
    setPosts(data);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Posts</h2>
      <div className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <div key={post._id} className="bg-white shadow-md rounded-md p-4">
            <PostCard post={post} />
            <div className="flex justify-between mt-4">
              <button className="flex items-center text-gray-600 hover:text-blue-500">
                <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9l-2-2-2 2m4 5v7m4 0v-7m-6 7V9"></path>
                </svg>
                Like
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-500">
                <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                Share
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-500">
                <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                Comment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
