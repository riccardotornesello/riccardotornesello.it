import { TechnologyName } from './technologies';
import { Status } from './common';

export type Experience = {
  title: string;
  status: Status;
  fromDate?: string;
  toDate?: string;
  description?: string;
  company?: string;
  location?: string;
  technologies?: TechnologyName[];
};

export const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    status: Status.IN_PROGRESS,
    fromDate: '2019-01-01',
    toDate: '2020-01-01',
    description: 'I did some stuff',
    company: 'Company',
    location: 'Location',
    technologies: [
      TechnologyName.REACT,
      TechnologyName.TYPESCRIPT,
      TechnologyName.KUBERNETES,
    ],
  },
  {
    title: 'Software Engineer',
    status: Status.FINISHED,
    fromDate: '2019-01-01',
    toDate: '2020-01-01',
    description: 'I did some stuff',
    company: 'Company',
    location: 'Location',
    technologies: [TechnologyName.PYTHON, TechnologyName.DOCKER],
  },
  {
    title: 'Software Engineer',
    status: Status.FINISHED,
    fromDate: '2019-01-01',
    toDate: '2020-01-01',
    description: 'I did some stuff',
    company: 'Company',
    location: 'Location',
    technologies: [TechnologyName.PYTHON, TechnologyName.DOCKER],
  },
  {
    title: 'Software Engineer',
    status: Status.FINISHED,
    fromDate: '2019-01-01',
    toDate: '2020-01-01',
    description: 'I did some stuff',
    company: 'Company',
    location: 'Location',
    technologies: [TechnologyName.PYTHON, TechnologyName.DOCKER],
  },
];
