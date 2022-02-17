import { createList } from "./create.js";

export const addItem = (items) => {
    const input = document.querySelector('.add');
    input.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        const newItem = {
          description: input.value,
          completed: false,
          index: items.length + 1,
        };
        items.push(newItem);
        createList(items);
        input.value = '';
        localStorage.localData = JSON.stringify(items);
      }
    });
  };