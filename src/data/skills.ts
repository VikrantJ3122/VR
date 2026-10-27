export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  descriptor: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', descriptor: 'Core Java • OOP • Collections' },
      { name: 'Python', descriptor: 'Basic Python • Scripting • Automation' },
      { name: 'JavaScript', descriptor: 'Web Interactivity • ES6+' },
      { name: 'SQL', descriptor: 'Queries • Relational Models' },
      { name: 'HTML', descriptor: 'Markup • Semantic Structure' },
      { name: 'CSS', descriptor: 'Styling • Layouts' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Spring Boot', descriptor: 'Java Backend Framework' },
      { name: 'React', descriptor: 'Component-Based UI Development' },
      { name: 'OpenCV', descriptor: 'Computer Vision & Image Processing' },
      { name: 'Pcap4J', descriptor: 'Network Packet Capture & Inspection' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', descriptor: 'Relational Database' },
      { name: 'PostgreSQL', descriptor: 'Relational Database' },
      { name: 'MongoDB', descriptor: 'NoSQL Document Database' },
    ],
  },
  {
    title: 'Core Computer Science',
    skills: [
      { name: 'Data Structures & Algorithms', descriptor: 'Problem Solving • DSA' },
      { name: 'Object-Oriented Programming', descriptor: 'Design Principles • Patterns' },
      { name: 'DBMS', descriptor: 'Database Theory & Management' },
      { name: 'Computer Networks', descriptor: 'Protocols • TCP/IP • Networking' },
    ],
  },
  {
    title: 'Networking & Cloud',
    skills: [
      { name: 'Packet Capture and Analysis', descriptor: 'Pcap4J • Traffic Inspection' },
      { name: 'REST APIs', descriptor: 'API Design & Integration' },
      { name: 'AWS Cloud Fundamentals', descriptor: 'Basic Cloud Concepts' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', descriptor: 'Version Control' },
      { name: 'GitHub', descriptor: 'Collaboration & Repositories' },
      { name: 'IntelliJ IDEA', descriptor: 'Java Development IDE' },
      { name: 'VS Code', descriptor: 'Lightweight Code Editor' },
      { name: 'Postman', descriptor: 'API Testing & Debugging' },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', descriptor: 'Analytical Approach & DSA' },
      { name: 'Teamwork', descriptor: 'Agile Collaboration' },
      { name: 'Communication', descriptor: 'Cross-functional Collaboration' },
      { name: 'Adaptability', descriptor: 'Quick Learner & Agile Mindset' },
      { name: 'Critical Thinking', descriptor: 'Logical Reasoning & Strategy' },
    ],
  },
];
