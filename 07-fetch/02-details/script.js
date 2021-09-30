/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  async function getApiData(id) {
    fetch('http://localhost:3000/heroes')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // let html = '';
        // data.forEach(function(movie) {
        //   html +=  `
        //     <li>${movie.name}</li>
        //   `;
        // });
        // console.log(html);
        let result = data.filter(movie => movie.id == id);
        let html = '';
        if(result) {
          result.forEach(movie => {
            html += `
            <li class="hero">
                <h4 class="title">
                    <strong class="name">${movie.name}</strong>
                    <em class="alter-ego">${movie.alterEgo}</em>
                </h4>
                <p class="powers">${movie.abilities}</p>
            </li>
            `;
          });
          document.getElementById('target').innerHTML = html;
        }
        else {
          console.log('No Match found');
        }
      });
  }

  const wrapTag = (item, tag) => {
    return `<${tag}>${item}</${tag}>`;
  }
  const getId = () => {
    var id = document.getElementById('hero-id').value;
    return id;
  }
  document.getElementById('run').addEventListener('click', function() {
    getApiData(getId())
  });

})();
