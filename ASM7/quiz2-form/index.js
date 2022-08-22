function onClick() {
  function radioSelected() {
    const radios = document.getElementsByName("user-recommend");
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        return radios[i].value;
      }
    }
  }
  function checkBoxSelected() {
    let checkedValue = [];
    let inputElements = document.getElementsByClassName("input-checkbox");
    for (var i = 0; inputElements[i]; ++i) {
      if (inputElements[i].checked) {
        checkedValue.push(inputElements[i].value);
      }
    }
    return checkedValue;
  }

  function cancelHandle() {}

  const nameValue = document.getElementById("name").value;
  const emailValue = document.getElementById("email").value;
  const ageValue = document.getElementById("number").value;
  const select = document.getElementById("role-select");
  const selectValue = select.options[select.selectedIndex].text;
  const radioValue = radioSelected();
  const checkBoxValue = checkBoxSelected();
  const commentsValue = document.getElementById("comments").value;

  const showInfo = `
  <div style="width: 400px; margin: auto; ">
  <table>
    <thead>
      <tr>
        <th style="width: 150px;">Item</th>
        <th style="width: 250px;">Info</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name:</td>
        <td>${nameValue}</td>
      </tr>
      <tr>
        <td>Email:</td>
        <td>${emailValue}</td>
      </tr>
      <tr>
        <td>Age</td>
        <td>${ageValue}</td>
      </tr>
      <tr>
        <td>Current Role:</td>
        <td>${selectValue}</td>
      </tr>
      <tr>
        <td>Recommend FA:</td>
        <td>${radioValue}</td>
      </tr>
      <tr>
        <td>Improved:</td>
        <td>${checkBoxValue}</td>
      </tr>
      <tr>
        <td>Comments:</td>
        <td>${commentsValue}</td>
      </tr>
    </tbody>
  </table>   
  </div>`;
  document.write(showInfo);
}
