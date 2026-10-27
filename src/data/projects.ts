export interface Project {
  id: string;
  title: string;
  fullTitle: string;
  shortDescription: string;
  description: string;
  category: string[];
  technologies: string[];
  features?: string[];
  featured: boolean;
  github: string | null;
  demo: string | null;
  caseStudy: boolean;
  achievement?: string;
}

export const projects: Project[] = [
  {
    id: 'agrivision',
    title: 'AgriVision',
    fullTitle: 'AgriVision – Farmer-Buyer Digital Marketplace',
    shortDescription: 'Designed a digital marketplace concept to connect farmers directly with buyers and reduce dependency on middlemen.',
    description: 'Designed a digital marketplace concept to connect farmers directly with buyers and reduce dependency on middlemen. Defined farmer listings for crop details, quantity, location, and expected price, alongside buyer requirement posts. Focused on improving communication, product discovery, and market accessibility through a digital agricultural platform.',
    category: ['Web', 'Full Stack'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'REST APIs', 'MySQL'],
    features: [
      'Digital marketplace to connect farmers directly with buyers, eliminating middlemen',
      'Farmer listings for crop details, quantity, location, and expected price',
      'Buyer requirement posts to specify crop needs and procurement criteria',
      'Communication and product discovery modules for seamless trade',
      'Market accessibility tools improving reach for local agricultural producers',
    ],
    featured: true,
    github: 'https://github.com/riddhigodse',
    demo: null,
    caseStudy: true,
  },
  {
    id: 'netguard-ai',
    title: 'NETGUARD AI',
    fullTitle: 'NETGUARD AI – Cybersecurity & Network Monitoring Platform',
    shortDescription: 'A Java-based network monitoring application using Pcap4J to capture and inspect network packets for traffic analysis.',
    description: 'Developed a Java-based network monitoring application using Pcap4J to capture and inspect network packets for traffic analysis. Analyzed packet headers and protocol information to understand network communication patterns and support troubleshooting. Applied computer networking and cybersecurity concepts to packet inspection, traffic monitoring, and network analysis.',
    category: ['Java', 'Cybersecurity'],
    technologies: ['Java', 'Pcap4J'],
    features: [
      'Java-based live packet capture and inspection using Pcap4J',
      'Packet header and protocol analysis for network communication pattern understanding',
      'Cybersecurity-oriented traffic monitoring and anomaly detection',
      'Network troubleshooting support through detailed packet-level inspection',
    ],
    featured: true,
    github: 'https://github.com/riddhigodse/NETGUARD-AI-Cybersecurity-Platform',
    demo: null,
    caseStudy: true,
  },
  {
    id: 'face-detection',
    title: 'Face Detection & Recognition System',
    fullTitle: 'Face Detection and Recognition System',
    shortDescription: 'Developed a face detection and recognition system using Python and OpenCV for image processing and computer vision.',
    description: 'Developed a face detection and recognition system using Python and OpenCV for image processing and computer vision. Applied image-processing techniques to detect faces from images or camera input and support face identification.',
    category: ['Python', 'Computer Vision'],
    technologies: ['Python', 'OpenCV'],
    features: [
      'Real-time face detection from images and live camera input using OpenCV',
      'Image-processing pipeline for preprocessing and feature extraction',
      'Face identification and recognition algorithms for person verification',
    ],
    featured: false,
    github: 'https://github.com/riddhigodse',
    demo: null,
    caseStudy: false,
  },
];

export const projectCategories = ['All', 'Web', 'Java', 'Python', 'Cybersecurity', 'Computer Vision', 'Full Stack'];
