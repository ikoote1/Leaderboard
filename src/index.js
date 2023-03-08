import './style.css';
import addResult from './modules/card';
// // import { getLists } from './modules/fetch';

// class UI {
//    constructor() {
//      this.results = data;
//   }
//   renderList(){
//     this.results.forEach((result) => addResult(result));
//   }
// }
// const ui = new UI();
// ui.renderList();

async function loadData() {

  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2gzeEkv7rMvQMPeB1pjG/scores/';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const {result} = await response.json();
  // console.log(superHeroes);
  // populateHeader(superHeroes);
  // populateHeroes(superHeroes);
  result.forEach((res) => addResult(res));
}

loadData();
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
