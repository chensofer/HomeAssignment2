function calculatePrice() {
  const siteType = document.getElementById("site-type").value;
  const pages = parseInt(document.getElementById("pages").value);
  const customDesign = document.querySelector(
    'input[name="custom-design"]:checked'
  );
  const resultBox = document.getElementById("result");

  if (!siteType || isNaN(pages) || pages < 1 || pages > 10 || !customDesign) {
    resultBox.style.display = "block";
    resultBox.style.color = "rgb(121, 3, 3)";
    resultBox.textContent =
      "⚠️ Error: Please fill out all required fields correctly!";
    return;
  }

  let basePrice = 0;

  if (siteType === "business") {
    basePrice = 1000;
  } else if (siteType === "store") {
    basePrice = 2000;
  } else if (siteType === "blog") {
    basePrice = 1500;
  }

  let extraPages = 0;
  if (pages > 1) {
    extraPages = (pages - 1) * 200;
  }

  let customDesignPrice = 0;
  if (customDesign.value === "yes") {
    customDesignPrice = 1000;
  }

  const totalPrice = basePrice + extraPages + customDesignPrice;

  resultBox.style.display = "block";
  resultBox.style.color = "#222";
  resultBox.textContent = "💰 Estimated Price: " + totalPrice + " ₪";
}

function resetForm() {
  document.getElementById("result").style.display = "none";
  document.getElementById("result").textContent = "";
}
