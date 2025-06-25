'use client' 

import React, { useState } from 'react'
// import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';

const RecordedDetails = () => {
   const params = useParams();
  const id = params.id
  console.log(id)

  const videoList = Array(4).fill({
  title: 'Introduction To Product Design',
  date: 'May 13, 2025',
  thumbnail: '/icons/FrameImg.png',
  videoUrl: '/videos/sample-video.mp4',
  description:
    'This course is an essential introduction to product design for professionals across various fields. Learn key UI/UX, graphic design, and marketing terms to improve collaboration with designers, developers, marketing team, and stakeholders. This course is an essential introduction to product design for professionals across various fields. Learn key UI/UX, graphic design, and marketing terms to improve collaboration with designers, developers, marketing team, and stakeholders. This course is an essential introduction to product design for professionals across various fields. Learn key UI/UX, graphic design, and marketing terms to improve collaboration with designers, developers, marketing team, and stakeholders. This course is an essential introduction to product design for professionals across various fields. Learn key UI/UX, graphic design, and marketing terms to improve collaboration with designers, developers, marketing team, and stakeholders. This course is an essential introduction to product design for professionals across various fields. Learn key UI/UX, graphic design, and marketing terms to improve collaboration with designers, developers, marketing team, and stakeholders. This course is an essential introduction to product design for professionals across various fields. Learn key UI/UX, graphic design, and marketing terms to improve collaboration with designers, developers, marketing team, and stakeholders.',
})

  const [selectedVideo, setSelectedVideo] = useState(videoList[0])
  const [readMore, setReadMore] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Video Player */}
      <div className="w-full rounded-xl overflow-hidden shadow-md mb-4">
        <video
          src={selectedVideo.videoUrl}
          controls
          className="w-full h-auto rounded-xl"
        />
      </div>

      {/* Title + Description */}
      <div className="bg-gray-50 p-4 rounded-md shadow-sm mb-10">
        <h2 className="text-xl font-semibold text-gray-800">
          {selectedVideo.title}
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          {readMore
            ? selectedVideo.description
            : selectedVideo.description.slice(0, 235) + '... '}
          <button
            onClick={() => setReadMore(!readMore)}
            className="text-orange-500 font-medium hover:underline"
          >
            {readMore ? 'Show less' : 'Read more'}
          </button>
        </p>
      </div>

      {/* More Videos */}
      <div>
        <h3 className="text-lg font-semibold mb-4">More Videos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {videoList.map((video, index) => (
            <div
              key={index}
              onClick={() => setSelectedVideo(video)}
              className="cursor-pointer bg-white rounded-xl shadow-sm p-3 hover:shadow-md transition"
            >
              <div className="relative w-full aspect-square sm:aspect-video bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg
                      className="w-6 h-6 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <h4 className="text-sm font-medium text-gray-800 line-clamp-2">
                  {video.title}
                </h4>
                <p className="text-xs text-gray-500">{video.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecordedDetails
