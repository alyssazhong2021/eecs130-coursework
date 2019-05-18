const search = (ev) => {
    console.log(document.querySelector('input').value);
    let url = 'https://www.apitutor.org/spotify/simple/v1/search?q=' + document.querySelector('input').value + '&type=track';
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
    console.log(data);
    for (item of data) {
      const template = `
      <li class="cards">
        <p class="song"> ${item.name} </p>
          <div class="image" style="background-image:url('${item.album.image_url}')"></div>
          <iframe src="https://open.spotify.com/embed?uri=spotify:track:${item.id}&amp;theme=white" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" data-testid="audio-player"></iframe>
      </li>
      `;
      document.querySelector('.cards').innerHTML += template;
    }
};

document.querySelector('#search').onclick = search;

search('BTS');
