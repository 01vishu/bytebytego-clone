"use client";

import { MessageCircleIcon, Pen, PersonStanding } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full py-8 mb-20">
      <div className="">
        <div className="px-4 grid grid-cols-2 gap-2 md:grid-cols-3">
          <div className="text-white border border-white rounded-sm flex items-center gap-2 w-fit p-3">
            <Pen />
            <span>Become a Contributor</span>
          </div>
          <div className="text-white border border-white rounded-sm flex items-center gap-2 w-fit p-3">
            <PersonStanding />
            <span>Become a Affilate</span>
          </div>
          <div className="text-white border border-white rounded-sm flex items-center gap-2 w-fit p-3">
            <MessageCircleIcon />
            <span>Suggest a New Topic</span>
          </div>
        </div>
      </div>
      <div className="my-8 flex flex-col">
        <Button variant={"link"} className="text-white">
          Our Services
        </Button>
        <Button variant={"link"} className="text-white">
          Privacy Policy
        </Button>
        <Button variant={"link"} className="text-white">
          Terms of Services
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
