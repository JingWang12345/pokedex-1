//console.log(window.location)
//console.log(window.location.search)

const urlSearchParams = new URLSearchParams(window.location.search);

//console.log(urlSearchParams)

const pokemonName = urlSearchParams.get('pokemon');


console.log(pokemonName);


PokeService.getDetail(pokemonName).then(pokemonObject => {
    console.log('data from db', pokemonObject);
    const myPokemon = new Pokemon(pokemonObject.name, pokemonObject.stats, pokemonObject.sprites.front_default);
    console.log('pokemon', myPokemon);
    for (let i = 0; i < pokemonObject.stats.length; i++) {
        const statObject = pokemonObject.stats[i];
        myPokemon.addStat(statObject.stat.name, statObject.base_stat)
    }
    console.log('pokemon', myPokemon);
    displayPokemon(myPokemon);
})

function displayPokemon(pokemon){
     const pokemonDetail = document.getElementById('pokemon-detail');
     const nameContainer = document.createElement('span');
     const nameText = document.createTextNode(pokemon.name);
     nameContainer.appendChild(nameText);
     pokemonDetail.appendChild(nameContainer);

     const imageContainer = document.createElement('img');
     imageContainer.src=pokemon.image;
     pokemonDetail.appendChild(imageContainer);
     
}
