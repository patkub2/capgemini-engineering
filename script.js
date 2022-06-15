const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const students = [
  {
    name: "Martin",
    lastName: "Lant",
    marks: [9, 8, null, 7, 5],
  },

  {
    name: "Francesco",
    lastName: "Portus",
    marks: [5, 4, 2, 3, 2],
  },

  {
    name: "Bill",
    lastName: "Merdoc",
    marks: [10, null, null, null, 10],
  },

  {
    name: "John",
    lastName: "Entman",
    marks: [9, 8, 9, 7, 5],
  },
];

let txt = "";
students.forEach((element) => {
  let docc = document.getElementById(element.name);

  function changeStyle() {
    docc.style.borderColor = "red";
  }

  element.marks.forEach(function (item, index) {
    item = 5 ? changeStyle : null;
  });

  txt +=
    "<div classname='card' id=" +
    element.name +
    " tabindex=1><ul>" +
    "<li>" +
    element.name +
    "</li>" +
    "<li>" +
    element.lastName +
    "</li>" +
    "<li>" +
    element.marks +
    "</li>" +
    "<li>" +
    element.marks.reduce((a, b) => a + b, 0) / element.marks.length +
    "</li>" +
    "</ul></div>";
});
console.log(txt);
document.getElementById("demo").innerHTML = txt;
