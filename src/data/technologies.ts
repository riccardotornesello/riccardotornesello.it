export type Technology = {
  name: string;
  icon: string;
  color: string;
};

export enum TechnologyName {
  REACT = 'REACT',
  TYPESCRIPT = 'TYPESCRIPT',
  PYTHON = 'PYTHON',
  NODE_JS = 'NODE_JS',
  JAVASCRIPT = 'JAVASCRIPT',
  HTML = 'HTML',
  CSS = 'CSS',
  LINUX = 'LINUX',
  GIT = 'GIT',
  DOCKER = 'DOCKER',
  KUBERNETES = 'KUBERNETES',
  ANSIBLE = 'ANSIBLE',
  NOT_FINISHED = 'NOT_FINISHED',
}

export const technologies: Record<TechnologyName, Technology> = {
  [TechnologyName.REACT]: {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61dafb',
  },
  [TechnologyName.TYPESCRIPT]: {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: '#3178c6',
  },
  [TechnologyName.PYTHON]: {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: '#3776ab',
  },
  [TechnologyName.NODE_JS]: {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: '#339933',
  },
  [TechnologyName.JAVASCRIPT]: {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#f7df1e',
  },
  [TechnologyName.HTML]: {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: '#e34c26',
  },
  [TechnologyName.CSS]: {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    color: '#1572b6',
  },
  [TechnologyName.LINUX]: {
    name: 'Linux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    color: '#f2f2f2',
  },
  [TechnologyName.GIT]: {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: '#f14e32',
  },
  [TechnologyName.DOCKER]: {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    color: '#2496ed',
  },
  [TechnologyName.KUBERNETES]: {
    name: 'Kubernetes',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    color: '#326ce5',
  },
  [TechnologyName.ANSIBLE]: {
    name: 'Ansible',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg',
    color: '#000000',
  },
  [TechnologyName.NOT_FINISHED]: {
    name: 'Publish an unfinished portfolio',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61dafb',
  },
};
