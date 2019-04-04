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

      // The child node of "linkElement" is to be appended to the head element.
      document.head.appendChild(linkElement);

      // The "figBox" variable is declared with it being set to a figure node created within the document.
      var figBox = document.createElement("figure")

      // The figBox's id attribute is set to "styleThumbs".
      figBox.setAttribute("id", "styleThumbs");

      // The figBox child node is appended in the elements of HTML with the id of "box".
      document.getElementById("box").appendChild(figBox);

      // for loop starts cycling numbers one through four.
      for (var i = 0; i < 4; i++) {

            // "sheetImg" is declared and set to be an image node.
            var sheetImg = document.createElement("img");

            // sheetImg has two attribute of source and alt that are set to text strings including index numbers of the collection.
            sheetImg.setAttribute("src", "na_small_" + [i] + ".png");
            sheetImg.setAttribute("alt", "na_style_" + [i] + ".css");

           
            
            
      };

      // "thumbStyles" is declared where it is made into a stylesheer node.
      var thumbStyles = document.createElement("style");

            // thumbStyles is appended to the document head.
            document.head.appendChild(thumbStyles);

            // Three stylesheet rule are embeeded in here through the thumbStlye node and includes the following rules.
            document.styleSheet[document.styleSheets.length - 1].insertRule(
                  "figure#styleThumbs { \
                  position: absolute; \
                  left: 0px; \
                  bottom: 0px; \
                  }", 0);


            document.styleSheets[document.styleSheets.length - 1].insertRule(
                  "figure#styleThumbs img { \
                  outline: 1px solid black; \
                  cursor: pointer; \
                  opacity: 0.75; \
                  }", 1);

            document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover { \
                  outline: 1px solid red; \
                  opacity: 1.0; \
                  }", 2);


}

function randInt(size) {
      return Math.floor(size * Math.random());
}