
document.addEventListener('DOMContentLoaded', async function(event) {
  // Step 1: Make the world's tiniest to-do app

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault()
  
  let todoText = document.querySelector('#todo').value

  if (todoText.length >0) {

  document.querySelector('.todos').insertAdjacentHTML('beforeend', `
    <div class="py-4 text-x1 border-b-2 border-purple-500 w-full">
      ${todoText}
      </div>
  `)
  document.querySelector('#todo').value = ''
}
  
})

  // Step 2: Read existing to-dos from Firestore

  let db= firebase.firestore()
  let querySnapshot = await db.collection('todos').get()
  let todos = querySnapshot.docs
  for (let i=0; i<todos.lenght; i++) {
    let todoId = todos[i].id
    let todoData = todos[i].data()
    let todoText = todoData.text
    console.log(todoText)
  }


  

  // Step 3: Add code to Step 1 to add todo to Firestore
  // Step 4: Add code to allow completing todos
})