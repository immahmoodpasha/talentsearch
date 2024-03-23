import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../components/PostCard.jsx';

function Home() {
  const [posts, setPosts] = useState([]);
  const [following, setFollowing] = useState({});
  const [showCommentBox, setShowCommentBox] = useState({});

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`);
      const data = await res.json();
      const followingState = {};
      const commentBoxState = {};
      data.forEach(post => {
        followingState[post._id] = false;
        commentBoxState[post._id] = false;
      });
      setFollowing(followingState);
      setPosts(data);
      setShowCommentBox(commentBoxState);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleFollow = (postId) => {
    setFollowing(prevState => ({
      ...prevState,
      [postId]: !prevState[postId]
    }));
  };

  const toggleCommentBox = (postId) => {
    setShowCommentBox(prevState => ({
      ...prevState,
      [postId]: !prevState[postId]
    }));
  };

  return (
    <div className="container mx-auto">
      {/* <h2 className="text-2xl font-semibold mb-4 mx-auto">Posts</h2> */}
      <div className="grid grid-cols-1 gap-4">
        <div className="mx-auto" style={{ width: '60%' }}>
          {posts.map((post, index) => (
            <div key={post._id} className="bg-white shadow-md rounded-md p-4 relative" style={{ paddingTop: '40px', marginBottom: '20px' }}>
              <div className="text-bold absolute top-0 left-0 bg-gray-200 px-2 py-1 rounded-md">
                 {post.price}
              </div>
              <button
                className={`absolute top-0 right-0 bg-blue-500 text-white rounded-md px-3 py-1 ${following[post._id] ? 'bg-gray-500' : ''}`}
                onClick={() => handleFollow(post._id)}
              >
                {following[post._id] ? 'Following' : 'Follow'}
              </button>
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
                <button className="flex items-center text-gray-600 hover:text-blue-500" onClick={() => toggleCommentBox(post._id)}>
                  <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  Comment
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-500" onClick={() => alert('Request sent to user')}>
  <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>
  Collaborate
</button>
              </div>
              {showCommentBox[post._id] && (
                <div className="bg-gray-100 p-4 rounded mt-4">
                  <textarea className="w-full p-2 rounded border border-gray-300" rows="3" placeholder="Write a comment..." />
                  <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Post Comment</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
