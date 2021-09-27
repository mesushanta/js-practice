/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();

    if(hour >= 18 ) {
      var msg = "Good Evening 1";
    }
    else if(hour < 18 && hour >= 17) {
      if(minute < 30) {
        var msg = "Hello! before 17:30";
      }
      else {
        var msg = "good Evening 2";
      }
    }
    else {
      var msg = "Hello! before 17:30";
    }
    document.getElementById("target").innerHTML = msg;
})();
