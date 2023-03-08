import './style.css';
import { loadData } from './modules/fetch';
// import addData from './modules/data';

const refresh = document.querySelector('.refresh');
const submit = document.querySelector('.submit');
refresh.addEventListener('click',()=>{
  loadData();
});
const form = document.querySelector('.submit-form');
form.addEventListener('submit',addData);

function addData(event){
  event.preventDefault();
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2gzeEkv7rMvQMPeB1pjG/scores/', {
method: 'POST',
body: jsonData,
headers: {
  'Content-type': 'application/json; charset=UTF-8',
}, 
})
.then((response) => response.json())
.then((json) => console.log(json));

}
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
