const row = document.querySelector(".container");
const search = document.querySelector("#search");
const input = document.querySelector("#input");
const demo = document.querySelector("#demo")

function filter(){
    input.addEventListener("input",(event)=>{
        const value = event.target.value;
        console.log(value)
    })
}                                  

function pressEnter(){
    input.addEventListener("keypress",(event)=>{
        if(event.key === "Enter"){
            event.preventDefault();
            const value = input.value
            console.log(value)
        }
    })
}
const data = []
async function  pokemon(){
    for(let id =1; id<=151; id++){
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        const image = data.sprites.other.dream_world.front_default;
        const name = data.name;
        const hp = data.stats[0].base_stat;
        const statAttack = data.stats[1].base_stat;
        const statDefence = data.stats[2].base_stat;
        const listItem = document.createElement("div");
        listItem.classList.add("listItem");
        listItem.innerHTML +=`<div class="card" style="width:18rem" >
        <h1 class=id>${id}</h1>
        <p class="hp">Hp:${hp}</p>
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
        </div>
        <ul class="list d-flex justify-content-center align-items-center">
          <li class="list-group-item">Attack:${statAttack}</li>
          <li class="list-group-item">Defence:${statDefence}</li>
          <li class="list-group-item">Detaylar</li>
        </ul>
      </div>`
      row.appendChild(listItem)
    }   
}
search.addEventListener("click",filterSearchButton)

function filterSearchButton(){
    const  value = input.value.toLowerCase();
    console.log("bulbasaur");
    let filteredPokemons = data.filter((pokemon) => {
        pokemon.name.toLowerCase().startsWith(value)
        pokemon(filteredPokemons);
    })

}


pokemon()
filter()
pressEnter()