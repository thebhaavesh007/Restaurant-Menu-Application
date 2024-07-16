document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-button');
  const menuItems = document.querySelectorAll('.menu-item');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const filter = button.getAttribute('data-filter');
          filterMenu(filter); // Call the filterMenu function with the filter value
      });
  });

  document.getElementById('search-input').addEventListener('input', function() {
      const searchValue = this.value.toLowerCase();

      menuItems.forEach(item => {
          const itemName = item.querySelector('h3').textContent.toLowerCase();
          if (itemName.includes(searchValue)) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      });
  });
});

// Function to handle filtering menu items
function filterMenu(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const dataCategory = item.getAttribute('data-category');
        if (category === 'all' || dataCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Function to handle image hover events
function enlargeImage(image) {
    image.style.transform = 'scale(1.1)';
}

function resetImageSize(image) {
    image.style.transform = 'scale(1)';
}

// Function to handle adding items to the cart
function addToCart(itemName, price) {
    // Add your logic for adding items to the cart here
    console.log(`Added ${itemName} to cart. Price: $${price}`);
}
