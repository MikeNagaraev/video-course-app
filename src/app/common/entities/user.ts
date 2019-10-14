import { Initializable } from '../initializable';

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
}

export class User extends Initializable<User> implements IUser {
    public id: number;
    public firstName: string;
    public lastName: string;
}
