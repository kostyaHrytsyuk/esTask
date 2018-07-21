import {Fighter} from './fighter'

export class ImprovedFighter extends Fighter{
    doubleHit(enemy,point){
        point = point * 2;
        super.hit(enemy,point);
    }
}