const serverURL = 'https://queer-eye-final-project.herokuapp.com/comments';

const getData = () => {
    fetch(serverURL)
        .then(response => response.json())
        .then(loadCards);
};

const loadCards = (list) => {
    console.log(list);
    for (dictionary of list) {
        const template = `
            <li class="card">
                <div class="name"><p>${"Name: " + dictionary.name}</p></div>
                <div class="episode_name"><p> ${"Episode: " + dictionary.episode}</p></div>
                <div class="comment"><p> ${"Comment: " + dictionary.comment}</p></div>


            </li>`;
        document.querySelector('.cards').innerHTML += template;

    }
};

getData();

const addComment = () => {
    const episode = document.querySelector('#episode').value;
    const comment = document.querySelector('#comment').value;
    const name = document.querySelector('#name').value;

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
        console.log(data);
    });
};

document.querySelector('button').onclick = addComment;
