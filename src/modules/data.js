export default function addData(event){
    event.preventDefault();
    const form = document.querySelector('.submit-form');
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

    // fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2gzeEkv7rMvQMPeB1pjG/scores/',{
    //     method: 'POST',
    //      body: jsonData,
    //     headers:{
    //         'content-Type': 'application/json',
    //     },
    // }).then((res)=> res.json())
    // .then((json) => console.log(json))
    // .catch(err => console.log(err));
}