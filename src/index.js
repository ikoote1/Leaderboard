import './style.css';
import addResult from './modules/card';
import { loadData } from './modules/fetch';

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click',()=>{
  loadData();
});


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
