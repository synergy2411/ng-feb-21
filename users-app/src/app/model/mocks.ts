import { IUser } from './user.model';

export const USER_DATA: Array<IUser> = [{
  firstName: 'bill',
  lastName: 'gates',
  dob: new Date('Dec 21, 1965'),
  isWorking: true,
  company: 'Microsoft',
  income: 50000,
  imagePath: './assets/images/bill.jpg',
  votes: 120,
},{
  firstName: 'steve',
  lastName: 'jobs',
  dob: new Date('Jan 1, 1965'),
  isWorking: false,
  company: 'Apple',
  income: 0,
  imagePath: './assets/images/steve.jpg',
  votes: 180,
},{
  firstName: 'tim b.',
  lastName: 'lee',
  dob: new Date('Aug 5, 1965'),
  isWorking: true,
  company: 'World Wide Web',
  income: 30000,
  imagePath: './assets/images/tim.jpg',
  votes: 90,
}];
