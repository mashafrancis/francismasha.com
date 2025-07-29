import type { Experience } from '../types/experiences';

export const EXPERIENCES: Experience[] = [
  {
    id: 'safaricom',
    companyName: 'Safaricom PLC',
    companyLogo:
      'https://assets.francismasha.dev/images/companies/safaricom.png',
    positions: [
      {
        id: '20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e',
        title: 'Senior Software Engineer',
        employmentPeriod: {
          start: '08.2023',
        },
        employmentType: 'Full-time',
        icon: 'code',
        description: `
- Architect and implement a scalable APM platform using OpenTelemetry, enabling end-to-end distributed tracing across microservices architectures. 
- Design and develop custom instrumentation for various programming languages and frameworks to enhance observability coverage. 
- Optimize data ingestion and processing pipelines to handle high-volume telemetry data efficiently. 
- Integrated Elasticsearch, Logstash, and Kibana (ELK) stack to existing servers and applications for real-time log aggregation, analysis, and querying, improving observability
- Develop and maintain core features to enhance functionality and user experience.
- Ensure UI/UX consistency and adherence to standards.
- Implement robust frontend solutions for web and mobile platforms.
- Analyze technical capabilities and provide optimal solutions.`,
        skills: [
          'TypeScript',
          'Next.js',
          'Opentelemetry',
          'Go',
          'Socket.IO',
          'Tailwind CSS',
          'Agile',
          'Teamwork',
          'Research',
          'Problem-solving',
        ],
        isExpanded: true,
      },
      {
        id: 'cedd7adb-4118-4085-9983-ae00530b49e2',
        title: 'Site Reliability Engineer',
        employmentPeriod: {
          start: '12.2020',
          end: '08.2023',
        },
        employmentType: 'Full-time',
        icon: 'code',
        description: `- Developed a reporting portal for sending scheduled automated reports from the Dynatrace APM tool to relevant departments.
- Integrated Dynatrace monitoring and observability to 2000+ servers and 100+ applications to reduce downtime via proactive alerts and correlation of services.
- Integrated Elasticsearch, Logstash, and Kibana (ELK) stack to existing servers and applications for real-time log aggregation, analysis, and querying, improving observability
- Developed and maintained CI/CD pipelines for code deployment using Jenkins 
- Provided software-related operations support, including managing level two and level three incidents and problem management for financial services.`,
        skills: ['Observability', 'ELK Stack', 'Dynatrace'],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: 'igov',
    companyName: 'iGov Africa',
    companyLogo:
      'https://assets.francismasha.dev/images/companies/igov-africa.jpeg',
    positions: [
      {
        id: '30d3a9fb-021d-452a-9d27-83655369b4b9',
        title: 'Software Engineer',
        employmentPeriod: {
          start: '03.2020',
          end: '12.2020',
        },
        employmentType: 'Contract',
        icon: 'code',
        description: `- Developed and maintained an eCommerce platform for applications listed and submitted by developers.
- Integrated google cloud functions into the system used for user authentication and sending emails.`,
        skills: [
          'Next.js',
          'Strapi',
          'Auth0',
          'Docker',
          'NGINX',
          'Google Cloud',
          'Docusaurus',
          'Extension',
          'Research',
          'Project Management',
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: 'andela',
    companyName: 'Andela',
    companyLogo: 'https://assets.francismasha.dev/images/companies/andela.svg',
    positions: [
      {
        id: '13bd34c3-db84-4fad-8132-a6c89a42957e',
        title: 'Software Test Engineer',
        employmentPeriod: {
          start: '08.2019',
          end: '12.2019',
        },
        employmentType: 'Contract',
        description: `Contract Project: [Lightform](https://lightform.com/)
- Improved test coverage by 15% and improved code quality by refactoring the libraries and covering edge cases for their core modules.
- Optimized deployment for staging and production.`,
        icon: 'code',
        skills: [
          'Test driven development',
          'C++',
          'QT Creator',
          'Agile',
          'Teamwork',
          'Research',
        ],
        isExpanded: true,
      },
      {
        id: '3e831244-8d8c-41e2-b2ce-7f3946956afd',
        title: 'Software Developer Apprentice',
        employmentPeriod: {
          start: '06.2018',
          end: '09.2019',
        },
        employmentType: 'Full-time',
        description: `In-house Project: [Activo](https://andela.com)
- Developed an asset management tool that streamlines the process of storing, allocating, maintaining, and disposing of assets owned by Andela.
- Developed new frontend features such as hotdesk management, maintenance scheduling, and stock management.
- Improved accuracy, coverage, and speed of automated tests
- Integrated APIs with the Backend Team to enhance functionality.`,
        icon: 'code',
        skills: [
          'React',
          'Redux',
          'Storybook',
          'Django',
          'Agile',
          'Teamwork',
          'Research',
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: 'ect',
    companyName: 'Eastlands College of Technology',
    positions: [
      {
        id: 'f0becfba-057d-40db-b252-739e1654faa1',
        title: 'Technical Trainer (Electronics Mechanic Engineering)',
        employmentPeriod: {
          start: '2016',
          end: '2018',
        },
        employmentType: 'Full-time',
        description: `- Taught students how to use a variety of electronic devices, including: circuit boards, wiring and microcontrollers.
- Repair technical faults in electronic devices, laptops and mobile devices.
- Created learning materials for students to learn about electronics and hardware programming.`,
        icon: 'code',
        skills: ['Electronics'],
      },
    ],
  },
  {
    id: 'education',
    companyName: 'Education',
    positions: [
      {
        id: 'c47f5903-88ae-4512-8a50-0b91b0cf99b6',
        title: 'Egerton University',
        employmentPeriod: {
          start: '08.2010',
          end: '2015',
        },
        icon: 'education',
        description: `- Graduated with a Bachelor's degree in Electrical and Control Engineering.
`,
        skills: [
          'Electronics',
          'Circuit Design',
          'Control systems',
          'Data Structures',
          'Algorithms',
          'Matlab',
          'C++',
          'Advanced Databases',
          'Systems Design',
          'Distributed Systems',
          'Software Engineering',
          'Self-learning',
          'Teamwork',
          'Presentation',
        ],
      },
    ],
  },
];
