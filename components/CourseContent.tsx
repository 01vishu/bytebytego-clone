"use client";
import { AppWindow, Lock } from "lucide-react";
const CourseContent = () => {
  const courseContent = [
    {
      name: "Introduction and Overview",
    },
    {
      name: "Visual Search System",
      isFree: true,
    },
    {
      name: "Google Street View Blurring System",
    },
    {
      name: "YouTube Video Search",
    },
    {
      name: "Harmful Content Detection",
    },
    {
      name: "Video Recommendation System",
    },
    {
      name: "Event Recommendation System",
    },
    {
      name: "Ad Click Prediction on Social Platforms",
    },
    {
      name: "Similar Listings on Vacation Rental Platforms",
    },
    {
      name: "Personalized News Feed",
    },
    {
      name: "People You May Know",
    },
  ];
  return (
    <div>
      <h3 className="flex items-center gap-2 text-lg md:text-xl font-medium py-4">
        <div className="bg-green-400 w-fit p-1 text-white rounded-full text-sm">
          <AppWindow size={16} />
        </div>
        Course Content
      </h3>
      <ol type="1" className="px-8">
        {courseContent.map((content) => (
          <li className="py-2" key={content.name}>
            <div className="flex items-center justify-between pl-4 ">
              <span>{content.name}</span>
              {content.isFree ? (
                <span className="text-black text-xs bg-yellow-300 border py-0.5 px-1 border-black">
                  Free
                </span>
              ) : (
                <Lock className="text-gray-400" size={20} />
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CourseContent;
