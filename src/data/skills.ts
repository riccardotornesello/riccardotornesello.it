import { TechnologyName } from './technologies';

export type Skill = {
  name: TechnologyName;
  level: number;
  improving?: boolean;
};

export const skills: Skill[] = [
  {
    name: TechnologyName.REACT,
    level: 2,
  },
  {
    name: TechnologyName.TYPESCRIPT,
    level: 4,
    improving: true,
  },
  {
    name: TechnologyName.REACT,
    level: 2,
  },
  {
    name: TechnologyName.TYPESCRIPT,
    level: 4,
    improving: true,
  },
];
