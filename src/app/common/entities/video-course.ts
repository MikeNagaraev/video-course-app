import { Initializable } from '../initializable';

export interface IVideoCourse {
    id: number;
    title: string;
    dateCreated: Date;
    duration: number;
    description: string;
}

export class VideoCourse extends Initializable<VideoCourse> implements IVideoCourse {
    public id: number;
    public title: string;
    public dateCreated: Date;
    public duration: number;
    public description: string;
}
