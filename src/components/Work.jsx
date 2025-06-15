import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2018,
    title: 'Frontend Developer – Andela',
    duration: '2 Years',
    details:
      'Worked on cross-functional teams to develop and maintain scalable React-based web applications for global clients.',
  },
  {
    year: 2020,
    title: 'Software Engineer – Interswitch',
    duration: '1.5 Years',
    details:
      'Built and optimized high-performance fintech dashboards with React, Redux, and REST APIs. Collaborated with backend teams on secure payment workflows.',
  },
  {
    year: 2022,
    title: 'Fullstack Developer – Paystack (Contract)',
    duration: '1 Year',
    details:
      'Led the front-end revamp of the merchant onboarding process, increasing conversion by 22%. Integrated PostgreSQL and Node.js REST APIs.',
  },
  {
    year: 2023,
    title: 'Frontend Engineer – Remote Freelancer',
    duration: 'Present',
    details:
      'Delivering freelance UI development projects for startups across Europe and Africa. Focus on React, Tailwind CSS, and responsive design best practices.',
  },
];

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details} 
        />
       ))}
    </div>
  )
}

export default Work