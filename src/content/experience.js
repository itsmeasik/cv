/* eslint max-len: "off" */

const experience = {
  title: 'Experience',
  icon: null,
  description: null,
  list: [
    {
      title: 'Senior Software Engineer',
      subtitle: 'Arnia',
      subtitleLink: 'https://www.arnia.com/',
      date: 'March 2018 - Present',
      tags: [
        'Azure', 'Functions', 'ACR', 'AKS', 'AVM', 'Cosmos', 'LUIS', 'DynamoDB', 'EC2', 'NodeJS', 'Kotlin', 'Terraform',
      ],
      description: [
        'Led team of 3 to create cluster based blockchain ledger platform. Developed features in NodeJS, Kotlin, NGiNX & ReactJS running on Azure VM & PostgresSQL with self-checkout driven cluster expansion via Terraform for customer nodes',
        'Delivered serverless platform digitizing tasks of multi-tiered foundation with 50+ clients from brainstorming journeys, wireframes to coding. Platform was written in NodeJS & ReactJS on AWS S3, Lambda, DynamoDB with complete CI/CD pipeline',
        'Managed stakeholders and developed Workplace bot as Level 1 support used by 250+ employees with NodeJS on Azure LUIS with AWS Lambda & DynamoDB. Added HR dashboard for human escalation, nominations & meeting room bookings',
        'Delivered product leveraging capacitive touch point stamp to streamline customer engagement at lounges with serverless NodeJS & ReactJS on Azure Functions & Storage'
      ]
    },
    {
      title: 'Cloud Software Engineer',
      subtitle: 'Cahootsy',
      date: 'July 2017 - March 2018',
      tags: [
        'lambda',
        'sqs',
        's3',
        'ecs',
        'nodejs',
        'elasticsearch',
        'etl',
        'nlp',
      ],
      description: [
        'Streamlined and replaced existing serial error prone five days long process by 90% through event driven ETL pipeline on ECS using ELK, SQS & S3 to provide fault tolerance & scalability of system. NLP datasets used to generate optimal targeted campaigns to reduce costs',
      ],
    },
    {
      title: 'Software Developer',
      subtitle: 'Citi',
      subtitleLink: 'http://citi.com',
      subtitleDetail: ' - Rates Pricing E-Trading Technology',
      date: 'September 2016 - July 2017',
      tags: [
        'java',
        'spring',
        'low-latency',
        'docker',
        'nodejs',
        'kubernetes',
      ],
      description: [
        'Consolidated streaming of pricing data to thousands of downstream systems by developing a real-time low latency asynchronous graph based distributed system in Java Spring that aggregates data from dozens of micro-services based on async events',
        'Implemented generic functional test generator for Cucumber BDD of strategic logic that reduced average testing and development time for global team by 65%',
        'Developed Dockerized NodeJS application to improve company wide standards. Used Kubernetes to scale based on global code builds to ETL data into ELK stack.',
      ],
    },
    {
      title: 'Software Engineer',
      subtitle: 'Citi',
      subtitleLink: 'http://citi.com',
      subtitleDetail: ' - Futures E-Trading Technology',
      date: 'September 2015 - September 2016',
      tags: [
        'java',
        'spring',
        'low-latency',
        'angularjs',
        'nodejs',
      ],
      description: [
        'Did fundamental architectural change to major project by replacing duplicate JSP pages with modular AngularJS & Mocha and flexible observer, decorator, adapter based Java server',
        'Played key role in managing, developing and deploying new critical business product using Java, AngularJS with daily Director meetings',
        'Established new standards on departmental level by developing Java & JavaScript services that I linked to all existing projects as dependency from common Futures repository',
        'Converted all Java/JS codebase to Unix cloud by refactoring to microservice paradigm',
      ],
    },
    {
      title: 'Software Engineer',
      subtitle: 'Nomura',
      tags: [
        'java',
        'spring',
      ],
      description: [
        'Reduced team load by 95% on majority of daily tasks via Python and Java automation'
      ],
      subtitleLink: 'http://nomura.com',
      subtitleDetail: ' - Web Services Technologies',
      date: 'June 2013 - June 2014',
    },
  ],
};

export default experience;
