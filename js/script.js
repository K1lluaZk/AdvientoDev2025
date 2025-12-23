const button = document.getElementById("colorButton");
const card = document.getElementById("card");

const colors = ["#ffe0e0", "#e0ffe0", "#fff8e1", "#e3f2fd"];
let index = 0;

button.addEventListener("click", () => {
  card.style.backgroundColor = colors[index]; 
  index = (index + 1) % colors.length;        
});


