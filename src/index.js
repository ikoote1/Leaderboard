import './style.css';
// import  scores  from './modules/constructor.js';

class UI {
   constructor() {
     this.results = [
      {
        user: 'Ikoote rasuli',
        score: 42,
      },
      {
        user: 'Peter Parker',
        score: 35,
      },
      {
        user: 'Wonder Woman',
        score: 50,
      },
      {
        user: 'Ikoote rasuli',
        score: 42,
      },
      {
        user: 'Peter Parker',
        score: 35,
      },
      {
        user: 'Wonder Woman',
        score: 50,
      },
      {
        user: 'Ikoote rasuli',
        score: 42,
      },
      {
        user: 'Peter Parker',
        score: 35,
      },
      {
        user: 'Wonder Woman',
        score: 50,
      },
    ];
  }
  renderList(){
    this.results.forEach((result) => this.addResult(result));
  }

   addResult(result) {
    const list = document.querySelector('.scores');
    const listRow = document.createElement('div');
    listRow.innerHTML = `
      <p>${result.user}</p>
      <p>${result.score}</p>
    `;
    list.appendChild(listRow);
  }
}
const ui = new UI();
//document.addEventListener('DOMContentLoaded', ui.allResults);
ui.renderList();

// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2gzeEkv7rMvQMPeB1pjG/scores/', {
//   method: 'POST',
//   body: JSON.stringify({
//     user: 'ikoote-game',
//     score:70,
   
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//   {
//     "result": "Game with ID: 2gzeEkv7rMvQMPeB1pjG added."
// }
