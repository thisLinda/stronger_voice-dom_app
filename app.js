let id = 0;

document.getElementById('add').addEventListener('click', () => {
  let date = new Date();
  let table = document.getElementById('list');
  let row = table.insertRow(1);
  row.setAttribute('id', `item-${id}`);
  row.insertCell(0).innerHTML = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  row.insertCell(1).innerHTML = document.getElementById('ex-target').value;
  row.insertCell(2).innerHTML = document.getElementById('ex-completed').value;
  row.insertCell(3).innerHTML = document.getElementById('ex-performance').value;
  let actions = row.insertCell(4);
  actions.appendChild(createDeleteButton(id++));
  // resetting fields for a good user experience
  // document.getElementsById('ex-target', 'ex-performance', 'ex-completed').value = '';
  // document.getElementById('ex-target').value = '';
  // document.getElementById('ex-performance').value = '';
  // document.getElementById('ex-completed').value = '';
  let selectByClassNameElements = document.getElementsByClassName('form-control-lg');
  for (let i = 0; i < selectByClassNameElements.length; i++) {
    selectByClassNameElements[i].innerHTML = '';
    console.log(selectByClassNameElements[i].innerHTML);
  }
  // console.log(document.getElementsByClassName('form-control-lg'))
});

// deletes a specific task by id created above
// code from TODO App video, Nick Suwyn
function createDeleteButton(id) {
  let btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.id = id;
  btn.innerHTML = 'Delete';
  btn.onclick = () => {
    console.log(`Deleting row with id: item-${id}`);
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
}