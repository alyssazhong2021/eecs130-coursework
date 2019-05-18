const search = (ev) => {
    console.log(document.querySelector('input').value);
    let url = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?location=' + document.querySelector('input').value;
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
    console.log(data);
    for (thing of data) {
    const template = `
    <li class="cards">
      <p> ${thing.name}<br> Rating: ${thing.rating} <br> Price Range: ${thing.price}</p>
      <div class = "image" style="background-image:url('${thing.image_url}')"></div>
    </li>
        `;
    document.querySelector('.cards').innerHTML += template;
    }

};

document.querySelector('#search').onclick = search;
