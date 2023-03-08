export default function addResult(res) {
  const list = document.querySelector('.scores');
  const listRow = document.createElement('div');
  listRow.innerHTML = `
    <p>${res.user}</p>
    <p>${res.score}</p>
  `;
  list.appendChild(listRow);
}
