const btn = document.querySelector('.btn')
const task = document.querySelector('.task')
const taskLists=document.querySelector('.task-lists')
let lists = []
let editMode =false
let index 

btn.addEventListener('click', () => {
    
    if(task.value===''){
        return alert("Please enter the input value")
    }
    if(editMode){
      lists.splice(index,1,task.value)
      console.log(lists)
      displayTaskLists()
      
    }
    if(!editMode && task.value){
    const list = task.value.trim()
    lists.push(list)
   displayTaskLists()
    }
    editMode = false
    
    

   
     
    // setting input to default
    setDefault()
    // setDefault()
    

})


function setDefault(){
    task.value =''
    btn.textContent="Submit"
    
}
// editing task
function editTask(e){
    console.log(e.currentTarget.dataset.id)
    const taskId = e.currentTarget.dataset.id
    index = lists.indexOf(taskId)
    task.value = taskId
    btn.textContent="Edit"
    editMode=true
   

}
// deleting task
function deleteTask(e){
   const taskId = e.currentTarget.dataset.id;
   const filteredTaskLists = lists.filter((list)=>list!==taskId)
   lists = [...filteredTaskLists]
   displayTaskLists()
}

function displayTaskLists(){
let listsHtml = ''
lists.forEach((list) => {
  listsHtml += ` <div  class="p-2  fs-5 d-flex justify-content-between gap-5 mt-2 bg-light rounded text-capitalize shadow-lg ">
                <span>${list}</span> 
                <span>
                   <button class="btn-pencil btn" data-id="${list}"> <i class="bi bi-pencil text-success"></i></button>
                   <button class=" btn-delete btn"  data-id="${list}"> <i class="bi bi-trash text-danger"></i></button>
                </span>
            </div>`
})
 taskLists.innerHTML = listsHtml
  const editIcons = taskLists.querySelectorAll('.btn-pencil')
  editIcons.forEach((icon) => {
    icon.addEventListener('click', editTask)
  })

  const deleteIcons = taskLists.querySelectorAll('.btn-delete')
  deleteIcons.forEach((icon) => {
    icon.addEventListener('click', deleteTask)
  })
    
}

const randomId = ()=>{
    const str = "qwertyuiopasdfghjklxzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM"
    let randomId = '';
    for(let i =0; i<6;i++){
       let randomIndex = Math.floor(Math.random()*str.length)
       randomId+=str[randomIndex]
    }
    return randomId
}
