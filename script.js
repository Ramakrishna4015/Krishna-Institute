// Get modal, button, and close elements
const modal = document.getElementById('loginModal');
const loginBtn = document.getElementById('login-btn');
const closeBtn = document.querySelector('.close-btn');

// When the user clicks the "LOG IN" button, open the modal
loginBtn.addEventListener('click', function() {
    modal.style.display = 'flex';  // Show the modal (flex layout)
});

// When the user clicks on the close button (x), close the modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';  // Hide the modal
});

// When the user clicks outside the modal content, close the modal
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';  // Hide the modal
    }
});
