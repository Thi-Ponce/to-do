// eslint-disable-next-line import/no-cycle
import remove from './remove.js';
import checker from './completed.js';
import change from './modify.js';

const check = (a, b) => {
    if (a.index < b.index) {
      return -1;
    }
    if (a.index > b.index) {
      return 1;
    }
    return 0;
  };
  
  export const createList = (items) => {
    items.sort(check);
    let editedTasks = '';
    items.forEach((item) => {
      let checked = '';
      if (item.completed) {
        checked = ' checked';
      }
      editedTasks += `<div class="item${checked}"><input class="checkbox" value="${item.index}" type="checkbox"${checked}><input class="itemDescrip" type="text" value="${item.description}"><i class="far fa-trash-alt fa-lg"></i></div>`;
    });
    const list = document.querySelector('.task-list');
    list.innerHTML = editedTasks;
    checker(items);
    change(items);
    remove(items);
  };