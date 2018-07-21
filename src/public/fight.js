import {Fighter} from './fighter'
import {ImprovedFighter} from './improvedFighter'

export let fight = async function Fight(fighter, improvedFighter, ...point )
{
    fighter.hit(improvedFighter,point[0]);
    improvedFighter.doubleHit(fighter, point[0]);
    debugger;
    point.shift();
    console.log(point);
    if (fighter.health > 0 && improvedFighter.health > 0) 
    {
        await fight(fighter, improvedFighter, ...point);
    }
    else
    {
        if (fighter.health < 0)
        {
            await fighter.knockout();
            console.log(`${fighter.name} is in knockout`);
            console.log(`${improvedFighter.name} health is ${improvedFighter.health}`);
        } else 
        {
            await improvedFighter.knockout();
            console.log(`${improvedFighter.name} is in knockout`);
            console.log(`${fighter.name} health is ${fighter.health}`);
        }

        console.log("Game over");
    }
}