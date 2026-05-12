const inputs = document.querySelectorAll(".input");

function fallMoney(amout) {
  if (amout > 50) {
    amout = 50;
  }

  amout = Math.round(amout / 5);

  for (let i = 0; i < amout; i++) {
    let div = document.createElement("div");
    div.classList.add("money");
    div.style.left = `${Math.floor(Math.random() * 79)}%`;

    let divValue = document.createTextNode(`$${amout}`);

    div.appendChild(divValue);

    document.getElementById("moneyFallContainer").appendChild(div);

    setTimeout(() => {
      div.remove();
    }, 1200);
  }
}

function calculate() {
  let price = Number(document.getElementById("priceInput").value);
  let discount = Number(document.getElementById("discountInput").value);

  discount = discount / 100;

  let discountedPrice = price * discount;

  price = price - discountedPrice;

  if (isNaN(discountedPrice)) {
    document.getElementById("price").innerText = "Add Another value!"
    return;
  }

  document.getElementById("price").innerText = price === 0 ? "Free" : `$${String(price)}`;

  fallMoney(price)
}

inputs.forEach(ipt => {
  ipt.addEventListener("input", calculate)
});