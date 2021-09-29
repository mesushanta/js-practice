/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {

  const el = document.getElementById('pass-one');
  const check_pwd_regex_expr = /^(?=.*\d{2,}).{8,}$/;
  el.addEventListener('keyup', function(e) {
    str_length = el.value.length;
    if(el.value.match(check_pwd_regex_expr)) {
      validate_msg = "OK";
    }
    else {
      validate_msg = "Not OK";
    }
    document.getElementById("validity").innerHTML= validate_msg;
  });

})();
