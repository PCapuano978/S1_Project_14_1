"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Patrick M. Capuano
   Date:   4.2.19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/

// Event listener that intiates the "setStyles" function on window load.
window.addEventListener("load", setStyles);

// Declaration of the "setStyles" function.
function setStyles() {

      // Setting styleNum equal to the value of "randInt" with the parameter of five.
      var styleNum = randInt(5);

      // Definte new link element node in the form of "linkElement".
      var linkElement = document.createElement("link");

      /* The linkElement node has its...
      id attribute set to fancySheet,
      rel attribute set to stylesheet,
      and href attribute set to "na_style_" with the styleNum value ending with ".css"*/

      linkElement.setAttribute("id", "fancySheet");
      linkElement.setAttribute("rel", "stylesheet");
      linkElement.setAttribute("href", "na_style_" + styleNum + ".css");

      document.head.appendChild(linkElement);

      var figBox = document.createElement("figure")

      figBox.setAttribute("id", "styleThumbs");

      document.getElementById("box").appendChild(figBox);


      for (var i = 0; i < 4; i++) {

            var sheetImg = document.createElement("img");

            sheetImg.setAttribute("src", "na_small_" + [i] + ".png");
            sheetImg.setAttribute("alt", "na_style_" + [i] + ".css");



      };


}

function randInt(size) {
      return Math.floor(size * Math.random());
}