import { Comment } from "./comment.model";

export interface IUser {
  firstName: string;
  lastName: string;
  dob: Date;
  isWorking: boolean;
  company: string;
  income: number;
  imagePath: string;
  votes: number;
  comments? : Array<Comment>
}
