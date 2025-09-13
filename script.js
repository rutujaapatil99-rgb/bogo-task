function toggleBox(boxNumber) {
  const boxes = document.querySelectorAll('.offer-box');
  const clickedBox = document.getElementById(`box-${boxNumber}`);
  
  // If the clicked box is already expanded, collapse it
  if (clickedBox.classList.contains('expanded')) {
    clickedBox.classList.remove('expanded');
    return;
  }
  
  // Collapse all boxes first
  boxes.forEach(box => {
    box.classList.remove('expanded');
  });
  
  // Expand the clicked box
  clickedBox.classList.add('expanded');
}

// Initialize with the second box expanded by default
document.addEventListener('DOMContentLoaded', function() {
  // Start with the second box expanded as shown in the example
  toggleBox(2);
});

// Additional functionality for form submission
document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
  const expandedBox = document.querySelector('.offer-box.expanded');
  if (!expandedBox) {
    alert('Please select an option first');
    return;
  }
  
  const unitCount = expandedBox.id.split('-')[1];
  alert(`Added ${unitCount} unit(s) to cart!`);
});
