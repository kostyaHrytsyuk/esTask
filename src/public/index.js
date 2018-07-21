import {Fighter} from './fighter'
import {ImprovedFighter} from './improvedFighter'
import {fight} from './fight'

// create two instances
let fighter = new Fighter("Subzero", 30 , 400);
let improvedFighter = new ImprovedFighter("Scorpion", 20, 500);
// call fight function
fight(fighter,improvedFighter,1,2,3,5,8,13,21);
