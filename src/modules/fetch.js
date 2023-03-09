import addResult from './card.js';

async function loadData() {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2gzeEkv7rMvQMPeB1pjG/scores/';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const { result } = await response.json();

  result.forEach((res) => addResult(res));
}
export default loadData;