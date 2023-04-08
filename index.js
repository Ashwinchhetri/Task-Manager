const name_id = document.getElementById("name-id");
const task_info = document.getElementById("task_info");

const openModalBtn = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal");

const subButton = document.getElementById("submit-button");

const fas = document.getElementsByClassName("fas");

document.getElementById("task-table").style.display = "none";

window.onload = function () {
    var name = prompt("What is your name?");
    var nameElement = document.getElementById("name-id");
    nameElement.textContent = "Hello " + name;
}


document.getElementById("alert1").style.display = "none";
document.getElementById("alert2").style.display = "none";


subButton.addEventListener("click", () => {
    if (locationId.value.trim() == '') {
        document.getElementById("alert2").style.display = "block";
    }
})


openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});


var table = document.getElementById("task-table");
var headerRow = document.createElement("tr");


var taskHeader = document.createElement("th");
taskHeader.textContent = "Tasks";
headerRow.appendChild(taskHeader);

var dueDateHeader = document.createElement("th");
dueDateHeader.textContent = "Due Date";
headerRow.appendChild(dueDateHeader);

var statusHeader = document.createElement("th");
statusHeader.textContent = "Status";
headerRow.appendChild(statusHeader);

var wantHeader = document.createElement("th");
wantHeader.textContent = "Want to";
headerRow.appendChild(wantHeader);


table.appendChild(headerRow);

var a = false;
document.getElementById('task-info').style.display = "block";

document.getElementById("task-form").addEventListener("submit", function (event) {
    a = true;
    if(a){
        document.getElementById('task-info').style.display = "none";
    }
    event.preventDefault(); 
   
    var taskName = document.getElementById("grocery").value;
    var dueDate = document.getElementById("due-date").value;
    var status = document.getElementById("my-select").value;

    
    var row = document.createElement("tr");
    row.innerHTML = "<td class='task-name'>" + taskName + "</td><td class='due-date'>" + dueDate + "</td><td class='status'>" + status + "</td><td class='want-to'><i class='fas fa-trash-alt'></i><strong> / </strong><i class='fas fa-pencil-alt'></i></td>";

    
    table.appendChild(row);

    document.getElementById("task-table").style.display = "block";

    
    document.getElementById("alert1").style.display = "block";
    setTimeout(function () {
        document.getElementById("alert1").style.display = "none";
    }, 3000);

    document.getElementById("task-form").reset();

});

const taskTable = document.getElementById("task-table");

taskTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-trash-alt")) {
    const row = event.target.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
})


taskTable.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-pencil-alt")) {
      const row = event.target.parentNode.parentNode;
      const cells = row.getElementsByTagName("td");
  
      const taskName = cells[0].textContent;
      const dueDate = cells[1].textContent;
      const status = cells[2].textContent;
  
      row.classList.add("active-row");
  
      modal.style.display = "block";
      
  
      document.getElementById("grocery").value = taskName;
      document.getElementById("due-date").value = dueDate;
      document.getElementById("my-select").value = status;
    }
  });
  
  subButton.addEventListener("click", (event) => {
    const activeRow = document.querySelector(".active-row");
    const cells = activeRow.getElementsByTagName("td");
    const row = event.target.parentNode.parentNode;
  
    const updatedTaskName = document.getElementById("grocery").value;
    const updatedDueDate = document.getElementById("due-date").value;
    const updatedStatus = document.getElementById("my-select").value;
  
    cells[0].textContent = updatedTaskName;
    cells[1].textContent = updatedDueDate;
    cells[2].textContent = updatedStatus;

    row.parentNode.removeChild(row);
  
    modal.style.display = "none";
  
    activeRow.classList.remove("active-row");
  });

  function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("task-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        // Get the 3rd column (index 2) for status
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}


function myFunc() {
    var input, filterName, filterStatus, table, tr, tdName, tdStatus, i, txtValueName, txtValueStatus;
    input = document.getElementById("myInput");
    filterName = input.value.toUpperCase();
    filterStatus = document.getElementById("filter-status").value.toUpperCase();
    table = document.getElementById("task-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      tdName = tr[i].getElementsByTagName("td")[0];
      tdStatus = tr[i].getElementsByTagName("td")[2];
      if (tdName && tdStatus) {
        txtValueName = tdName.textContent || tdName.innerText;
        txtValueStatus = tdStatus.textContent || tdStatus.innerText;
        if (
          txtValueName.toUpperCase().indexOf(filterName) > -1 &&
          (filterStatus === "" || txtValueStatus.toUpperCase() === filterStatus)
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  function myFun() {
    var inputDate, filterDate, table, tr, td, i, txtValue;
    inputDate = document.getElementById("filter-due-date");
    filterDate = inputDate.value;
    table = document.getElementById("task-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.indexOf(filterDate) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  
  
  