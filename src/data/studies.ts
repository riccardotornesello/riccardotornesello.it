import { Status } from './common';
import logoUnisalento from '../images/university/unisalento.png';
import logoPolito from '../images/university/polito.png';

export type StudyDetails = {
  title: string;
  status: Status;
  dateInfo?: string;
  description?: string;
  // TODO: school?: string;
  // TODO: location?: string;
  icon?: string;
};

export const studies: StudyDetails[] = [
  {
    title: "Master's degree program in computer engineering",
    status: Status.IN_PROGRESS,
    dateInfo: 'From 2021 to present',
    description: 'Turin Polytechnic\n🚧 Work in progress...',
    // school: 'Turin Polytechnic',
    // location: 'Location',
    icon: logoUnisalento.src,
  },
  {
    title: "Bachelor's degree in information engineering",
    status: Status.FINISHED,
    dateInfo: 'From 2018 to 2021',
    description: 'Salento University\n🚧 Work in progress...',
    // school: 'Salento University',
    // location: 'Location',
    icon: logoPolito.src,
  },
];
