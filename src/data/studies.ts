import { Status } from './common';
import logoUnisalento from '../images/university/unisalento.png';
import logoPolito from '../images/university/polito.png';

export type StudyDetails = {
  title: string;
  status: Status;
  fromDate?: string;
  toDate?: string;
  description?: string;
  school?: string;
  location?: string;
  icon?: string;
};

export const studies: StudyDetails[] = [
  {
    title: 'Bachelor of Science in Computer Science',
    status: Status.IN_PROGRESS,
    fromDate: '2015-01-01',
    toDate: '2019-01-01',
    description: 'I did some stuff',
    school: 'University',
    location: 'Location',
    icon: logoUnisalento,
  },
  {
    title: 'High School Diploma',
    status: Status.FINISHED,
    fromDate: '2011-01-01',
    toDate: '2015-01-01',
    description: 'I did some stuff',
    school: 'High School',
    location: 'Location',
    icon: logoPolito,
  },
];
