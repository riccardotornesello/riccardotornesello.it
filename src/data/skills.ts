import { TechnologyName } from './technologies';

export type Skill = {
  name: TechnologyName;
  level: number;
  improving?: boolean;
};

export const skills: Skill[] = [
  {
    name: TechnologyName.NOT_FINISHED,
    level: 5,
  },
];
