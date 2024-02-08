/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = [];
  let adj = [];
  let noun = [];
  let domainType = [];
  let domainsList = document.getElementById("domains");
  for (let i = 0; i < 3; i++) {
    let usersPronouns = prompt(`Escribe un pronombre ${i + 1}/3:`);
    if (usersPronouns === null || usersPronouns === "") {
      alert("Debe ingresar un valor.");
      i--;
    } else {
      pronoun.push(usersPronouns);
    }
  }
  for (let i = 0; i < 3; i++) {
    let usersAdj = prompt(`Escribe un adjetivo ${i + 1}/3:`);
    if (usersAdj === null || usersAdj === "") {
      alert("Debe ingresar un valor.");
      i--;
    } else {
      adj.push(usersAdj);
    }
  }
  for (let i = 0; i < 3; i++) {
    let usersNoun = prompt(`Escribe un nombre ${i + 1}/3:`);
    if (usersNoun === null || usersNoun === "") {
      alert("Debe ingresar un valor.");
      i--;
    } else {
      noun.push(usersNoun);
    }
  }
  for (let i = 0; i < 3; i++) {
    let usersDomainType = prompt(`Escribe un tipo de dominio ${i + 1}/3:`);
    if (usersDomainType === null || usersDomainType === "") {
      alert("Debe ingresar un valor.");
      i--;
    } else {
      domainType.push(usersDomainType);
    }
  }

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let d = 0; d < domainType.length; d++) {
          let newDomains = document.createElement(`li`);
          newDomains.classList.add("list-group-item");
          newDomains.textContent =
            pronoun[p] + noun[n] + adj[a] + domainType[d];
          domainsList.appendChild(newDomains);
        }
      }
    }
  }
};
