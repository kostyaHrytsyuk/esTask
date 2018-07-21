import {Fighter} from './fighter'
import {ImprovedFighter} from './improvedFighter'
import {fight} from './fight'

// create two instances
let fighter = new Fighter("Subzero", 10 , 1200);
let improvedFighter = new ImprovedFighter("Scorpion", 5, 1400);
// call fight function
fight(fighter,improvedFighter,1,2,3,5,8,13,21);
