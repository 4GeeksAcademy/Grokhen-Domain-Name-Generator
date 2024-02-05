/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["cat", "racoon"];
  let domainType = [".com", ".es", ".net", ".io"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let d = 0; d < domainType.length; d++) {
          console.log(pronoun[p] + adj[a] + noun[n] + domainType[d]);
        }
      }
    }
  }
  console.log("Hello Rigo from the console!");
};

//Domain name generator code
