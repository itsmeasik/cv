/* eslint max-len: "off" */

const projects = {
  title: 'Projects',
  icon: 'archive',
  description: null,
  list: [
    {
      title: 'Kortexo',
      subtitle: 'App',
      tags: [
        'typescript',
        'lambda',
        'api gateway',
        'ecs',
        'cognito',
        'cloudfront',
        's3',
        'flutter',
      ],
      description: [
        'Full stack platform to represent linked data with an oriented graph of any chosen subject matter for research & revision via browser or native mobile applications in Flutter',
        'Facebook Messenger, Slack integration for reminder notification alongside mobile Flutter app for revision and testing of knowledge',
        'Horizontally scalable through combined usage of AWS ECS, Lambda for micro-services leveraging Cognito, Cloudwatch, DynamoDB, SQS, CloudFront, S3',
        'Progressive Web App done in ReactJS for admins and Flutter Web for users leveraging Firebase',
      ],
    },
    {
      title: 'ReactJS Skillbars & ReactJS Scroll-Element',
      subtitle: 'https://www.npmjs.com/package/react-skillbars',
      subtitleLink: 'https://www.npmjs.com/package/react-skillbars',
      tags: [
        'reactjs',
        'typescript',
      ],
      description: [
        'Developed and published on NPM ReactJS components for skill-bars and scroll navigation',
        'TDD approach resulting in 100% test coverage and hundreds of downloads of modules',
      ],
    },
    {
      title: 'Terraform Modules',
      subtitle: 'https://registry.terraform.io/modules/crisboarna',
      subtitleLink: 'https://registry.terraform.io/modules/crisboarna',
      tags: [
        'terraform',
        'HCL'
      ],
      description: [
        'Created and published Terraform module for common serverless patterns to reduce code duplication',
      ],
    },
    {
      title: 'Crypto Tracker',
      subtitle: 'Mobile App',
      tags: [
        'flutter',
        'reactnative',
        'redux',
        'thunk',
      ],
      description: [
        'Created Flutter/ReactNative application for checking of all crypto coins with notifications',
      ],
    },
    {
      title: 'National Geographic Messenger Chat Bot',
      subtitle: 'http://m.me/natgeobot',
      subtitleLink: 'http://m.me/natgeobot',
      tags: [
        'typescript',
        'lambda',
        'api gateway',
        'nlp',
        'route53'
      ],
      description: [
        'Used DialogFlow for NLP processing and extraction of user intent',
        'Stores interaction data for conversational linking between sessions on MongoDB',
        'NodeJS AWS Lambda chat bot with latency regional load balancing routing via Route53',
      ],
    },
    {
      title: 'Augmented Reality Terminal',
      subtitle: 'University of Manchester',
      subtitleLink: 'http://www.cs.manchester.ac.uk/',
      tags: [
        'c++',
        'opencv',
        'computer vision',
        'sockets',
        'collision',
      ],
      description: [
        'Created software framework with OpenCV and C++ to provide advanced HCI by using hand gestures to manipulate digital artifacts with web camera and computer vision algorithmic techniques',
        'Implemented 3D environment through Irrlicht and C++ with networking and physics for engaging collaboration between multiple remote users in a synchronized environment'
      ],
    },
  ],
};

export default projects;
