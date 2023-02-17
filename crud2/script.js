let id = "";
let arr = [];
let update_ID;
let tabledata = document.getElementById("tbody");
Show();
const AddTask = () => {
  let taskname = document.getElementById("input").value;
  if (taskname == "") {
    document.getElementById("ErrMas").innerText = "Please Enter Task";
  } else {
    if (id == "") {
      if (arr.length == 0) {
        arr = [taskname];
        console.log(arr);
        Show();
        document.getElementById("input").value = "";
        document.getElementById("ErrMas").innerText = "";
      } else {
        arr.push(taskname);
        console.log(arr);
        Show();
        document.getElementById("input").value = "";
      }
    } else {
      arr[update_ID] = taskname;

      id = "";
      document.getElementById("input").value = "";
      document.getElementById("btn").innerText = "Add";
      Show();
    }
  }
};

function Show() {
  let sno = 1;
  box = "";
  if (arr.length == 0) {
    tabledata.innerHTML = `<p id="taskempty">Task List Empty...</p>`;
  } else {
    for (let key in arr) {
      box += `<tr> <td> ${sno}</td>  <td> ${arr[key]}</td>  <td> <button class="actionbtn" onclick="EditData(${key})"> <i class="fa-solid fa-pen-to-square"></i></button>  <button class="actionbtn" onclick=DeleteData(${key})> <i class="fa-solid fa-trash"></i></button> </td></tr>`;
      sno++;
    }
    tabledata.innerHTML = box;
  }
}

const EditData = (key) => {
  id = "no";
  update_ID = key;
  document.getElementById("input").value = arr[key];
  document.getElementById("btn").innerText = "Edit";
};

const DeleteData = (key) => {
  arr.splice(key, 1);
  Show();
};
