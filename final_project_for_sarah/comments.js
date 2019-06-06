const serverURL = 'https://queer-eye-final-project.herokuapp.com/comments';

const getData = () => {
    fetch(serverURL)
        .then(response => response.json())
        .then(loadCards);
};

const loadCards = (list) => {
    document.querySelector('.cards').innerHTML = '';
    console.log(list);
    // load new ones (based on photos list)
    for (dictionary of list) {
        const template = `
            <li class="cards">
                <div class="name">${dictionary.name}</div>
                <div class="episode_name"> ${dictionary.episode} </div>
                <div class="comment"> ${dictionary.comment}</div>


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

const addComment = () => {
    // 1. get user-generated data:
    const episode = document.querySelector('#episode').value;
    const comment = document.querySelector('#comment').value;
    const name = document.querySelector('#name').value;

    // 2. post it to the endpoint:
    fetch('https://queer-eye-final-project.herokuapp.com/comments', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "episode": episode,
            "comment": comment,
            "name": name
        })
    })
    .then(response => response.json())
    .then(data => {
        // 3. print the results to the screen
        console.log(data);
    });
};

// 4. attach function to button:
document.querySelector('button').onclick = addComment;
