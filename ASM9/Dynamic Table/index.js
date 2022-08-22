var userTable = document.createElement("table");
userTable.setAttribute("id", "userTable");
document.body.appendChild(userTable);

var tableHeadRow = userTable.insertRow(0);

var tableHeadArray = new Array();
tableHeadArray = ["User Name", "Address", "Age", "Option"];

for (var i = 0; i < tableHeadArray.length; i++) {
  var th = document.createElement("th");
  th.innerHTML = tableHeadArray[i];
  tableHeadRow.appendChild(th);
}

//add border
userTable.setAttribute("border", "1");

//add cell padding
userTable.setAttribute("cellpadding", "10px");

//add row dynamically
document.getElementById("addRow").addEventListener("click", function () {
  const username = document.getElementById("username");
  const address = document.getElementById("address");
  const age = document.getElementById("age");

  var tr = userTable.insertRow(-1);

  var tableDataArray = new Array();
  tableDataArray = [username.value, address.value, age.value];

  for (var i = 0; i < tableDataArray.length; i++) {
    var td = tr.insertCell(-1);
    td.innerHTML = tableDataArray[i];
  }

  var td = tr.insertCell(-1);

  // add a button
  var button = document.createElement("button");

  // set button attributes
  button.setAttribute("type", "button");
  button.innerHTML = "Remove";

  // set onclick event
  button.setAttribute("onclick", "remRow(this)");

  td.appendChild(button);

  username.value = "";
  address.value = "";
  age.value = "";
});

//remove row
function remRow(el) {
  var uTable = document.getElementById("userTable");
  uTable.deleteRow(el.parentNode.parentNode.rowIndex);
}
