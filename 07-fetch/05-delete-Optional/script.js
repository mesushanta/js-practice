/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  async function removeApiData(id) {
    fetch('http://localhost:3000/heroes')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data.length);
        for (var i = 0; i < data.length; i++) {
          if(data[i].id == id) {
            console.log(data[i].name);
            delete data[i];
          }
        }
        console.log(data);
      });
  }

  const getId = () => {
    var id = document.getElementById('hero-id').value;
    return id;
  }
  document.getElementById('run').addEventListener('click', function() {
    removeApiData(getId())
  });

})();
