"use client";

import Image from "next/image";

const Instructor = () => {
  const instructors = [
    {
      name: "Ali Aminian",
      image:
        "https://bytebytego.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor-profile2.02f67d2d.png&w=64&q=75",
      title: "Staff Engineer at Adobe, Ex-Google",
      description:
        "Ali Aminian is a staff machine learning engineer at Adobe, with expertise in machine learning and large-scale distributed systems. He previously worked at Google, where he helped build and deploy machine learning systems at scale. Besides his work at Adobe, he enjoys teaching machine learning to students and professionals.",
    },
    {
      name: "Alex Xu",
      image:
        "https://bytebytego.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam-member-1.6538b9ff.png&w=64&q=75",
      title: "Founder of ByteByteGo, Ex-Twitter",
      description:
        "Alex Xu is the CEO and founder of ByteByteGo. His book, System Design Interview - An Insider’s Guide, is an Amazon bestseller, which has been translated into six languages. He has worked at Twitter, Apple, and Zynga.",
    },
  ];
  return (
    <div className="max-w-sm w-full flex-1">
      <h3 className="font-medium text-lg py-4">Instructor</h3>
      {instructors.map((instructor) => (
        <div className="flex flex-col gap-4" key={instructor.name}>
          <div className="flex items-center gap-2">
            <Image
              src={instructor.image}
              height={70}
              width={70}
              alt={instructor.name}
              className="rounded-md bg-contain object-cover w-20 h-20"
            />
            <div className="flex flex-col gap-1">
              <span className="font-medium">{instructor.name}</span>
              <span className="text-sm text-gray-500">{instructor.title}</span>
            </div>
          </div>
          <div className="mb-4 text-sm">{instructor.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Instructor;
