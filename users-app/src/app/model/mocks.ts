import { IUser } from './user.model';

export const USER_DATA: IUser = {
  firstName: 'bill',
  lastName: 'gates',
  dob: new Date('Dec 21, 1965'),
  isWorking: true,
  company: 'Microsoft',
  income: 50000,
  imagePath: './assets/images/bill.jpg',
  votes: 120,
};
