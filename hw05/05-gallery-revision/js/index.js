const loadCards = (photos) => {
    console.log(photos);
    let i = 0
    for (photo of photos) {
      let template = `
          <li class="card">
              <div class="image" style="background-image:url('${photos[i]}')"></div>
          </li>
      `;
      document.querySelector('.cards').innerHTML += template;
      i +=1;
    }}


loadCards([
    'images/poppies.jpg',
    'images/dogwoods.jpg',
    'images/blossom.jpg',
    'images/field3.jpg',
    'images/field4.jpg',
    'images/branch.jpg',
    'images/red.jpg',
    'images/purple2.jpg',
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
]);
initCarousel();
