/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    function wavytext() {
        let messageEl = document.getElementById("target");
        // let message = messageEl.innerHTML;
        let message = "This is new wavy text for test purpose. We can put any content here to test this effect"
        let delay = 10;
        var new_msg = message.split("")
        .map(letter => {
          return `<span>` + letter + `</span>`;
        })
        .join("");

        messageEl.innerHTML = new_msg;
        var counter = 20;
        var increment =  false;
        Array.from(messageEl.children).forEach((span, index) => {

            span.animate([
              // keyframes
              { transform: 'translateY(0px)' },
              { transform: 'translateY(-300px)' }
              ], {
              // timing options
              duration: 1000,
              iterations: Infinity
            });

            span.style.fontSize = counter + 'px';
            if(counter ==  20 || counter == 40) {
              increment = !increment;
            }
            if(increment) {
              counter = counter + 4;
            }
            else {
              counter = counter - 4;
            }

        });


    }
    function randomFontSize() {
       return "font_size_" + (Math.floor(Math.random() * 5) + 1);
    }
    wavytext('hello world');
})();
