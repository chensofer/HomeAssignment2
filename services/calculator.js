function calculatePrice() {
    const siteType = document.getElementById('site-type').value;
    const pages = parseInt(document.getElementById('pages').value);
    const customDesign = document.querySelector('input[name="custom-design"]:checked');
  
    const resultBox = document.getElementById('result');
  
    if (!siteType || isNaN(pages) || pages < 1 || pages > 10 || !customDesign) {
      resultBox.style.display = 'block';
      resultBox.style.color = 'red';
      resultBox.textContent = 'Please fill out all fields correctly.';
      return;
    }
  
    let basePrice = 0;
    switch (siteType) {
      case 'business':
        basePrice = 1000;
        break;
      case 'store':
        basePrice = 2000;
        break;
      case 'blog':
        basePrice = 1500;
        break;
    }
  
    const extraPages = pages > 1 ? (pages - 1) * 200 : 0;
  
    const customDesignPrice = customDesign.value === 'yes' ? 1000 : 0;
  
    const totalPrice = basePrice + extraPages + customDesignPrice;
  
    resultBox.style.display = 'block';
    resultBox.style.color = '#222';
    resultBox.textContent = `Estimated Price: ₪${totalPrice.toLocaleString()}`;
}

function resetForm() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('result').textContent = '';
}
  
  