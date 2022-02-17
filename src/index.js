import './style.css';
import { createList } from '../modules/create.js';
import { addItem } from '../modules/add.js';
import clearAll from '../modules/clearAll.js';

let tasks = [];

const getLocalData = () => {
  if (localStorage.getItem('localData')) {
    tasks = JSON.parse(localStorage.localData);
  }
};

getLocalData();
createList(tasks);
addItem(tasks);
clearAll(tasks);