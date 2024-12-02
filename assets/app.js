document.addEventListener('DOMContentLoaded', function() {
  console.log('Army Cadet Shop theme loaded');

  // Example: Toggle product description visibility
  const productDescriptionButton = document.querySelector('.product-description-button');
  if (productDescriptionButton) {
    productDescriptionButton.addEventListener('click', function() {
      const productDescription = document.querySelector('.product-description');
      productDescription.classList.toggle('hidden');
    });
  }
});
