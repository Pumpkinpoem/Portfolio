document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    // Here, you can add code to actually send the message using an API if needed
    this.reset(); // Reset the form fields
});
