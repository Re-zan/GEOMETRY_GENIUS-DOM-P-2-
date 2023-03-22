//random color
function randomcolor(colorById) {
  let color = [
    "#3C9EE7",
    "#E7993C",
    "#E73C99",
    "#3CE746",
    "#E7993C",
    "#57534e",
    "#eab308",
    "#06b6d4",
    "#1d4ed8",
    "#4f46e5",
    "#fb7185",
  ];

  document.getElementById(colorById).addEventListener("mouseover", function () {
    document.getElementById(colorById).style.background =
      color[Math.floor(Math.random() * color.length)];
  });
  document.getElementById(colorById).addEventListener("mouseout", function () {
    document.getElementById(colorById).style.background = "white";
  });
}

//get the values
function geTheValue(inputById) {
  const valuess = document.getElementById(inputById).value;
  document.getElementById(inputById).value = "";
  return valuess;
}
//get the text
function geTheText(inputByIdText) {
  const text = document.getElementById(inputByIdText).innerText;
  return text;
}
//get the parseFloat
function geTheNum(inputByIdNum) {
  const number = parseFloat(document.getElementById(inputByIdNum).innerText);
  return number;
}

//get to the area calculation
let serial = 0;
function mainResult(Name, Reustl) {
  const container = document.getElementById("container_id");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <th>${++serial}</th>
    <td>${Name}</td>
    <td >${Reustl} <span>cm</span><sup>2</sup></td>
    <td> <button class="btn bg-[#1090D8] border-0 py-2 px-2 text-white btn_m text-sm normal-case" >
      Convert to m<sup>2</sup>
    </button></td>
    <td ><i class="fa-solid fa-square-xmark text-red-400 text-4xl del"></i></td>
    `;
  container.appendChild(tr);

  //convert to meter
  const mbtn = document.querySelectorAll(".btn_m");
  for (let elments of mbtn) {
    elments.addEventListener("click", function (event) {
      let cm_to_m = "m";
      let final = event.target.parentNode.parentNode.children[2].children[0];
      final.innerText = cm_to_m;

      let convert_to_m =
        parseFloat(event.target.parentNode.parentNode.children[2].innerText) /
        100;
      let decimals = Math.round(convert_to_m * 100) / 100;
      event.target.parentNode.parentNode.children[2].innerText = decimals;
    });
  }

  //delete
  const dataDelete = document.querySelectorAll(".del");
  for (let data of dataDelete) {
    data.addEventListener("click", function (event) {
      let fgsd = event.target.parentNode.parentNode;
      fgsd.style.display = "none";
    });
  }
  //
}

//decimal
function getDecimal(value) {
  return Math.round(value * 100) / 100;
}
