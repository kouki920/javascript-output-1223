'use strict';

const listArea = document.querySelector('#listarea');
const todoLists = document.querySelector('#todolists');
const addList = document.querySelector('#addlist');
const addButton = document.querySelector('#addbutton');
const errorText = document.querySelector('#error_message');

const createList = () => {
  const todoli = document.createElement('li');
  todoLists.appendChild(todoli);
  todoli.textContent = addList.value;

  const endbutton = document.createElement('button');
  endbutton.textContent = '完了';
  todoli.appendChild(endbutton);

 endbutton.addEventListener('click',()=>{
   todoli.classList.add('endbutton_line');
   todoli.removeChild(endbutton);
 })

  const clrbutton = document.createElement('button');
  clrbutton.textContent = '削除';
  todoli.appendChild(clrbutton);

  clrbutton.addEventListener('click',()=>{
    todoLists.removeChild(todoli);
  })
}



addButton.addEventListener('click',()=>{

  if(addList.value === ''){
    errorText.textContent = 'リストを追加してください';
    return;
  } else{
    createList();
    addList.value = '';
    errorText.textContent = '';
  }
})