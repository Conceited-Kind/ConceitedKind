const viewProjectButtons = document.querySelectorAll('.view-project-btn');

viewProjectButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const projectUrl = button.getAttribute('href');
    const confirmNavigation = confirm('You are about to view this project. Do you want to proceed?');

    if (confirmNavigation) {
      window.open(projectUrl, '_blank'); // Open the link in a new tab
    } else {
      event.preventDefault(); // Prevent the link from opening
    }
  });
});

document.querySelectorAll('.project-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        console.log(`Navigating to ${this.href}`);
    });
});

// Example: Form submission alert
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting
    alert('Thank you for reaching out! I will get back to you soon.');
    // You can add code here to send the form data to a server
  });