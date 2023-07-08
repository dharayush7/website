function is_touch_device() {
  return (
    "ontouchstart" in window ||
    navigator.MaxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (is_touch_device() != true) {
  // footer hover

  const footer = document.querySelectorAll(".img");
  for (let i = 0; i < footer.length; i++) {
    footer[i].classList.add("filter");
  }
  for (let i = 0; i < footer.length; i++) {
    footer[i].addEventListener("mouseenter", () => {
      footer[i].classList.add("hover3");
    });
    footer[i].addEventListener("mouseleave", () => {
      footer[i].classList.remove("hover3");
    });
  }
}

function clear() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
}

function getAndUpdate() {
  tit = document.getElementById("title").value;
  desc = document.getElementById("description").value;
  if (tit.length == 0) {
    alert("Title is entry!");
      
  }
  else if(desc.length == 0){
    alert("Description is entry!");
  }
  else {
    if (localStorage.getItem("itemsJson") == null) {
      itemJsonArray = [];
      itemJsonArray.push([tit, desc]);
      localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    } else {
      itemJsonArrayStr = localStorage.getItem("itemsJson");
      itemJsonArray = JSON.parse(itemJsonArrayStr);
      itemJsonArray.push([tit, desc]);
      localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    }
    clear();
    update();
  }
}

function update() {
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }
  // Populate the table
  let tableBody = document.getElementById("tableBody");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += `
                    <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td> 
                    <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
                    </tr>`;
  });
  tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex) {
  itemJsonArrayStr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  // Delete itemIndex element from the array
  itemJsonArray.splice(itemIndex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  update();
}
function clearStorage() {
  if (confirm("Do you areally want to clear?")) {
    localStorage.clear();
    update();
  }
}
