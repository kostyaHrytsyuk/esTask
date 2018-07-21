export class Fighter{
    constructor(name, power, health)
    {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    get damage()
    {
        return this.damage;
    }

    setDamage(damage)
    {
        return this.health = this.health - damage;
    }

    hit(enemy, point = 5)
    {
        console.log(point);
        let damage = point * this.power;
        enemy.setDamage(damage);
    }

    knockout(){
        let fightPromise = new Promise((resolve,reject) => {
            console.log("time is over");
            setTimeout(() => {
                resolve();
            },500);
        })
    }
}