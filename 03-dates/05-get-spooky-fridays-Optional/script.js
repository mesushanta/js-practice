/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const getFriday = () => {
      var year = document.getElementById('year').value;
      if(year.toString().length != 4 || isNaN(year) ) {
        alert('invalid year')
      }
      else {
        var d = new Date();
        var desired_months = [];
        for (i=0; i<12; i++) {
          d.setFullYear(year, i,13);
            if (d.getDay() == 5)
            {
              desired_months.push(months[i]);
            }
          }
        }
        alert(desired_months);
      }


    document.getElementById('run').addEventListener("click", getFriday);

})();
