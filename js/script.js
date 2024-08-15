cons   = document.queryselector('.pokemon_name');


const fetchPokemon = async (pokemon)=> {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIRespanse.json();
    return data;
}

const renderPokemon = async (pokemon) => {
     const data = await fetchPokemon(pokemon);
     

}

renderPokemon('25')
