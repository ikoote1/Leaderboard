import "./style.css";
import { scores } from "./modules/constructor";
class UI{
  static allResults(){
    const results =[
      {
          "user": "Ikoote rasuli",
          "score": 42
      },
      {
          "user": "Peter Parker",
          "score": 35
      },
      {
          "user": "Wonder Woman",
          "score": 50
      }
  ];
  results.forEach((result) => UI.addResult(result));
  }
  static addResult(result){

    const list = document.querySelector('.scores');
    const listRow = document.createElement('div');
    listRow.innerHTML= `
      <p>${result.user}</p>
      <p>${result.score}</p>
    `;
    list.appendChild(listRow);
  }

}
document.addEventListener('DOMContentLoaded',UI.allResults);
UI.addResult(o);