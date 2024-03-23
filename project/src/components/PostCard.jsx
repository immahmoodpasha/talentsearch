import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden mb-4">
       <img src={post.image} alt={post.title} className="w-full h-auto object-cover rounded-md" style={{ maxHeight: '400px',maxWidth: '900px' }} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{post.name}</h2>
        <p className="text-gray-700">{post.Thoughts}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Visit profile
        </button>
      </div>
    </div>
  );
};

export default PostCard;
