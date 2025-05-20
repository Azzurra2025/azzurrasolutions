import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'healthcare-analytics',
    title: 'Healthcare Analytics Platform',
    client: 'Regional Healthcare Network',
    challenge: 'The client needed to consolidate patient data across 12 facilities and implement predictive analytics to improve care outcomes while ensuring HIPAA compliance.',
    solution: 'We developed a secure, cloud-based analytics platform with custom dashboards, predictive models for patient readmission risk, and automated compliance reporting.',
    results: 'Reduced readmission rates by 23%, improved resource allocation, and saved an estimated $2.7M annually through operational efficiencies.',
    image: 'https://images.pexels.com/photos/7578816/pexels-photo-7578816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['AWS', 'Python', 'TensorFlow', 'React', 'Node.js'],
  },
  {
    id: 'fintech-transformation',
    title: 'Digital Banking Transformation',
    client: 'Community Credit Union',
    challenge: 'An established credit union with legacy systems needed to modernize their digital banking experience to compete with online-only challengers.',
    solution: 'We implemented a comprehensive digital transformation, including mobile-first banking applications, API-driven architecture, and a secure cloud migration strategy.',
    results: 'Increased mobile banking adoption by 78%, reduced transaction costs by 62%, and expanded digital customer acquisition channels.',
    image: 'https://images.pexels.com/photos/7681/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Azure', 'Microservices', 'React Native', '.NET Core', 'Kubernetes'],
  },
  {
    id: 'manufacturing-iot',
    title: 'IoT-Powered Manufacturing Intelligence',
    client: 'Global Manufacturing Company',
    challenge: 'The client sought to reduce downtime and improve quality control across multiple manufacturing plants through better data collection and analysis.',
    solution: 'We designed and implemented an Industrial IoT solution with sensors on critical equipment, real-time monitoring dashboards, and predictive maintenance algorithms.',
    results: 'Reduced unplanned downtime by 35%, improved quality control metrics by 28%, and enabled data-driven decision making across the organization.',
    image: 'https://images.pexels.com/photos/3816011/pexels-photo-3816011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['IoT Edge', 'Azure IoT Hub', 'Power BI', 'Machine Learning', 'Time Series Analysis'],
  },
  {
    id: 'retail-ecommerce',
    title: 'Omnichannel Retail Platform',
    client: 'National Retail Chain',
    challenge: 'The retailer needed to unify their online and in-store experiences while modernizing their e-commerce platform to handle seasonal traffic spikes.',
    solution: 'We built a scalable e-commerce platform with real-time inventory tracking, personalized recommendations, and seamless integration with their POS systems.',
    results: 'Achieved 99.99% uptime during peak seasons, increased online conversion rates by 43%, and enabled true omnichannel capabilities like buy-online-pickup-in-store.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Google Cloud', 'GraphQL', 'React', 'Node.js', 'MongoDB', 'Redis'],
  },
];