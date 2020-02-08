import { User } from './user'; 
import { userData } from './userData';

export interface Widget {
    id: number
    name: string;
    data: User;
    service: string;
}