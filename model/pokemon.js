class Pokemon{

    constructor(name, stats=[], types = []){
        this.name = name;
        this.stats = stats;
        this.types = types;
    }

    addStat(name, baseValue){
        const newStat = new Stat(name, baseValue);
        this.stats.push(newStat);
    }
    addType(name, url){
        const newType = new Type(name, url);
        this.types.push(newType);
    }

}

class Stat{

    constructor(name, baseValue){
        this.name = name;
        this.baseValue = baseValue;
    }
}

class Type{
    
    constructor(name, url){
        this.name = name;
        this.url = url;
    }
}