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
    
  }

}