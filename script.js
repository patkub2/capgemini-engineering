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
  let avg = element.marks.reduce((a, b) => a + b, 0) / element.marks.length;

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
    avg +
    "</li>" +
    "</ul></div>";
  //if (avg > 5) {
  //  document.getElementById(element.name).style.borderColor = "red";
  // }
});

console.log(txt);
document.getElementById("demo").innerHTML = txt;
