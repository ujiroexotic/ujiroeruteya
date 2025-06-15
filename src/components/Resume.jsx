import React from "react";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <div
      id="resume"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 flex flex-col items-center"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Resume</h1>

      <p className="text-center text-gray-600 mt-6 max-w-[700px]">
        Download my resume to learn more about my experience, skills, and
        qualifications.
      </p>

      <a
        href="Ujiro's Resume-21.pdf"
        download
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#001b5e] text-white rounded hover:bg-[#003a9f] transition"
      >
        <FaDownload />
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
