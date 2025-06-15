import React from 'react'

const ProjectItem = ({ img, title, description, link }) => (
  <div className="shadow-md rounded-lg overflow-hidden">
    <img src={img} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  </div>
);

export default ProjectItem