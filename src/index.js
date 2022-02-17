import './style.css';

const toDos = [
	{
		index: 0,
		completed: false,
		description: 'Finish homework',
	},
];

const listWrapper = document.querySelector('.list-wrapper');

const makeRow = (task) => {
  const row = `
  <div class="check-mark">
    <input type="checkbox" id="status-${task.index}" ${
  task.completed ? 'checked' : ''
}>
    <p class="descrip ${task.completed ? 'scratch' : ''}">${
  task.description
}</p>
  </div>
  <button class="ellip">
  <i class="fa-solid fa-ellipsis-vertical"></i>
  </button>`;
  return row;
};

listWrapper.appendChild(makeRow);

const addList = (task) => {
  const row = document.createElement('div');
  row.classList.add('row');
  const insertRow = makeRow(task);
  task.innerHTML = insertRow;
  task.appendChild(row);
};

toDos.forEach((task) => {
  addList(task);
});