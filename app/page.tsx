import CourseContent from "@/components/CourseContent";
import Footer from "@/components/Footer";
import Instructor from "@/components/Instructor";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Check, BookMarked } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="p-4 py-20 max-w-screen-2xl w-full m-auto">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="md:py-8">
            <h1 className="font-bold pb-2 md:text-3xl lg:text-4xl">
              Machine Learning System Design Interview
            </h1>
            <p className=" font-normal text-slate-500 text-sm md:text-lg">
              Ali Aminian · Staff Engineer at Adobe, Ex-Google
            </p>
          </div>
          <div className="flex text-xs text-slate-500 justify-between max-w-xs md:max-w-md md:text-sm">
            <span>11 Lessons</span>
            <span>100 Students</span>
            <span>Last Modified：2023.01.28</span>
          </div>
        </div>
        {/* Content Section */}
        <div className="my-8">
          <div className="lg:flex flex-[2] justify-between w-full">
            <div>
              <h3 className="flex items-center gap-2 text-lg md:text-xl font-medium my-4">
                <div className="bg-green-400 w-fit p-1 text-white rounded-full text-sm">
                  <Check size={16} />
                </div>
                YOU'LL LEARN
              </h3>
              <div className="flex flex-col gap-2 text-sm text-gray-700 md:text-base">
                <li>
                  A 7-step framework for solving any ML system design interview
                  questions.
                </li>
                <li>
                  An insider’s take on what interviewers really look for and
                  why.
                </li>
                <li>
                  10 real ML system design interview questions with detailed
                  solutions.
                </li>
                <li>
                  211 diagrams that visually explain how various systems work.
                </li>
              </div>
            </div>
            <div className="max-w-sm w-full flex-1">
              <div className="hidden lg:flex gap-2 items-center justify-between m-4">
                <div className="flex gap-1 items-center">
                  <Image
                    src={
                      "https://bytebytego.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fintro-logo.de67e63f.png&w=32&q=75"
                    }
                    alt="bytebytego"
                    height={20}
                    width={20}
                  />
                  <span className="font-medium">Annual Pass</span>
                </div>
                <span className="font-medium">₹1,999.00/year</span>
              </div>
              <div className="flex gap-1 justify-between w-full bg-white  lg:flex-col lg:relative fixed bottom-0 left-0 py-4 px-2">
                <div className="flex gap-1 lg:hidden">
                  <p>₹1,999.00/year</p>
                </div>
                <div className="flex gap-2 lg:flex-col lg:w-full">
                  <Button
                    className="bg-transparent border w-full border-green-500 text-green-500 hover:text-green-500 lg:capitalize"
                    variant={"outline"}
                  >
                    Preview
                  </Button>
                  <Button className="bg-green-500 text-white hover:bg-green-500 lg:capitalize">
                    Purchase
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fundamental Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between w-full gap-4">
          <div className="my-8 flex-[2]">
            <h3 className="flex items-center gap-2 text-lg md:text-xl font-medium my-4">
              <div className="bg-green-400 w-fit p-1 text-white rounded-full text-sm">
                <BookMarked size={16} />
              </div>
              LEARN THE FUNDAMENTALS
            </h3>
            <Image
              src={
                "https://bytebytego.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fml-newsfeed.04a90711.png&w=3840&q=75"
              }
              alt="fundamental"
              width={1000}
              height={500}
            />
            {/* Course Content */}
            <div className="">
              <CourseContent />
            </div>
          </div>
          <div className="flex-1 ">
            <Instructor />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
