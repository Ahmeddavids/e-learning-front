import React from 'react'

const allCourses = Array(4).fill({
  title: 'Introduction To Product Design',
  date: 'May 13, 2025',
  thumbnail: '/icons/FrameImg.png', 
})

const MoreVideo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allCourses.map((course, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-3 cursor-pointer">
            <div className="relative w-full aspect-square sm:aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <img
                src={course.thumbnail}
                alt={course.title}
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
              <h3 className="font-medium text-sm sm:text-base text-gray-800">
                {course.title}
              </h3>
              <p className="text-xs text-gray-500">{course.date}</p>
            </div>
          </div>
        ))}
      </div>
  )
}

export default MoreVideo
