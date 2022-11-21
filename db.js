let data = [
  { id:"1", task: "Workshop on HTML and CSS", type: true },
  { id:"2", task: "Workshop on JS", type: false },
  { id:"3", task: "Introduce Firebase", type: false },
];

let show = [...data]

const renderTasks = (val) =>{
  val.forEach((el) => addTodo(el));
}
renderTasks(show)

const createTask = (task) => {
  let temp = {id:`${data.length+1}`, task, type: false }
  data.push(temp);
  show.push(temp);
  addTodo({ task, type: false });

  console.log(data);
};

const reverseTasks = () => {
  document.querySelector(".list").innerHTML = ""
  show = show.reverse()
  renderTasks(show)
}

const updateTasks = (e) => {
  let id = e.nextElementSibling.getAttribute("id")
  const pos = data.findIndex(el => el.id==id)
  data[pos].type = !(data[pos].type)
  
  console.log(data)
}

const deleteTask = (e) => {
  let par = e.parentElement.previousElementSibling
  const id = par.querySelector(".title").getAttribute("id")
  const pos = data.findIndex(el => el.id==id)
  data.splice(pos,1)
  console.log(data)
}

const saveTask = (e) => {
  let par = e.parentElement.previousElementSibling
  const id = par.querySelector(".title").getAttribute("id")
  const pos = data.findIndex(el => el.id==id)
  data[pos].task = par.querySelector(".editInput").value;
  console.log(data)
}
