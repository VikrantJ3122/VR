export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: 'nexonica',
    role: 'Software Development Intern',
    company: 'Nexonica Systems Pvt. Ltd.',
    period: 'January 2026',
    description: [
      'Developed a face detection and recognition system using Python and OpenCV for computer vision and image processing.',
      'Collaborated in an Agile development environment, contributing to sprint planning and iterative feature delivery.',
    ],
  },
];
