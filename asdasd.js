const chartBox = dopcument.getElementById("chartBox")[0];
console.log(chartBox);

products.forEach((product, index) => {
  let ItemHR = document.createElement("HR");
  let ItemP = document.createElement("P");
  let ItemPText = document.createTextNode(
    `${product.brand}: $${product.price}`
  );
  ItemP.appendChild(ItemPText);
  chartBox.appendChild(itemP);
  chartBox.appendChild(itemP);
});
