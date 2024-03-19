import React from 'react';

const VideoComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <video className="max-w-full" controls>
        <source src="https://www.pexels.com/video/planet-saturn-8047733/.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
