import { TechnologyName } from './technologies';
import { Status } from './common';

export type Experience = {
  title: string;
  status: Status;
  dateInfo?: string;
  description?: string;
  // TODO: company?: string;
  // TODO: location?: string;
  technologies?: TechnologyName[];
};

export const experiences: Experience[] = [
  {
    title: 'Backend developer and DevOps Engineer',
    status: Status.IN_PROGRESS,
    dateInfo: 'From 2019 to present',
    description: '🚧 Work in progress...',
    // company: 'Company',
    // location: 'Location',
    technologies: [
      TechnologyName.PYTHON,
    ],
  },
];
