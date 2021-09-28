/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var d = new Date();

    // Sunday 28 October 2018, 23h32

    var desired_date = days[d.getDay()] + ' ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' ' + d.getHours() + 'h' + d.getMinutes();


    document.getElementById("target").innerHTML = desired_date;

    // 
    //
    // const options = { weekday: 'long', day: 'numeric',  month: 'long', year: 'numeric' };
    //
    // console.log(event.toLocaleDateString('de-DE', options));

})();
