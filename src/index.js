import './style.css';
import loadData from './modules/fetch.js';
// import addResult from './modules/card';

const refresh = document.querySelector('.refresh');
const form = document.querySelector('.submit-form');
const list = document.querySelector('.scores');

// fetching data
refresh.addEventListener('click', () => {
  list.innerHTML = '';
  loadData();
});

// Adding data

function addData(event) {
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

form.addEventListener('submit', addData);
form.addEventListener('submit', () => {
  document.querySelector('.name').value = '';
  document.querySelector('.your-score').value = '';
});
