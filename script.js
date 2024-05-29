function loadJSON(callback) {
    const xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', './data/animes.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == "200") {
            callback(JSON.parse(xhr.responseText));
        }
    };
    
    xhr.send(null);
}

function displayAnimes(data) {
    const animeList = document.getElementById('anime-list');

    data.animes.forEach(anime => {

        const animeDiv = document.createElement('div');
        animeDiv.classList.add('anime');

        const animeImg = document.createElement('img');
        animeImg.src = anime.portada;
        animeImg.alt = anime.nombre;

        const animeName = document.createElement('h2');
        animeName.textContent = anime.nombre;
        animeName.style.color = "yellow";

        const animeSynopsis = document.createElement('p');
        animeSynopsis.textContent = anime.sinopsis;

        animeDiv.appendChild(animeImg);
        animeDiv.appendChild(animeName);
        animeDiv.appendChild(animeSynopsis);

        animeList.appendChild(animeDiv);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    loadJSON(function (data) {
        displayAnimes(data);
    });
});
