const serverURL = 'https://queer-eye-final-project.herokuapp.com/episodes';

const getData = () => {
    fetch(serverURL)
        .then(response => response.json())
        .then(loadCards);
};

const loadCards = (list) => {
    document.querySelector('.cards').innerHTML = '';
    // load new ones (based on photos list)
    for (dictionary of list) {
        const template = `
            <li class="cards">

                <div class="name"><a class="name_2" href =${dictionary.hyperlink}>${dictionary.rank + ". " + dictionary.name}</a></div>
                <div class="episode_info"><br>${"Season " + dictionary.Season + " Episode " + dictionary.episode}</div>
                <div class="image" style="background-image:url('${dictionary.image}')"></div>


            </li>`;
        document.querySelector('.cards').innerHTML += template;
    }
    // initCarousel();
      // <div class="rank">${"Rank: " + dictionary.rank}</div>
        // <div class="episode">${"Episode: " + dictionary.episode}</div>s
          // <div class="episode_info"><br>${"Season " + dictionary.Season + " Episode " + dictionary.episode}</div>
};

  // <img src = "${dictionary.image}"></a>
getData();
