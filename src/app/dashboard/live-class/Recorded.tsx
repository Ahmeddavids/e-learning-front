'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const allCourses = Array(18).fill({
  id: "1",
  title: 'Introduction To Product Design',
  date: 'May 13, 2025',
  thumbnail: '/icons/FrameImg.png', 
})

const ITEMS_PER_PAGE_OPTIONS = [5, 8, 12]

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(8)

  const totalPages = Math.ceil(allCourses.length / itemsPerPage)

  const paginatedCourses = allCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Search for a course"
          className="w-[30%] border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        />
        <button className="bg-[#1E3A8A] text-white px-4 py-2 rounded-md">➔</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedCourses.map((course, index) => (
          <Link href={`/dashboard/live-class/${course.id}`} key={index}>
              <div className="bg-white rounded-xl shadow-sm p-3 cursor-pointer">
            <div className="relative w-full aspect-square sm:aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <Image
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
          </Link>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
        <div className="flex items-center gap-2">
          <select
            className="border border-gray-300 rounded-md px-2 py-1 text-sm"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(parseInt(e.target.value))
              setCurrentPage(1)
            }}
          >
            {ITEMS_PER_PAGE_OPTIONS.map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
          <span className="text-sm text-gray-600">items per page</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-2 py-1 disabled:opacity-30"
          >
            &laquo;
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-2 py-1 disabled:opacity-30"
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-2 py-1 disabled:opacity-30"
          >
            &gt;
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-2 py-1 disabled:opacity-30"
          >
            &raquo;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
