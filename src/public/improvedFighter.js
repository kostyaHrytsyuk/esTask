import {Fighter} from './fighter'

export class ImprovedFighter extends Fighter{
    doubleHit(enemy,point = 5){
        point = point * 2;
        super.hit(enemy,point);
    }
}