

const apiUrl = "https://rickandmortyapi.com/api/character";

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const characterList = document.getElementById("characterList");

        data.results.forEach(character => {
            const listItem = document.createElement("li");
            listItem.textContent = character.name;
            characterList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error("Error al consumir la API:", error);
    });

