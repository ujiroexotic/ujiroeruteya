import React from 'react';
import ProjectItem from './ProjectItem';
import BiztaxImg from '../assets/biztax.png';
import MetricjetImg from '../assets/metricjet.png';
import TrackdemyImg from '../assets/trackdemy.png';
import VoltstoreImg from '../assets/voltstore.png';

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-8 text-gray-600 max-w-[700px] mx-auto">
        Here are some of the real-world and client-based projects I've worked on, covering frontend frameworks, API integration, dashboards, and responsive UI development.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={BiztaxImg}
          title="BizTax – Tax Filing Dashboard"
          description="A modern web dashboard for freelancers and small businesses to file taxes, built with React, Redux, and Chart.js."
          link="https://biztax.vercel.app/"
        />
        <ProjectItem
          img={MetricjetImg}
          title="MetricJet – Data Analytics Tool"
          description="A sleek dashboard for real-time analytics, designed for startups to monitor product KPIs. Built with React + Recharts + Tailwind."
          link="https://metricjet.netlify.app/"
        />
        <ProjectItem
          img={TrackdemyImg}
          title="Trackdemy – Student Progress Tracker"
          description="An academic progress management app for schools, using React on frontend and Firebase backend. Role-based access included."
          link="https://trackdemy.web.app/"
        />
        <ProjectItem
          img={VoltstoreImg}
          title="VoltStore – E-Commerce Platform"
          description="A fully functional e-commerce web app featuring product browsing, cart system, and user authentication. Tech: React, Node, PostgreSQL."
          /* link="https://voltstore.netlify.app/" */
        />
      </div>
    </div>
  );
};

export default Projects;
