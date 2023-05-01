const urlSearchParams = new URLSearchParams(window.location.search);

const typeUrl = urlSearchParams.get('typeUrl')

PokeService.getType(typeUrl).then(typeObj => {
    // console.log(typeObj);
    displayType(typeObj);
})

function displayType(type) {
    const typeContainer = document.getElementById('type-container');
    const typeName = document.createTextNode(type.name);
    typeContainer.appendChild(typeName);

    const movesUl = document.createElement('ul');
    for (let i = 0; i < type.moves.length; i++) {
        const element = type.moves[i];
        const moveLi = document.createElement('li');
        const moveName = document.createTextNode(element.name);
        moveLi.appendChild(moveName);
        movesUl.appendChild(moveLi);
    }
    
    typeContainer.appendChild(movesUl);
    console.log(type);

}