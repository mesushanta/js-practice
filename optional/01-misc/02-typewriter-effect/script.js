/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    const TypeWriter = function(el, words, wait=3000) {
      this.el = el;
      this.words = words;
      this.txt = '';
      this.wait = parseInt(wait,10);
      this.type();
      this.getDelay();
      this.isDeleting = false;
    }

    TypeWriter.prototype.type = function () {
      const current = this.wordIndex % this.words.length;

      if(this.isDeleting) {
        this.txt = this.words.substring(0, this.txt.length -1);
      }
      else {
        this.txt = this.words.substring(0, this.txt.length +1);
      }

      this.el.innerHTML = this.txt;

      delay = this.getDelay();
      console.log(delay);
      setTimeout(() => this.type(), delay)
    };

    TypeWriter.prototype.getDelay = function () {
      return ((Math.floor(Math.random() * 10) + 1) * 100);
    };

    document.addEventListener('DOMContentLoaded', init);

    function init()  {
      const el = document.getElementById('target');
      const words = el.innerHTML;
      const wait = 3000;
      new TypeWriter(el, words, wait);
    }
