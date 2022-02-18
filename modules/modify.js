export default (items) => {
  const descrips = document.querySelectorAll('.itemDescrip');
  descrips.forEach((task, index) => {
    task.addEventListener('input', () => {
      items[index].description = task.value;
      localStorage.localData = JSON.stringify(items);
    });
  });
};