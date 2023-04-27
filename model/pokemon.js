class Pokemon{

    constructor(name, stats=[], image){
        this.name = name;
        this.stats = stats;
        this.image = image;
    }

    addStat(name, baseValue){
        const newStat = new Stat(name, baseValue);
        this.stats.push(newStat);
    }


}

class Stat{

    constructor(name, baseValue){
        this.name = name;
        this.baseValue = baseValue;
    }
}
